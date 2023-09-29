<script setup></script>

<template>
  <section id="team">
    <div class="container">
      <h1>Our Team</h1>
      <div class="row">
        <div class="col-md-3 profile-pic text-center">
          <div class="img-box">
            <img src="../assets/images/banner15.jpg" class="img-responsive" />
            <ul>
              <a href="#"
                ><li><i class="fa fa-facebook"></i></li
              ></a>
              <a href="#"
                ><li><i class="fa fa-twitter"></i></li
              ></a>
              <a href="#"
                ><li><i class="fa fa-linkedin"></i></li
              ></a>
            </ul>
          </div>
          <h2>James William</h2>
          <h3>Founder / CEO</h3>
          <p>
            intended to transmit specific messages to social groups, with
            specific objectives.
          </p>
        </div>
        <div class="col-md-3 profile-pic text-center">
          <div class="img-box">
            <img src="../assets/images/banner16.jpg" class="img-responsive" />
            <ul>
              <a href="#"
                ><li><i class="fa fa-facebook"></i></li
              ></a>
              <a href="#"
                ><li><i class="fa fa-twitter"></i></li
              ></a>
              <a href="#"
                ><li><i class="fa fa-linkedin"></i></li
              ></a>
            </ul>
          </div>
          <h2>Emily Scarlett</h2>
          <h3>Business Head</h3>
          <p>
            intended to transmit specific messages to social groups, with
            specific objectives.
          </p>
        </div>
        <div class="col-md-3 profile-pic text-center">
          <div class="img-box">
            <img src="../assets/images/banner17.jpg" class="img-responsive" />
            <ul>
              <a href="#"
                ><li><i class="fa fa-facebook"></i></li
              ></a>
              <a href="#"
                ><li><i class="fa fa-twitter"></i></li
              ></a>
              <a href="#"
                ><li><i class="fa fa-linkedin"></i></li
              ></a>
            </ul>
          </div>
          <h2>Liam Oliver</h2>
          <h3>Marketing Head</h3>
          <p>
            intended to transmit specific messages to social groups, with
            specific objectives.
          </p>
        </div>
        <div class="col-md-3 profile-pic text-center">
          <div class="img-box">
            <img src="../assets/images/banner19.jpg" class="img-responsive" />
            <ul>
              <a href="#"
                ><li><i class="fa fa-facebook"></i></li
              ></a>
              <a href="#"
                ><li><i class="fa fa-twitter"></i></li
              ></a>
              <a href="#"
                ><li><i class="fa fa-linkedin"></i></li
              ></a>
            </ul>
          </div>
          <h2>Amelia Charlotte</h2>
          <h3>UI Designer</h3>
          <p>
            intended to transmit specific messages to social groups, with
            specific objectives.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#team {
  padding-top: 50px;
  padding-bottom: 50px;
  color: #555;
}
h1 {
  text-align: center;
}

h1::after {
  content: "";
  background: #007bff;
  display: block;
  height: 3px;
  width: 170px;
  margin: 20px auto 5px;
}

.profile-pic {
  margin-top: 25px;
}

.profile-pic .img-box {
  opacity: 1;
  display: block;
  position: relative;
}

.profile-pic .img-box img {
  filter: grayscale(1);
}

.profile-pic .img-box img:hover {
  filter: grayscale(0);
  cursor: pointer;
}
.profile-pic h2 {
  font-size: 22px;
  font-weight: bold;
  margin-top: 15px;
  color: #007bff !important;
}

.profile-pic h3 {
  font-size: 15px;
  font-weight: bold;
  margin-top: 15px;
}

#team .fa {
  height: 25px;
  width: 25px;
  color: #007bff !important;
  background: #fff;
  padding: 4px;
  border-radius: 50%;
}

.img-box ul {
  padding: 15px 0;
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
}

.img-box ul li {
  padding: 5px;
  display: inline-block;
}

.img-box:hover ul {
  opacity: 1;
}

.img-box ul,
.img-box ul li {
  transition: 0.5s;
}
</style>
