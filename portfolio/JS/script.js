// bagian portfolio & beranda
const menuToggle = document.querySelector('.menu-toggle input');
const header = document.querySelector('header ul');

menuToggle.addEventListener('click', function() {
    header.classList.toggle('slide');
});