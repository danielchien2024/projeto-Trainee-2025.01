document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  const btnPrev = document.querySelector(".volta");
  const btnNext = document.querySelector(".frente");
  const manualBtns = document.querySelectorAll(".manual-btn");
  const slidesContainer = document.querySelector(".slides");

  function updateSlide(index) {
    if (index < 0) {
      currentSlide = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentSlide = 0;
    } else {
      currentSlide = index;
    }

    // Movimentação do carrossel
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    slidesContainer.style.transition = "transform 0.2s ease";

    // Atualizar botão ativo
    manualBtns.forEach((btn, i) => {
      btn.classList.toggle("active", i === currentSlide);
    });

    // Atualizar classe no body com o slide atual
    document.body.classList.remove("slide-0", "slide-1", "slide-2");
    document.body.classList.add(`slide-${currentSlide}`);
  }

  // Eventos de clique nas setas
  btnNext.addEventListener("click", () => updateSlide(currentSlide + 1));
  btnPrev.addEventListener("click", () => updateSlide(currentSlide - 1));

  // Eventos de clique nos botões de navegação manual
  manualBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => updateSlide(index));
  });
});

// SLIDER DOS COMENTARIOS
const container = document.querySelector(".carousel-container-avaliacao");
const slides = document.querySelectorAll(".slide-avaliacao");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let index = 0;

function updateCarousel() {
  const offset = -index * 100;

  container.style.transition = "none";

  container.style.transform = `translateX(${offset}%)`;

  // Esconder ou mostrar os botões conforme o slide
  prevButton.style.display = index === 0 ? "none" : "block";
  nextButton.style.display = index === slides.length - 1 ? "none" : "block";
}

// Inicializa a visibilidade dos botões
updateCarousel();

// Botão "Próximo"
nextButton.addEventListener("click", () => {
  if (index < slides.length - 1) {
    index++;
    updateCarousel();
  }
});

// Botão "Anterior"
prevButton.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});
