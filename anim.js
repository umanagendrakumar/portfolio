const menu = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');
const close = document.querySelector('.close');

menu.addEventListener('click', function () {
    sidebar.style.display = "block";
    menu.style.display = "none"
});
close.addEventListener('click', function () {
    sidebar.style.display = "none";
    menu.style.display = "block";
});


const about = document.querySelector('.about');
const image = document.querySelector('.image img');
const img = document.querySelector('.pic');
const arrow = document.querySelector('.clickme');

setTimeout(() => {
    img.style.filter = "none";
    about.style.display = "block";
    arrow.style.display = "none";
}, 2000);

