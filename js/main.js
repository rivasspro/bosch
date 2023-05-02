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

// grid_productos.addEventListener('mouseleave', () => {
//   if (!esDispositivoMovil()) {
//     grid_productos.classList.remove('activo');
//   }
// });
// grid_servicios.addEventListener('mouseleave', () => {
//   if (!esDispositivoMovil()) {
//     grid_servicios.classList.remove('activo');
//   }
// });
// grid_conocimiento.addEventListener('mouseleave', () => {
//   if (!esDispositivoMovil()) {
//     grid_conocimiento.classList.remove('activo');
//   }
// });

// -- MODAL --

const closeModal = document.querySelectorAll(".modal__close");
const tagP = document.querySelector(".tagP");
const tag = document.querySelectorAll(".table_tag");
const modalP = document.querySelector(".modal.p");
const modal = document.querySelectorAll(".modal");
const btnZoom = document.querySelectorAll(".swiper-zoom");
const modalSlider = document.querySelector(".modal.slider");
const bodyOverflow = () => {
  document.querySelector("body").classList.toggle("overflow");
};

tagP.addEventListener("click", () => {
  modalP.classList.add("modal--show");
  console.log("tag-principal");
  bodyOverflow();
});

// */ Click tags table_producto
tag.forEach((cadaTag, i) => {
  tag[i].addEventListener("click", (e) => {
    e.preventDefault();
    tag.forEach((cadaTag, i) => {
      modal[i].classList.remove("modal--show");
    });
    modal[i].classList.add("modal--show");
    bodyOverflow();
    console.log(cadaTag + ` open-modal ` + [i]);
  });
});
btnZoom.forEach((swiper_zoom, i) => {
  btnZoom[i].addEventListener("click", (e) => {
    e.preventDefault();
    btnZoom.forEach((swiper_zoom, i) => {
      modalSlider.classList.remove("modal--show");
    });
    modalSlider[i].classList.add("modal--show");
    console.log(swiper_zoom + ` click ` + [i]);
    
  });
});
closeModal.forEach((cadaClose, i) => {
  closeModal[i].addEventListener("click", (e) => {
    e.preventDefault();
    modal[i].classList.remove("modal--show");
    bodyOverflow();
    console.log(cadaClose + ` close-modal ` + [i]);
  });
});

// -- Slider

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});
