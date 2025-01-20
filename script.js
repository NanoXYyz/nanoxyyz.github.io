// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

    // Ketika dokumen di klik
document.querySelector('#hamburger-menu').onclick = () => {
navbarNav.classList.toggle('active');
};

// klik diluar side bar untuk menggilangkan nav
const hamburger = document.querySelector('#hamburger-menu')

document.addEventListener('click', function (e) {
    if( !hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// Animasi Typing


// Side
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length)
    {
    slideIndex = 1;
    }
    if (n < 1)
    {
    slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++)
    {
    slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}