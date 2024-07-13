const menu = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');
const close = document.querySelector('.close');

menu.addEventListener('click', function() {
    sidebar.style.display = "block";
    menu.style.display = "none"
});
close.addEventListener('click', function() {
    sidebar.style.display = "none";
    menu.style.display = "block"
});
