// ================= STICKY NAV =================

window.addEventListener("scroll", () => {
    document.getElementById("main-nav")
        .classList.toggle("scrolled", window.scrollY > 40);
});


// ================= HERO SLIDER =================

const bgA = document.querySelector(".hero-bg-a");
const bgB = document.querySelector(".hero-bg-b");
const btnPrev = document.querySelector(".hero-arrow-left");
const btnNext = document.querySelector(".hero-arrow-right");

const slides = [
  "./assets/images/hero-01.jpg",
  "./assets/images/hero-02.jpg",
  "./assets/images/hero-03.jpg",
  "./assets/images/hero-04.jpg"
];

let currentSlide = 0;
let showingA = true;

bgA.style.backgroundImage = `url('${slides[0]}')`;

function changeSlide(index) {
    const nextImage = slides[index];

    if (showingA) {
        bgB.style.backgroundImage = `url('${nextImage}')`;
        bgB.style.opacity = 1;
        bgA.style.opacity = 0;
    } else {
        bgA.style.backgroundImage = `url('${nextImage}')`;
        bgA.style.opacity = 1;
        bgB.style.opacity = 0;
    }

    showingA = !showingA;
    currentSlide = index;
}

function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    changeSlide(next);
}

function prevSlide() {
    let prev = (currentSlide - 1 + slides.length) % slides.length;
    changeSlide(prev);
}

btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", prevSlide);

setInterval(nextSlide, 7000);


// ================= PROPERTY FILTER =================

const filterButtons = document.querySelectorAll(".filter-btn");
const propertyCards = document.querySelectorAll(".property-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        // Remove active from all buttons
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        propertyCards.forEach(card => {

            const types = card.dataset.type.split(" ");

            if (filter === "all" || types.includes(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });
});

