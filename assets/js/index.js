// ===============================
// CARROSSEL
// ===============================

const track = document.querySelector(".carousel-track");
const cards = document.querySelectorAll(".project-card");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;
const total = cards.length;

// Move o carrossel
function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

// Botão próximo
nextBtn.addEventListener("click", () => {
  index++;
  if (index >= total) index = 0; // volta ao primeiro
  updateCarousel();
});

// Botão anterior
prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) index = total - 1; // vai para o último
  updateCarousel();
});


// ===============================
// ZOOM AO CLICAR NA IMAGEM
// ===============================
const overlay = document.getElementById("img-overlay");
const overlayImg = document.getElementById("overlay-img");
const thumbs = document.querySelectorAll(".project-thumb img");

// Abre o zoom
thumbs.forEach(img => {
  img.addEventListener("click", () => {
    overlay.style.display = "flex";
    overlayImg.src = img.src;
  });
});

// Fecha ao clicar no fundo
overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});


// ===============================
// EFEITO DIGITAR H2 DO INÍCIO
// ===============================

const text = "Desenvolvedor Back-End Júnior"; // frase que será digitada
const speed = 150;        // velocidade digitando (ms)
const eraseSpeed = 90;   // velocidade apagando (ms)
const pause = 4000;      // tempo com a frase completa (ms)

let i = 0;
let typing = true;

function typeEffect() {
  const h2 = document.getElementById("type-text");

  if (typing) {
    // escrever
    h2.textContent = text.substring(0, i);
    i++;

    if (i <= text.length) {
      setTimeout(typeEffect, speed);
    } else {
      typing = false;
      setTimeout(typeEffect, pause); // pausa com frase completa
    }

  } else {
    // apagar
    h2.textContent = text.substring(0, i);
    i--;

    if (i >= 0) {
      setTimeout(typeEffect, eraseSpeed);
    } else {
      typing = true;
      setTimeout(typeEffect, 700); // pausa antes de digitar novamente
    }
  }
}

typeEffect();

