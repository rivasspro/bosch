<?php
include('funciones.php');
?>

<section class="modal modal__swiper">
  <div class="modal__container">
    <div class="modal__header">
      <a href="#" class="modal__close">
        <?= svg_close() ?>
      </a>
    </div>
    <div class="modal__body s3">
      <div class="swiper mySwiper3">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="img/detail-page/0.png" alt="">
          </div>
          <div class="swiper-slide">
            <img src="img/detail-page/1.png" alt="">
          </div>
          <div class="swiper-slide">
            <img src="img/detail-page/2.png" alt="">
          </div>
          <div class="swiper-slide">
            <img src="img/detail-page/3.png" alt="">
          </div>
        </div>
      </div>
      <div class="pagination" style="margin:0 auto;width:95%;">
        <div class="swiper-pagination sp3"></div>
        <div class="swiper-arrow">
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>

    </div>
  </div>
</section>
<style>
  .modal__body.s3 {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .mySwiper3 {
    width: 100%;
    height: calc(100% - 6rem);
  }
</style>