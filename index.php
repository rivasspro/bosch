<?php
$m_actual = 'home';
include('funciones.php');
include('encabezados.php');
?>

<section class="homePage">
  <?php include('swiperHome.php'); ?>
</section>
<section class="homePage__s2">
  <div class="contenedor">
    <h2 class="h1">Lorem ipsum dolor sit amet.</h2>
    <div class="homePage__s2_wrapper">
      <div class="homePage__s2_wrapper_item">
        <img src="" alt="">
        <h3>Lorem, ipsum dolor.</h3>
        <a href="#" class="Btn">
          <span class="Btn_label">lorem</span>
        </a>
      </div>
    </div>
  </div>
</section>


<?php
include('atc_form.php');
echo '<br><br>';
include('footer.php');
?>