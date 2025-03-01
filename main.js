document.addEventListener("DOMContentLoaded", function () {
    // ===== Navigation Menu Functionality =====
    const navMenu = document.querySelector('.nav__menu');
    const navToggle = document.querySelector('.nav__toggle');
    const navClose = document.querySelector('.nav__close');

    if (navMenu && navToggle && navClose) {
        // Toggle menu when toggle button is clicked or touched
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event bubbling
            navMenu.classList.toggle('show-menu');
            console.log('Toggle button clicked'); // Debugging
        });
        navToggle.addEventListener('touchstart', (e) => {
            e.stopPropagation(); // Prevent event bubbling
            navMenu.classList.toggle('show-menu');
            console.log('Toggle button touched'); // Debugging
        });

        // Close menu when close button is clicked or touched
        navClose.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event bubbling
            navMenu.classList.remove('show-menu');
            console.log('Close button clicked'); // Debugging
        });
        navClose.addEventListener('touchstart', (e) => {
            e.stopPropagation(); // Prevent event bubbling
            navMenu.classList.remove('show-menu');
            console.log('Close button touched'); // Debugging
        });

        // Close menu when clicking outside the menu
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                navMenu.classList.remove('show-menu');
                console.log('Clicked outside menu'); // Debugging
            }
        });
        document.addEventListener('touchstart', (e) => {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                navMenu.classList.remove('show-menu');
                console.log('Touched outside menu'); // Debugging
            }
        });
    } else {
        console.error("Navigation elements not found!"); // Debugging
    }

    // ===== Carousel Functionality =====
    const container = document.querySelector(".carousel-container");
    const images = document.querySelectorAll(".carousel-container img");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    if (container && images.length > 0 && prev && next) {
        let index = 0;
        const total = images.length;

        function moveSlide(step) {
            index = (index + step + total) % total;
            container.style.transform = `translateX(-${index * 100}%)`;
            console.log(`Carousel moved to slide ${index + 1}`); // Debugging
        }

        // Auto-slide every 60 seconds (1 minute)
        setInterval(() => moveSlide(1), 60000);

        // Manual navigation
        prev.addEventListener("click", () => moveSlide(-1));
        prev.addEventListener("touchstart", () => moveSlide(-1)); // For mobile
        next.addEventListener("click", () => moveSlide(1));
        next.addEventListener("touchstart", () => moveSlide(1)); // For mobile
    } else {
        console.error("Carousel elements not found!"); // Debugging
    }
});
