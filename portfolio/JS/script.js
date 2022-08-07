// bagian portfolio & beranda
const menuToggle = document.querySelector('.menu-toggle input');
const header = document.querySelector('header ul');

menuToggle.addEventListener('click', function() {
    header.classList.toggle('slide');
});
// form
document.addEventListener('DOMContentLoaded', function() {
    const inputMaxLengthOnload = document.getElementById('inputName').maxLength;
    document.getElementById('sisaKarakter').innerText = inputMaxLengthOnload;

    document.getElementById('inputName').addEventListener('input', function() { //bisa juga diganti click, saat mau mengisi field
        const jumlahKarakterDiketik = document.getElementById('inputName').value.length;
        const jumlahKarakterMaksimal = document.getElementById('inputName').maxLength;
        // console.log('jumlahKarakterDiketik : ', jumlahKarakterDiketik);
        // console.log('jumlahKarakterMaksimal : ', jumlahKarakterMaksimal);
        const sisaKarakterUpdate = jumlahKarakterMaksimal - jumlahKarakterDiketik;

        document.getElementById('sisaKarakter').innerText = sisaKarakterUpdate.toString();

        if (sisaKarakterUpdate == 0) {
            document.getElementById('sisaKarakter').innerText = 'Batas karakter tercapai!'
        } else if (sisaKarakterUpdate <= 5) {
            document.getElementById('notifikasiSisaKarakter').style.color = 'red';
        } else {
            document.getElementById('notifikasiSisaKarakter').style.color = 'black'
        }
    });
    document.getElementById('inputName').addEventListener('focus', function() {
        // console.log('inputName: focus')
        document.getElementById('notifikasiSisaKarakter').style.display = 'inherit'
    });
    document.getElementById('inputName').addEventListener('blur', function() {
        // console.log('inputName: blur');
        document.getElementById('notifikasiSisaKarakter').style.display = 'none';
    });
});


const submitAction = document.getElementById('form')

submitAction.addEventListener('submit', function(event) {
    const inputName = document.getElementById('inputName').value;
    const hiddenMessage = "TerimaKasih " + inputName + ',' + ' Pesan berhasil dikirim!';

    document.getElementById('sukses').innerText = hiddenMessage;
    event.preventDefault();
});