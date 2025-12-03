// CARROSSEL
const track = document.querySelector(".carousel-track");
const cards = document.querySelectorAll(".project-card");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;
const total = cards.length;

function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  index++;
  if (index >= total) index = 0;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) index = total - 1;
  updateCarousel();
});


// ZOOM AO CLICAR NA IMAGEM
const overlay = document.getElementById("img-overlay");
const overlayImg = document.getElementById("overlay-img");
const thumbs = document.querySelectorAll(".project-thumb img");


thumbs.forEach(img => {
  img.addEventListener("click", () => {
    overlay.style.display = "flex";
    overlayImg.src = img.src;
  });
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});


// EFEITO DIGITAR H2 DO INÍCIO

const text = "Desenvolvedor Back-End Júnior";
const speed = 150;
const eraseSpeed = 90;
const pause = 4000;

let i = 0;
let typing = true;

function typeEffect() {
  const h2 = document.getElementById("type-text");

  if (typing) {
    h2.textContent = text.substring(0, i);
    i++;

    if (i <= text.length) {
      setTimeout(typeEffect, speed);
    } else {
      typing = false;
      setTimeout(typeEffect, pause);
    }

  } else {
    h2.textContent = text.substring(0, i);
    i--;

    if (i >= 0) {
      setTimeout(typeEffect, eraseSpeed);
    } else {
      typing = true;
      setTimeout(typeEffect, 700);
    }
  }
}

typeEffect();

