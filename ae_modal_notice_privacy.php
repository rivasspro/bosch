<section class="modal modal__notice_privacy --md">
  <div class="modal__container">
    <div class="modal__header"><a href="#" class="modal__close"><?= svg_close() ?></a></div>
    <div class="modal__body">
      <h3>Save in localStorage</h3>
      <p class="bold">setItem('modalPrivacyHide','true')</p>
      <p>It is shown 3 seconds after page load, if the property is set to 'true' it will no longer be shown, the key is saved in localStorage when the 'Accept' button is clicked</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sequi pariatur perspiciatis iure veritatis architecto nisi ex laudantium hic porro, aut ea quas molestiae numquam.</p>
      <p class="bold">Lorem ipsum dolor sit amet consectetur.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sequi pariatur perspiciatis iure veritatis architecto nisi ex laudantium hic porro, aut ea quas molestiae numquam.</p>
      <div class="formField checkbox">
        <input type="checkbox" name="cc" id="cc">
        <label for="cc">
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, est vero itaque consequatur aut totam nobis maxime fuga? Magni itaque nostrum sapiente quod facilis illum culpa a quibusdam illo dolorem. <a href="#">More info</a></p>
        </label>
      </div>

      <div class="formField checkbox">
        <input type="checkbox" name="aa" id="aa">
        <label for="aa">
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, est vero itaque consequatur aut totam nobis maxime fuga? Magni itaque nostrum sapiente quod facilis illum culpa a quibusdam illo dolorem. <a href="#">More info</a></p>
        </label>
      </div>

      <a class="btn btn-primary --block --accept-privacy" href="#">Accept</a>
      <a class="btn btn-primary-outline --block --no-accept-privacy" href="#">Close</a>
    </div>
  </div>
</section>