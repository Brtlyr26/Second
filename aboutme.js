let slidePosition = 0;
const slides = document.getElementsByClassName('project-container');
const totalSlides = slides.length;

document.querySelector('.carousel-button-next').addEventListener("click", function() {
    moveToNextSlide();
});

document.querySelector('.carousel-button-prev').addEventListener("click", function() {
    moveToPrevSlide();
});

function updateSlidePosition() {
    for (let slide of slides) {
        slide.style.transform = `translateX(-${slidePosition * 100}%)`;
    }
}

function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    updateSlidePosition();
}

function moveToPrevSlide() {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }

    updateSlidePosition();
}
