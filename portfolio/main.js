document.addEventListener("DOMContentLoaded", function () {
    // ===== Carousel Functionality =====
    const container = document.querySelector(".carousel-container");
    const images = document.querySelectorAll(".carousel-container img");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    
    let index = 0;
    const total = images.length;
    
    function moveSlide(step) {
        index = (index + step + total) % total;
        container.style.transform = `translateX(-${index * 100}%)`;
    }

    // Auto-slide every 60 seconds (1 minute)
    setInterval(() => moveSlide(1), 60000);

    // Manual navigation
    prev.addEventListener("click", () => moveSlide(-1));
    next.addEventListener("click", () => moveSlide(1));

    // ===== Navigation Menu Functionality =====
    const navMenu = document.querySelector('.nav__menu');
    const navToggle = document.querySelector('.nav__toggle');
    const navClose = document.querySelector('.nav__close');

    // Toggle menu when toggle button is clicked
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
    });

    // Close menu when close button is clicked
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});