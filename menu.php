<header class="Header -is-sticky">
  <!-- /Quick links -->
  <div class="Header_top -container">
    <a class="Header_top-logo " href="." target="_self" aria-label="Bosch TT">
      <img class="Header_top-logo-img" alt="Bosch TT" title="Bosch TT" src="./img/bosch.svg" width="144" height="32">
    </a>
    <a class="Header_top-firstLink Btn -with-icon">
      <span class="Btn_label Btn_bold">Home Comfort</span>
    </a>
    <div class="Header_quickLinks">
      <a class="Btn -with-icon" href="#">
        <?= svg_phone() ?>
        <span class="Btn_label">Llamar</span>
      </a>
      <a class="Btn -with-icon" href="#">
        <?= svg_mail() ?>
        <span class="Btn_label">Contacto</span>
      </a>
      <div class="Header_searchBtn">
        <form id="searchForm" action="">
          <button type="submit"><?=svg_search()?></button>
          <input id="inputSearch" type="text" placeholder="Search..">
          <button id="searchClose"><?=svg_close()?></button>
        </form>
        <a id="svg_search" class="Btn -with-icon" href="#">
          <?= svg_search() ?>
          <span class="Btn_label">Buscar</span>
        </a>
      </div>
    </div>
    <!-- <div class="Header_search">
      <button class="Header_searchBtn Btn -with-icon">
        <?= svg_search() ?>
        <span class="Btn_label">Buscar</span>
      </button>
    </div> -->

    <a class="btnMobile Btn -with-icon" id="btnMobile">
      <i class="fa-solid fa-bars fa-lg"></i>
      <span class="Btn_label">Menú</span>
    </a>

  </div>
  <!-- /Nav items -->
  <div class="Header_navigation">
    <nav class="menu contenedor" id="menu">

      <div class="contenedor-enlaces-nav">
        <ul class="Navigation_Items">
          <li class="Navigation_Item">
            <a class="SubMenu_Btn" id="productos">Productos
              <svg class="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="48" height="48" data-id="svg-loader_2">
                <path d="M70.829 158.829l-5.658-5.658L122.343 96 65.171 38.829l5.658-5.658L133.657 96l-62.828 62.829z"></path>
              </svg>
            </a>
          </li>
          <li class="Navigation_Item">
            <a class="SubMenu_Btn" id="servicios">Servicios y Soporte
              <svg class="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="48" height="48" data-id="svg-loader_2">
                <path d="M70.829 158.829l-5.658-5.658L122.343 96 65.171 38.829l5.658-5.658L133.657 96l-62.828 62.829z"></path>
              </svg>
            </a>
            </a>
          </li>
          <li class="Navigation_Item">
            <a class="SubMenu_Btn" id="conocimiento">Capacitación
              <svg class="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="48" height="48" data-id="svg-loader_2">
                <path d="M70.829 158.829l-5.658-5.658L122.343 96 65.171 38.829l5.658-5.658L133.657 96l-62.828 62.829z"></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <!-- Productos -->
      <div class="contenedor-grid">
        <div class="grid-padre">
          <div class="grid contenedor" id="grid-productos">
            <div class="categorias">
              <button class="btnClose">
                <svg class="Icon Icon-close" data-src="https://www.bosch-thermotechnology.com/resources/assets/svg/icons/icon-close.svg" data-cache="604800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="48" height="48" data-id="svg-loader_31">
                  <path d="M101.657 96l57.172 57.171-5.658 5.658L96 101.657 38.829 158.83l-5.658-5.658L90.343 96 33.17 38.829l5.658-5.658L96 90.343l57.171-57.172 5.658 5.658L101.657 96z"></path>
                </svg></button>
              <button class="btn-regresar"><svg class="Icon Icon-arrow-left SubMenu_Icon" data-src="https://www.bosch-thermotechnology.com/resources/assets/svg/icons/icon-arrow-left.svg" data-cache="604800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="48" height="48" data-id="svg-loader_3">
                  <path d="M176 100H33.657l25.172 25.171-5.658 5.658L18.343 96l34.828-34.829 5.658 5.658L33.657 92H176v8z"></path>
                </svg></button>
              <a href="./category.php">Todos los productos</a>
              <a href="#" data-categoria="residencial">Residencial
                <svg class="Icon Icon-forward-right SubMenu_Icon -visible-lg -end" data-src="https://www.bosch-thermotechnology.com/resources/assets/svg/icons/icon-forward-right.svg" data-cache="604800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="48" height="48" data-id="svg-loader_12">
                  <path d="M70.829 158.829l-5.658-5.658L122.343 96 65.171 38.829l5.658-5.658L133.657 96l-62.828 62.829z"></path>
                </svg>
              </a>
              <a href="#" data-categoria="comercial">Comercial
                <svg class="Icon Icon-forward-right SubMenu_Icon -visible-lg -end" data-src="https://www.bosch-thermotechnology.com/resources/assets/svg/icons/icon-forward-right.svg" data-cache="604800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="48" height="48" data-id="svg-loader_12">
                  <path d="M70.829 158.829l-5.658-5.658L122.343 96 65.171 38.829l5.658-5.658L133.657 96l-62.828 62.829z"></path>
                </svg>
              </a>
              <a href="#" data-categoria="industrial">Industrial
                <svg class="Icon Icon-forward-right SubMenu_Icon -visible-lg -end" data-src="https://www.bosch-thermotechnology.com/resources/assets/svg/icons/icon-forward-right.svg" data-cache="604800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="48" height="48" data-id="svg-loader_12">
                  <path d="M70.829 158.829l-5.658-5.658L122.343 96 65.171 38.829l5.658-5.658L133.657 96l-62.828 62.829z"></path>
                </svg>
              </a>
              <a href="#" data-categoria="refacciones">Refacciones
                <svg class="Icon Icon-forward-right SubMenu_Icon -visible-lg -end" data-src="https://www.bosch-thermotechnology.com/resources/assets/svg/icons/icon-forward-right.svg" data-cache="604800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="48" height="48" data-id="svg-loader_12">
                  <path d="M70.829 158.829l-5.658-5.658L122.343 96 65.171 38.829l5.658-5.658L133.657 96l-62.828 62.829z"></path>
                </svg>
              </a>
            </div>
            <div class="contenedor-subcategorias">
              <!-- Residencial -->
              <div class="subcategoria" data-categoria="residencial">
                <div class="enlaces-subcategoria">
                  <button class="btn-regresar backAgua">
                    <svg class="Icon Icon-arrow-left SubMenu_Icon" data-cache="604800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="48" height="48">
                      <path d="M176 100H33.657l25.172 25.171-5.658 5.658L18.343 96l34.828-34.829 5.658 5.658L33.657 92H176v8z"></path>
                    </svg>
                  </button>
                  <a href="category-products.php" class="subtitulo">Toda la gama</a>
                  <a href="#">Descubre tu calentador ideal</a>
                  <a href="#">Calentadores de depósito</a>
                  <a href="#">Calentadores de paso</a>
                  <a href="#">Calentadores instántaneos</a>
                  <a href="#">Calentadores eléctricos</a>
                  <a href="#">Calentadores solar</a>
                </div>
              </div>
              <!-- Comercial -->
              <div class="subcategoria" data-categoria="comercial">
                <div class="enlaces-subcategoria">
                  <button class="btn-regresar backAire">
                    <svg class="Icon Icon-arrow-left SubMenu_Icon" data-cache="604800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="48" height="48">
                      <path d="M176 100H33.657l25.172 25.171-5.658 5.658L18.343 96l34.828-34.829 5.658 5.658L33.657 92H176v8z"></path>
                    </svg>
                  </button>
                  <a href="#" class="subtitulo">Todos los modelos</a>
                  <a href="#">Calderas murales</a>
                  <a href="#">Calderas de piso</a>
                  <a href="#">Tanques de acumulación</a>
                  <a href="#">Colectores Solares</a>
                  <a href="#">Paquetes Light COM</a>
                  <a href="#">Hoteles 360°</a>
                  <a href="#">Noticias</a>
                </div>
              </div>
              <!-- Industrial -->
              <div class="subcategoria" data-categoria="industrial">
                <div class="enlaces-subcategoria">
                  <button class="btn-regresar backCalefaccion">
                    <svg class="Icon Icon-arrow-left SubMenu_Icon" data-cache="604800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="48" height="48">
                      <path d="M176 100H33.657l25.172 25.171-5.658 5.658L18.343 96l34.828-34.829 5.658 5.658L33.657 92H176v8z"></path>
                    </svg>
                  </button>
                  <a href="#" class="subtitulo">Todos los modelos</a>
                  <a href="#">Calderas de vapor</a>
                  <a href="#">Calderas de agua sobrecalentada</a>
                  <a href="#">Noticias</a>
                </div>
              </div>
              <!-- Refacciones -->
              <div class="subcategoria" data-categoria="refacciones">
                <div class="enlaces-subcategoria">
                  <button class="btn-regresar backEmisores">
                    <svg class="Icon Icon-arrow-left SubMenu_Icon" data-cache="604800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="48" height="48">
                      <path d="M176 100H33.657l25.172 25.171-5.658 5.658L18.343 96l34.828-34.829 5.658 5.658L33.657 92H176v8z"></path>
                    </svg>
                  </button>
                  <a href="#" class="subtitulo">Todos los modelos</a>
                  <a href="#">Calentadores a gas</a>
                  <a href="#">Calentadores eléctricos</a>
                  <a href="#">Solar</a>
                </div>
              </div>
            </div>
            <?php include('ae_quickAssistance.php'); ?>
          </div>
        </div>
      </div>
      <!-- Servicios y Soporte -->
      <div class="contenedor-grid">
        <div class="grid-padre">
          <div class="grid contenedor" id="grid-servicios">
            <div class="categorias">
              <button class="btnClose1"><svg class="Icon Icon-close" data-src="https://www.bosch-thermotechnology.com/resources/assets/svg/icons/icon-close.svg" data-cache="604800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="48" height="48" data-id="svg-loader_31">
                  <path d="M101.657 96l57.172 57.171-5.658 5.658L96 101.657 38.829 158.83l-5.658-5.658L90.343 96 33.17 38.829l5.658-5.658L96 90.343l57.171-57.172 5.658 5.658L101.657 96z"></path>
                </svg></button>
              <button class="btn-regresar1"><svg class="Icon Icon-arrow-left SubMenu_Icon" data-src="https://www.bosch-thermotechnology.com/resources/assets/svg/icons/icon-arrow-left.svg" data-cache="604800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="48" height="48" data-id="svg-loader_3">
                  <path d="M176 100H33.657l25.172 25.171-5.658 5.658L18.343 96l34.828-34.829 5.658 5.658L33.657 92H176v8z"></path>
                </svg></button>
              <a href="#">Todos los servicios y soporte</a>
              <a href="#">Asistencia técnica</a>
              <a href="#">Fichas técnicas</a>
              <a href="#">Garantía</a>
              <a href="#">Apps</a>
              <a href="#">Contacto</a>
            </div>
            <?php include('ae_quickAssistance.php'); ?>
          </div>
        </div>
      </div>
      <!-- Capacitacion -->
      <div class="contenedor-grid">
        <div class="grid-padre">
          <div class="grid contenedor" id="grid-conocimiento">
            <div class="categorias">
              <button class="btnClose2"><svg class="Icon Icon-close" data-src="https://www.bosch-thermotechnology.com/resources/assets/svg/icons/icon-close.svg" data-cache="604800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="48" height="48" data-id="svg-loader_31">
                  <path d="M101.657 96l57.172 57.171-5.658 5.658L96 101.657 38.829 158.83l-5.658-5.658L90.343 96 33.17 38.829l5.658-5.658L96 90.343l57.171-57.172 5.658 5.658L101.657 96z"></path>
                </svg></button>
              <button class="btn-regresar2"><svg class="Icon Icon-arrow-left SubMenu_Icon" data-src="https://www.bosch-thermotechnology.com/resources/assets/svg/icons/icon-arrow-left.svg" data-cache="604800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="48" height="48" data-id="svg-loader_3">
                  <path d="M176 100H33.657l25.172 25.171-5.658 5.658L18.343 96l34.828-34.829 5.658 5.658L33.657 92H176v8z"></path>
                </svg></button>
              <a href="#">Todos las capacitaciones</a>
              <a href="#">Club de instaladores</a>
              <a href="#">Plomeros SOS</a>
              <a href="#">Videoteca YouTube</a>
              <a href="#">Preguntas Frecuentes</a>
            </div>
            <?php include('ae_quickAssistance.php'); ?>
          </div>
        </div>
      </div>

    </nav>
    <div class="quickAssistence">
      <?php include('ae_quickAssistance.php'); ?>
    </div>
  </div>
  <!-- /Breadcrumbs -->
  <?php if ($m_actual != 'home') { ?>
    <div class="Header_breadcrumbs contenedor">
      <ol>
        <li><a href="#">Lorem</a></li>
        <li><a href="#">Lorem 1</a></li>
        <li><a href="#">Lorem 2</a></li>
      </ol>
    </div>
  <?php } ?>

</header>