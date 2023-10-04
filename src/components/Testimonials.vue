<script setup></script>

<template>
  <section id="testimonials">
    <div class="container">
      <h1>Testimonials</h1>
      <div class="row">
        <div class="col-md-4 text-center">
          <div class="profile">
            <img src="../assets/images/banner22.jpg" class="user" />
            <blockquote>
              discipline whose activity consists in projecting visual
              communications intended to transmit specific messages to social
              groups, with specific objectives
            </blockquote>
            <h3>Daniel Jacob <span>Co-Founder at XYZ</span></h3>
          </div>
        </div>
        <div class="col-md-4 text-center">
          <div class="profile">
            <img src="../assets/images/banner21.jpg" class="user" />
            <blockquote>
              discipline whose activity consists in projecting visual
              communications intended to transmit specific messages to social
              groups, with specific objectives
            </blockquote>
            <h3>Nora Hazel <span>Manager at XYZ</span></h3>
          </div>
        </div>
        <div class="col-md-4 text-center">
          <div class="profile">
            <img src="../assets/images/banner23.jpg" class="user" />
            <blockquote>
              discipline whose activity consists in projecting visual
              communications intended to transmit specific messages to social
              groups, with specific objectives
            </blockquote>
            <h3>Axel Nolan <span>Founder / CEO at XYZ</span></h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#testimonials {
  padding-top: 50px;
  padding-bottom: 50px;
}
#testimonials .row {
  margin-top: 30px;
}

.col-md-4 {
  margin: 40px auto;
}

.profile {
  padding: 70px 10px 10px;
  background-color: #efefef;
}

.user {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.profile img {
  top: -60px;
  position: absolute;
  left: calc(50% - 60px);
  border: 10px solid #fff;
}

.profile h3 {
  font-size: 20px;
  margin-top: 15px;
  color: #007bff;
}

#testimonials span {
  font-size: 12px;
  color: #333;
}

blockquote {
  font-size: 16px;
  line-height: 30px;
}

blockquote::before {
  content: open-quote;
  font-size: 50px;
  color: #007bff;
  position: relative;
  line-height: 20px;
  bottom: -15px;
  right: 5px;
}
blockquote::after {
  content: close-quote;
  font-size: 50px;
  color: #007bff;
  position: relative;
  line-height: 10px;
  bottom: -15px;
  left: 5px;
}
.profile:hover {
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: 0.5s;
}
</style>
