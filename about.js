const about = document.querySelector('.about');
const image = document.querySelector('.image');
const img = document.querySelector('img')

image.addEventListener('click', () => {
    img.style.filter = "none";
    about.style.display = "block";  
})