<?php
include('encabezados.php');
include('funciones.php');
?>

<section class="detailPage section">

  <div class="detailPage__wrapper contenedor">
    <div class="detailPage__start">
      <?php include('swiperMain.php') ?>
      <div class="pagination">
        <div class="swiper-pagination"></div>
        <div class="swiper-arrow">
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </div>
    <div class="detailPage__end">
      <div class="categoryPage__flag-item">
        new
      </div>
      <p>Lorem ipsum dolor sit.</p>
      <a class="title" href="#">Lorem, ipsum dolor.</a>
      <div class="table_tag"><img src="./img/tag.png" alt=""></div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing </p>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
      </ul>
      <div class="detailPage__end-icons">
        <a data-tooltip-text="Calor" ><?= svg_calor() ?></a>
        <a data-tooltip-text="Agua Caliente" ><?= svg_agua_caliente() ?></a>
        <a data-tooltip-text="Calor" ><?= svg_calor() ?></a>
        <a data-tooltip-text="Agua Caliente" ><?= svg_agua_caliente() ?></a>
        <a data-tooltip-text="Calor" ><?= svg_calor() ?></a>
        <a data-tooltip-text="Agua Caliente" ><?= svg_agua_caliente() ?></a>
      </div>
      <a href="detail-page.php" class="btn btn-primary">Lorem, ipsum.</a>
    </div>
  </div>

</section>

<section class="detailPage__Accordion">

  <div class="contenedor">
    <details>
      <summary>Lorem, ipsum dolor. 1</summary>
      <div class="details_wrapper">
        <div class="details__item">
          <div class="title">Lorem, ipsum dolor.</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus est repudiandae optio illo!</p>
        </div>
        <div class="details__item">
          <div class="title">Lorem, ipsum dolor.</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus est repudiandae optio illo!</p>
        </div>
      </div>
    </details>
    <details open>
      <summary>Lorem, ipsum dolor. table</summary>
      <div class="details_wrapper --p0">
        <div class="details__select">
          <div class="details__select-start">
            <div class="title">Lorem, ipsum dolor.</div>
            <a class="Link" href="#"><span class="Link_label">Lorem, ipsum.</span></a>
          </div>
          <div class="details__select-end">
            <div class="select__wrapper">
              <select name="g1" id="g1">
                <option value="">
                  76513276 1.
                </option>
                <option value="">
                  18927349 81723 2.
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="details__table" id="option01">
          <div class="details__table-start">Lorem ipsum dolor sit.</div>
          <div class="details__table-end">Lorem ipsum dolor sit amet.</div>
          <div class="details__table-start">Lorem</div>
          <div class="details__table-end">
            <div class="table_tag">
              <img src="./img/tag.png" alt="">
            </div>
          </div>
          <div class="details__table-start">Lorem ipsum dolor sit.</div>
          <div class="details__table-end">
            <a class="Link" href="#"><span class="Link_label">Lorem, ipsum.</span></a>
          </div>
        </div>
      </div>
    </details>
  </div>

</section>

<?php
include('ae_modal_label.php');
include('ae_modal_slider.php');
include('footer.php');
?>