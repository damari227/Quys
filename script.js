const body = document.getElementsByTagName('body')[0];
const wrapper = document.getElementsByClassName('wrapper')[0];
const tombol = document.getElementById('cek');
const skor = document.getElementById('skor');
const outro = document.getElementById('outro');

// Ini soal nya
const daftarSoal = [
	{
		soal : "Nama kapten pinguin?",
		pilihJawaban : ["Rapi","Boris","Agus"],
		jawaban : "Agus"
	},
	{
		soal : "Nama orang tua yang sering di bully",
		pilihJawaban : ["Boris","Boris","Boris"],
		jawaban : "Boris"
	},
	{
		soal : "Nama bapak nya dhika",
		pilihJawaban : ["Tumari","Rolan","Edi"],
		jawaban : "Tumari"
	}
];

// Menampilkan kotak kerja ketika halaman di load
const showWrapper = () => {
	skor.innerHTML = 0;
	wrapper.style.opacity = 1;
	dapatkanSoal(0);
}

// Mendapatkan soal ketika halaman di load, atau pun lanjut soal
const dapatkanSoal = (i) => {
	let soal = wrapper.getElementsByClassName('soal')[0];
	soal.innerHTML = daftarSoal[i].soal;
	let daftarJawaban = daftarSoal[i].pilihJawaban;

	tombol.setAttribute('value', i);

	let jawaban = document.getElementById('jawaban');
	jawaban.innerHTML = "";

	daftarJawaban.forEach((data) => {
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

// Handle ketika tombol yakin di klik
tombol.addEventListener('click', () => {
	let soal = parseInt(tombol.getAttribute('value'));
	let jawabanBener = daftarSoal[soal].jawaban;
	let jawabanDiPilih = document.querySelector('input[type=radio]:checked').value;

	// Cek jawaban
	if (jawabanBener == jawabanDiPilih) {
		let totalSkor = parseInt(skor.innerHTML);
		skor.innerHTML = totalSkor + 1;

		swal({
			text:'Benar',
			icon:'success'
		})
	} else {
		swal({
			text:'Salah',
			icon:'warning'
		})
	}
	
	// Load soal baru
	if ((soal + 1) == daftarSoal.length) {

		outro.innerHTML = "Game selesai";
		wrapper.style.display = "none";
	
	} else {
	
		dapatkanSoal(soal + 1);
	
	}
});