<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section id="nav-bar">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><img src="../assets/images/1-2-cloud-server-png.png"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#top"
                ><RouterLink to="/">HOME</RouterLink></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">
                <RouterLink to="/about">ABOUT US </RouterLink></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services">SERVICES</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#team">OUR TEAM</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#price">PRICE PLANS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#testimonials">TESTIMONIALS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">
                <RouterLink to="/contact">CONTACT</RouterLink></a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
</template>

<style scoped>
#nav-bar {
  position: sticky;
  top: 0;
  z-index: 10;
}

.navbar-brand img {
  height: 50px;
  padding-left: 30px;
}
.navbar-nav li {
  padding: 0 10px;
}
.navbar-nav li a {
  float: right;
  text-align: left;
}
#nav-bar ul li a:hover {
  color: #007bff !important;
}
.navbar {
  background: #fff;
}
.navbar-toggler {
  border: none !important;
}
.nav-link {
  color: #555 !important;
  font-weight: 600;
  font-size: 16px;
}
</style>
