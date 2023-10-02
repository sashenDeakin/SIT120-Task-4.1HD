<script setup>
import BlogForm from "./BlogForm.vue";
</script>

<template>
  <section class="contact-header">
    <h1>Our Blog</h1>
  </section>
  <BlogForm />
  <section class="blog top" id="blog">
    <div class="container">
      <div class="heading">
        <h5>OUR BLOG</h5>
        <h3>News & articles updates</h3>
      </div>
      <div class="content grid mtop">
        <div class="box">
          <div class="img">
            <img
              src="https://techlogitic.net/wp-content/uploads/2018/07/Freelancer.jpg"
              alt=""
            />
            <span>HOTEL</span>
          </div>
          <div class="text">
            <h3>Celebrating Decade Years Of Hotel In 2020</h3>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <a href="#"
              >Read More <i class="far fa-long-arrow-alt-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-header {
  min-height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)),
    url(../assets/images/banner2.jpg);
  background-position: center;
  background-size: cover;
  position: relative;
  text-align: center;
  color: #fff;
}
.contact-header h1 {
  padding-top: 350px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 30px;
}

.container {
  max-width: 90%;
  margin: auto;
}

.mtop {
  margin-top: 40px;
  margin-bottom: 40px;
}

.heading {
  text-align: center;
}

.heading h5 {
  font-weight: 400;
  letter-spacing: 5px;
  color: #cc8c18;
  padding-top: 20px;
}

.heading h2 {
  color: #24416b;
  font-size: 45px;
  font-family: serif;
  font-weight: bold;
  margin: 10px 0 20px 0;
}

.blog .grid {
  grid-template-columns: repeat(3, 1fr);
}

.blog .box {
  box-shadow: 0 0 20px 3px rgb(0 0 0 / 5%);
  transition: 0.5s;
}

.blog .box:hover {
  transform: translateY(-10px);
  cursor: pointer;
}

.blog .text {
  padding: 20px;
}

.blog img {
  width: 100%;
  height: 100%;
  position: relative;
}

.blog .img {
  position: relative;
  overflow: hidden;
}

.blog span {
  position: absolute;
  top: -3%;
  left: -12%;
  z-index: 1;
  color: white;
  background: #cc8c18;
  padding: 20px 50px;
  transform: rotate(-45deg);
  font-size: 14px;
}

.blog .box h3 {
  font-size: 20px;
}

.blog .box i {
  margin-right: 10px;
  color: #cc8c18;
}

.blog .box i label {
  color: black;
}

.blog .box h3 {
  margin: 15px 0;
}

.blog a {
  color: #cc8c18;
  font-size: 15px;
}
</style>
