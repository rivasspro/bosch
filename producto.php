<?php
include('encabezados.php');
?>
<section class="productDetail section">
  <div class="contenedor">
    <div class="productDetail_wrapper">
      <div class="productDetail_slider">
        <div class="productLabel tag"><img src="./img/products/label_a0.png" width="154" alt=""></div>
        <div><img src="./img/products/residencial/5700s.png" alt=""></div>
      </div>
      <div class="productText">
        <p>Calentador Estanco Bajo NOx</p>
        <h1>Therm 5700 S</h1>
        <p>
          Con este calentador de cámara estanca y bajo NOx,
          el confort no solo implica suministrar agua caliente
          de forma fiable a su hogar, sino también controlar
          el calentador fácilmente con el panel de control táctil,
          de diseño sencillo, para satisfacer sus necesidades.el hogar
        </p>
      </div>
    </div>
  </div>
</section>
<section class="videoBullets section">
  <div class="contenedor">
    <div class="videoBullets_W">
      <div class="videoBullets_W_video">
        <img src="./img/products/residencial/5700s.png" alt="">
      </div>
      <div class="videoBullets_W_bullets">
        <ul class="list list-check">
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dolorum.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
          <li>Lorem ipsum dolor sit amet </li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section class="tableProducto section">
  <div class="contenedor">
    <div class="tableProducto_title">
      <h2 class="h1">Datos técnicos</h2>
    </div>
    <div class="tableProducto_W">
      <?php include('table_producto.php') ?>
    </div>
  </div>
</section>
<?php
include('atc_form.php');
?>
<section class="btnsGroup section">
  <div class="contenedor">
    <div class="btnsGroup_W">
      <div class="btnsGroup_W_img">
        <img src="./img/products/residencial/profile.png" alt="">
      </div>
      <div class="btnsGroup_W_btns">
        <a href="#" class="btn btn-primary">Ficha técnica para descargar</a>
        <a href="#" class="btn btn-primary-outline">Folleto del producto</a>
      </div>
    </div>
  </div>
</section>

<?php
include('ae_modal_label.php');
include('footer.php');
?>