 document.addEventListener("DOMContentLoaded", function () {
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

    prev.addEventListener("click", () => moveSlide(-1));
    next.addEventListener("click", () => moveSlide(1));

    // Auto-slide every 3 seconds
    setInterval(() => moveSlide(1), 4000);
});
