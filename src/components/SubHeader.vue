<script setup></script>

<template>
  <section class="sub-header">
    <h1>About Us</h1>
  </section>

  <section class="about-us">
    <div class="row">
      <div class="about-col">
        <h1>We are the world's largest university</h1>
        <p>
          Universities are struggling to create facilities in a
          technology-friendly environment across the campuses in multiple
          locations. <br />There are a number of campus facilities that need to
          support research, teaching, learning, and <br />other operations. The
          mission of the university community is to provide <br />various
          facilities and create an exceptional atmosphere <br />for students,
          faculty, and staff.
        </p>
        <a href="" class="hero-btn red-btn">EXPLORE NOW</a>
      </div>
      <div class="about-col">
        <img src="../assets/images/about.jpg" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.sub-header {
  min-height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)),
    url(../assets/images/banner6.jpg);
  background-position: center;
  background-size: cover;
  position: relative;
  text-align: center;
  color: #fff;
}
.sub-header h1 {
  padding: 300px;
}
.about-us {
  width: 80%;
  margin: auto;
  padding-top: 80px;
  padding-bottom: 50px;
}
.about-col {
  flex-basis: 48%;
  padding: 30px 2px;
}
.about-col img {
  width: 100%;
}
.about-col h1 {
  padding-top: 0;
}
.about-col p {
  padding: 15px 0 25px;
}
.red-btn {
  border: 1px solid #f44336;
  background: transparent;
  color: #f44336;
}
.red-btn:hover {
  color: #fff;
}
</style>
