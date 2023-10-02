<script setup></script>

<template>
  <div id="slider">
    <div id="headerSlider" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#headerSlider" data-slide-to="0" class="active"></li>
        <li data-target="#headerSlider" data-slide-to="1"></li>
        <li data-target="#headerSlider" data-slide-to="2"></li>
      </ol>
      <Transition name="fade">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block img-fluid" src="../assets/images/banner1.jpg" />
            <div class="carousel-caption">
              <h5>How To Make A Website</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block img-fluid" src="../assets/images/banner6.jpg" />
            <div class="carousel-caption">
              <h5>Creat Responsive Website</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block img-fluid" src="../assets/images/banner2.jpg" />
            <div class="carousel-caption">
              <h5>Business Website Design</h5>
            </div>
          </div>
        </div>
      </Transition>

      <a
        class="carousel-control-prev"
        href="#headerSlider"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#headerSlider"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
/*-------------slider------------*/

#slider {
  width: 100%;
}

/*---------------slider--------------*/

#slider {
  width: 100%;
}
.carousel-caption {
  top: 50%;
  transform: translateY(-50%);
  bottom: inherit !important;
}
.carousel-caption h5 {
  color: #fff;
  font-size: 42px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
