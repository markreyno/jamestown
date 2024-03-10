const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel img');
let currentIndex = 0;
let intervalId;

function showSlide(index) {
    carousel.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

function toggleAutoPlay() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    } else {
        intervalId = setInterval(nextSlide, 2000); 
    }
}


toggleAutoPlay();


document.querySelector('.toggle-button').addEventListener('click', toggleAutoPlay);
