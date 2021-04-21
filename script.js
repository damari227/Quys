const body = document.getElementsByTagName('body')[0];
const wrapper = document.getElementsByClassName('wrapper')[0];
const tombol = document.getElementById('cek');

const daftarSoal = [
	{
		soal : "Nama kapten pinguin?",
		pilihJawaban : ["Rapi","Boris","Agus"],
		jawaban : "Agus"
	}
];

const showWrapper = () => {
	wrapper.style.opacity = 1;
	dapatkanSoal();
}


const dapatkanSoal = () => {
	let soal = wrapper.getElementsByClassName('soal')[0];
	soal.innerHTML = daftarSoal[0].soal;
	let daftarJawaban = daftarSoal[0].pilihJawaban;

	daftarJawaban.forEach((data) => {

		let jawaban = document.getElementsByClassName('jawaban')[0];

		// Membuat element input jawaban
		let input = document.createElement('input');

		// Menambahkan atribut
		input.setAttribute('value', data);
		input.setAttribute('type','radio');
		input.setAttribute('name','jawaban');

		// Membuat wrapper input jawaban
		let jawabanWrapper = document.createElement('div');

		// Membuat element teks soal
		let soalTeks = document.createElement('span');
		soalTeks.innerHTML = data;

		jawabanWrapper.appendChild(input);
		jawabanWrapper.appendChild(soalTeks);

		jawaban.appendChild(jawabanWrapper);
	});
}

tombol.addEventListener('click', () => {
	
	let jawabanBener = daftarSoal[0].jawaban;
	let jawabanDiPilih = document.querySelector('input[type=radio]:checked').value;

	if (jawabanBener == jawabanDiPilih) {
		alert('Bener');
	} else {
		alert('Salah');
	}

});