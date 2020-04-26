

var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 4000); //in milliseconds (4000ms = 4s)

document.addEventListener('DOMContentLoaded', nextSlide, false);

function nextSlide() {
    var slides = document.querySelectorAll('#slides .slide');
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';
}
