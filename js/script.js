document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  const btnPrev = document.querySelector(".volta");
  const btnNext = document.querySelector(".frente");
  const manualBtns = document.querySelectorAll(".manual-btn");

  function updateSlide(index) {
    if (index < 0) {
      currentSlide = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentSlide = 0;
    } else {
      currentSlide = index;
    }

    // Aplicar efeito de fade
    slides.forEach((slide, i) => {
      slide.style.opacity = i === currentSlide ? "1" : "0";
      slide.style.transition = "opacity 0.5s ease-in-out";
    });

    // Atualizar botão ativo
    manualBtns.forEach((btn, i) => {
      btn.classList.toggle("active", i === currentSlide);
    });
  }

  // Eventos de clique nas setas
  btnNext.addEventListener("click", () => updateSlide(currentSlide + 1));
  btnPrev.addEventListener("click", () => updateSlide(currentSlide - 1));

  // Eventos de clique nos botões de navegação manual
  manualBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => updateSlide(index));
  });

  // Inicializar slides
  slides.forEach((slide, i) => {
    slide.style.position = "absolute";
    slide.style.top = "0";
    slide.style.left = "0";
    slide.style.width = "100%";
    slide.style.opacity = i === 0 ? "1" : "0";
  });
});
