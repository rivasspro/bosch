const contenedor_enlaces = document.querySelector(".contenedor-enlaces-nav"),
  categorias = document.querySelector("#grid-productos .categorias"),
  contenedor_subcategorias = document.querySelector(".contenedor-subcategorias"),
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
//Remove Class in Desktop
// window.addEventListener('resize', () => {
//   if (!esDispositivoMovil()) {
//     document.querySelector('body').classList.remove('overflow');
//     header.classList.remove('-is-activo');
//     contenedor_enlaces.style = null;
//     categorias.style = null;
//   } else {
//     grid_productos.classList.remove('activo')
//     productos.classList.remove('activo')
//     grid_servicios.classList.remove('activo')
//     servicios.classList.remove('activo')
//     grid_conocimiento.classList.remove('activo')
//     conocimiento.classList.remove('activo')
//   }
// });
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
document.querySelectorAll("#grid-productos .categorias a").forEach((elemento) => {
    if (esDispositivoMovil()) {
      elemento.addEventListener("click", (e) => {
        // console.log(e.target.dataset.categoria)
        document.querySelectorAll("#grid-productos .subcategoria").forEach((categoria) => {
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

const tag = document.querySelectorAll(".table_tag");
const modal = document.querySelector(".modal__tag");
const modalClose = document.querySelectorAll(".modal__close");
const swiperZoom = document.querySelectorAll(".swiper-zoom");
const modalSwiper = document.querySelector(".modal__swiper");

const bodyOverflow = () => {
  document.querySelector("body").classList.toggle("overflow");
};

function css(element, style) {
  for (const property in style)
      element.style[property] = style[property];
}
// -- Tags --

swiperZoom.forEach((element, i) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    modalSwiper.classList.add("modal--show");
    swiperModal.slideTo(swiper.activeIndex);
    bodyOverflow();
    console.log(element + ` swiper-zomm ` + [i]);
    console.log('David Rivas | uxui | @rivaspro | david22rivas@gmail.com');
  });
});

tag.forEach((element, i) => {
  element.addEventListener("click", (e) => {
    //(e) evita link haga scroll al click
    e.preventDefault();
    modal.classList.add("modal--show");
    bodyOverflow();
    console.log(element + ` Open Modal ` + [i]);
    console.log('David Rivas | uxui | @rivaspro | david22rivas@gmail.com');
  });
});

modalClose.forEach((element, i) => {
  element.addEventListener("click", (e) => {
    //(e) evita link haga scroll al click
    e.preventDefault();
    // close both modal's
    modal.classList.remove("modal--show");
    modalSwiper.classList.remove("modal--show");
    bodyOverflow();
    console.log(element + ` Close Modal ` + [i]);
    console.log('David Rivas | uxui | @rivaspro | david22rivas@gmail.com');
  });
});

// -- Slider --

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
  }
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
