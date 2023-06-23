const contenedor_enlaces = document.querySelector(".contenedor-enlaces-nav"),
  categorias = document.querySelector("#grid-productos .categorias"),
  contenedor_subcategorias = document.querySelector(
    ".contenedor-subcategorias"
  ),
  productos = document.getElementById("productos"),
  servicios = document.getElementById("servicios"),
  conocimiento = document.getElementById("conocimiento"),
  grid_productos = document.getElementById("grid-productos"),
  grid_servicios = document.getElementById("grid-servicios"),
  grid_conocimiento = document.getElementById("grid-conocimiento"),
  btnClose = document.querySelector(".btnClose"),
  btnClose1 = document.querySelector(".btnClose1"),
  btnClose2 = document.querySelector(".btnClose2"),
  btnRegresar = document.querySelector(".btn-regresar"),
  btnRegresar1 = document.querySelector(".btn-regresar1"),
  btnRegresar2 = document.querySelector(".btn-regresar2"),
  backAgua = document.querySelector(".backAgua"),
  backAire = document.querySelector(".backAire"),
  backCalefaccion = document.querySelector(".backCalefaccion"),
  backEmisores = document.querySelector(".backEmisores"),
  header = document.querySelector(".Header"),
  headerNavigation = document.querySelector(".Header_navigation"),
  btnMobile = document.getElementById("btnMobile"),
  quickAssistence = document.querySelector(".quickAssistence");
esDispositivoMovil = () => window.innerWidth <= 1193;

//Close Menu

btnClose.addEventListener("click", () => {
  grid_productos.classList.remove("activo");
  productos.classList.remove("activo");
  servicios.classList.remove("activo");
  conocimiento.classList.remove("activo");
});
btnClose1.addEventListener("click", () => {
  grid_servicios.classList.remove("activo");
  productos.classList.remove("activo");
  servicios.classList.remove("activo");
  conocimiento.classList.remove("activo");
});
btnClose2.addEventListener("click", () => {
  grid_conocimiento.classList.remove("activo");
  productos.classList.remove("activo");
  servicios.classList.remove("activo");
  conocimiento.classList.remove("activo");
});

// Toogle Submenus
productos.addEventListener("click", () => {
  if (!esDispositivoMovil()) {
    productos.classList.add("activo");
    servicios.classList.remove("activo");
    conocimiento.classList.remove("activo");
    grid_productos.classList.add("activo");
    grid_servicios.classList.remove("activo");
    grid_conocimiento.classList.remove("activo");
  }
});
servicios.addEventListener("click", () => {
  if (!esDispositivoMovil()) {
    servicios.classList.add("activo");
    productos.classList.remove("activo");
    conocimiento.classList.remove("activo");
    grid_servicios.classList.add("activo");
    grid_productos.classList.remove("activo");
    grid_conocimiento.classList.remove("activo");
  }
});
conocimiento.addEventListener("click", () => {
  if (!esDispositivoMovil()) {
    conocimiento.classList.add("activo");
    productos.classList.remove("activo");
    servicios.classList.remove("activo");
    grid_conocimiento.classList.add("activo");
    grid_productos.classList.remove("activo");
    grid_servicios.classList.remove("activo");
  }
});

//Toggle Submenus Categorias
document.querySelectorAll("#menu .categorias a").forEach((elemento) => {
  if (!esDispositivoMovil()) {
    elemento.addEventListener("mouseenter", (e) => {
      // console.log(e.target.dataset.categoria)
      document.querySelectorAll("#menu .subcategoria").forEach((categoria) => {
        // console.log(categoria.dataset.categoria);
        categoria.classList.remove("activo");
        if (categoria.dataset.categoria == e.target.dataset.categoria) {
          categoria.classList.add("activo");
        }
      });
    });
  }
});

//Mobile
btnMobile.addEventListener("click", (e) => {
  e.preventDefault();
  //console.log(e.target)
  header.classList.toggle("-is-activo");
  document.querySelector("body").classList.toggle("overflow");
});

// Open Categorias
productos.addEventListener("click", () => {
  if (esDispositivoMovil()) {
    grid_productos.classList.add("activo");
    contenedor_enlaces.style.display = "none";
    quickAssistence.style.display = "none";
  }
});
servicios.addEventListener("click", () => {
  if (esDispositivoMovil()) {
    grid_servicios.classList.add("activo");
    contenedor_enlaces.style.display = "none";
    quickAssistence.style.display = "none";
  }
});
conocimiento.addEventListener("click", () => {
  if (esDispositivoMovil()) {
    grid_conocimiento.classList.add("activo");
    contenedor_enlaces.style.display = "none";
    quickAssistence.style.display = "none";
  }
});
//Close Regresar
btnRegresar.addEventListener("click", () => {
  grid_productos.classList.remove("activo");
  contenedor_enlaces.style.display = null;
  quickAssistence.style.display = null;
});
btnRegresar1.addEventListener("click", () => {
  grid_servicios.classList.remove("activo");
  contenedor_enlaces.style.display = null;
  quickAssistence.style.display = null;
});
btnRegresar2.addEventListener("click", () => {
  grid_conocimiento.classList.remove("activo");
  contenedor_enlaces.style.display = null;
  quickAssistence.style.display = null;
});
// Open Sub-categorias Productos
document
  .querySelectorAll("#grid-productos .categorias a")
  .forEach((elemento) => {
    if (esDispositivoMovil()) {
      elemento.addEventListener("click", (e) => {
        // console.log(e.target.dataset.categoria)
        document
          .querySelectorAll("#grid-productos .subcategoria")
          .forEach((categoria) => {
            // console.log(categoria.dataset.categoria);
            categoria.classList.remove("activo");
            //contenedor_subcategorias.classList.remove('activo');
            if (categoria.dataset.categoria == e.target.dataset.categoria) {
              categorias.style.display = "none";
              contenedor_subcategorias.classList.add("activo");
              categoria.classList.add("activo");
            }
          });
      });
    }
  });

// Back of Subcategorias
backAgua.addEventListener("click", () => {
  categorias.style.display = null;
  contenedor_subcategorias.classList.remove("activo");
  console.log("backSub");
});
backAire.addEventListener("click", () => {
  categorias.style.display = null;
  contenedor_subcategorias.classList.remove("activo");
  console.log("backSub");
});
backCalefaccion.addEventListener("click", () => {
  categorias.style.display = null;
  contenedor_subcategorias.classList.remove("activo");
  console.log("backSub");
});
backEmisores.addEventListener("click", () => {
  categorias.style.display = null;
  contenedor_subcategorias.classList.remove("activo");
  console.log("backSub");
});

// -- MODAL --

const tag = document.querySelectorAll(".tag");
const swiperZoom = document.querySelectorAll(".swiper-zoom");
const btnModalClose = document.querySelectorAll(".modal__close");
const btnNoticePrivacy = document.querySelector(".notice-privacy");

const modal = document.querySelector(".modal__tag");
const modalSwiper = document.querySelector(".modal__swiper");
const modalNoticePrivacy = document.querySelector(".modal__notice_privacy");

const bodyOverflow = () => {
  document.querySelector("body").classList.toggle("overflow");
};

// -- Tag --
tag.forEach((modalOpenElement, index) => {
  modalOpenElement.addEventListener("click", (e) => {
    //(e) evita link haga scroll al click
    e.preventDefault();
    modal.classList.add("--show");
    bodyOverflow();
    console.log(modalOpenElement + ` Open Modal ` + [index]);
  });
});
// swiper button zoom
swiperZoom.forEach((element, i) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    modalSwiper.classList.add("--show");
    swiperModal.slideTo(swiper.activeIndex);
    bodyOverflow();
    console.log(element + ` swiper-zomm ` + [i]);
  });
});
// Link Notice Privacy Footer
btnNoticePrivacy.addEventListener("click", (e) => {
  e.preventDefault();
  modalNoticePrivacy.classList.add("--show");
  bodyOverflow();
});

// Close All Modals
btnModalClose.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();

    const elements = [modal, modalSwiper, modalNoticePrivacy];

    elements.forEach((el) => {
      if (el !== null) {
        el.classList.remove("--show");
      }
    });

    bodyOverflow();
    console.log(`Button close modal: ${index}`);
  });
});

// Notice Privacy

document.addEventListener("DOMContentLoaded", () => {
  const btn_accep_privacy = document.querySelector(".--accept-privacy");
  const btn_no_accep_privacy = document.querySelector(".--no-accept-privacy");
  let currentTime = 3000;

  btn_no_accep_privacy.addEventListener("click", (e) => {
    e.preventDefault();
    modalNoticePrivacy.classList.remove("--show");
    bodyOverflow();
  });

  btn_accep_privacy.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("modalPrivacyHide", "true");
    modalNoticePrivacy.classList.remove("--show");
    bodyOverflow();
  });

  const modalPrivacyHide = localStorage.getItem("modalPrivacyHide");
  if (modalPrivacyHide === "true") {
    modalNoticePrivacy.classList.remove("--show");
  } else {
    setTimeout(function () {
      modalNoticePrivacy.classList.add("--show");
      bodyOverflow();
    }, currentTime);
  }
});

// -- Slider config --

var swiperHome = new Swiper(".swiperHome", {
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiperThumbs = new Swiper(".swiperThumbs", {
  spaceBetween: 10,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper = new Swiper(".swiperMain", {
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiperThumbs,
  },
});

var swiperModal = new Swiper(".swiperModal", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination-modal",
    type: "fraction",
  },
});
