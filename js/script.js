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

// SLIDER DOS COMENTÁRIOS
const container = document.querySelector(".carousel-container-avaliacao");
const slides = document.querySelectorAll(".slide-avaliacao");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const prevMobile = document.getElementById("prev-mobile");
const nextMobile = document.getElementById("next-mobile");
const indiceAvaliacao = document.getElementById("indice-avaliacao");
const indiceMobile = document.getElementById("indice-mobile");
let index = 0;

function updateCarousel() {
  const offset = -index * 100;
  container.style.transition = "opacity 0.5s ease-in-out";
  container.style.transform = `translateX(${offset}%)`;

  // Atualiza visibilidade dos botões desktop
  if (prevButton && nextButton) {
    prevButton.style.visibility = index === 0 ? "hidden" : "visible";
    nextButton.style.visibility =
      index === slides.length - 1 ? "hidden" : "visible";

    prevButton.style.pointerEvents = index === 0 ? "none" : "auto";
    nextButton.style.pointerEvents =
      index === slides.length - 1 ? "none" : "auto";
  }

  // Atualiza visibilidade dos botões mobile
  if (prevMobile && nextMobile) {
    prevMobile.style.display = index === 0 ? "none" : "flex";
    nextMobile.style.display = index === slides.length - 1 ? "none" : "flex";
  }

  // Atualiza o índice exibido
  if (indiceAvaliacao) {
    indiceAvaliacao.textContent = `${index + 1}`;
  }
  // Atualiza o índice exibido
  if (indiceMobile) {
    indiceMobile.textContent = `${index + 1}`;
  }
}

// Inicializa a visibilidade e índice
updateCarousel();

// Botões Desktop
nextButton?.addEventListener("click", () => {
  if (index < slides.length - 1) {
    index++;
    updateCarousel();
  }
});

prevButton?.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

// Botões Mobile
nextMobile?.addEventListener("click", () => {
  if (index < slides.length - 1) {
    index++;
    updateCarousel();
  }
});

prevMobile?.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});
