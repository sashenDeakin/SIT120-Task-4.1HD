<script setup></script>

<template>
  <section id="services">
    <div class="container">
      <h1>Our Services</h1>
      <div class="row services">
        <div class="col-md-3 text-center">
          <div class="icon">
            <i class="fa fa-desktop"></i>
          </div>
          <h3>Web Developement</h3>
          <p>
            Web development is the work involved in developing a website for the
            Internet (World Wide Web) or an intranet (a private network).
          </p>
        </div>
        <div class="col-md-3 text-center">
          <div class="icon">
            <i class="fa fa-tablet"></i>
          </div>
          <h3>App Developement</h3>
          <p>
            Mobile app development is the act or process by which a mobile app
            is developed for mobile devices, such as personal digital
            assistants, enterprise digital assistants or mobile phones.
          </p>
        </div>
        <div class="col-md-3 text-center">
          <div class="icon">
            <i class="fa fa-line-chart"></i>
          </div>
          <h3>Digital Marketing</h3>
          <p>
            Digital marketing is the component of marketing that uses internet
            and online based digital technologies such as desktop computers,
            mobile phones and other digital media and platforms to promote
            products and services.
          </p>
        </div>
        <div class="col-md-3 text-center">
          <div class="icon">
            <i class="fa fa-paint-brush"></i>
          </div>
          <h3>Graphics Designing</h3>
          <p>
            Graphic design is the profession and academic discipline whose
            activity consists in projecting visual communications intended to
            transmit specific messages to social groups, with specific
            objectives.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#services {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(../assets/images/banner20.jpg);
  background-size: cover;
  background-position: center;
  color: #efefef !important;
  background-attachment: fixed;
  padding-top: 50px;
  padding-bottom: 50px;
}

#services h1 {
  text-align: center;
  color: #efefef;
  padding-bottom: 10px;
}
#services h1::after {
  content: "";
  background: #efefef;
  display: block;
  height: 3px;
  width: 170px;
  margin: 20px auto 5px;
}
.services {
  margin-top: 40px;
}

.icon {
  font-size: 40px;
  margin: 20px auto;
  padding: 20px;
  height: 80px;
  width: 80px;
  border: 1px solid #fff;
  border-radius: 50%;
}
#services p {
  font-size: 14px;
  margin-top: 20px;
  color: #ccc;
}
.services .col-md-3:hover {
  background: #007bff;
  cursor: pointer;
  transition: 0.7s;
}
</style>
