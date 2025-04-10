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

function atualizarTextoQuemSomos() {
  const paragrafo = document.getElementById('texto-quem-somos');

  // Se o parágrafo não existir na página, não faz nada
  if (!paragrafo) return;

  const textoOriginal =
    "Nossa clínica veterinária é comprometida com o cuidado e bem-estar de cada pet, com uma equipe dedicada e instalações modernas, buscamos garantir saúde e conforto em cada atendimento. Cuidamos do seu animalzinho como se fosse nosso!";

  const textoAdaptado =
    "Nossa clínica veterinária é comprometida com o cuidado e bem-estar de cada pet, com uma equipe dedicada e instalações modernas, buscamos garantir saúde e conforto em cada atendimento.";

  if (window.matchMedia("(max-width: 600px)").matches) {
    paragrafo.textContent = textoAdaptado;
  } else {
    paragrafo.textContent = textoOriginal;
  }
}

// Atualiza o conteúdo ao carregar a página
document.addEventListener("DOMContentLoaded", atualizarTextoQuemSomos);

// Atualiza ao redimensionar a janela
window.addEventListener("resize", atualizarTextoQuemSomos);

function atualizarTextoProduto() {
  const titulo = document.getElementById("titulo-produto");
  const paragrafo = document.getElementById("texto-produto");

  // Se os elementos não existirem na página, não faz nada
  if (!titulo || !paragrafo) return;

  const tituloOriginal = "Nossos serviços";
  const tituloAdaptado = "Nossos serviços visam o cuidado do seu pet";

  const textoOriginal =
    "Na nossa clínica veterinária, cada consulta é realizada com dedicação e atenção aos detalhes, garantindo o melhor cuidado para o seu pet. Contamos com uma equipe experiente e atualizada para oferecer diagnósticos precisos e tratamentos eficazes.";

  const textoAdaptado =
    "Na nossa clínica veterinária, cada consulta é realizada com dedicação e atenção aos detalhes, garantindo o melhor cuidado para o seu pet.";

  if (window.matchMedia("(max-width: 600px)").matches) {
    titulo.textContent = tituloAdaptado;
    paragrafo.textContent = textoAdaptado;
  } else {
    titulo.textContent = tituloOriginal;
    paragrafo.textContent = textoOriginal;
  }
}

// Chama as funções ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  atualizarTextoQuemSomos();
  atualizarTextoProduto();
});

// Atualiza ao redimensionar a janela
window.addEventListener("resize", () => {
  atualizarTextoQuemSomos();
  atualizarTextoProduto();
});