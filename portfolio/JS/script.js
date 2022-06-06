// bagian portfolio
const menuToggle = document.querySelector('.menu-toggle input');
const header = document.querySelector('header ul');

menuToggle.addEventListener('click', function() {
header.classList.toggle('slide');
});
// bagian beranda
const menuToogle = document.querySelector('.menu-toogle input');
const nav = document.querySelector('nav ul');

menuToogle.addEventListener('click', function() {
nav.classList.toggle('slide');
});





let numbers = document.getElementById('numbers');
let counters = 0;
setInterval(() => {
    if(counters == 30){
        clearInterval();
    }else{
    counters +=1;
    numbers.innerHTML = counters + '%';
    }
}, 50);