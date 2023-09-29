<script setup></script>

<template>
  <section id="contact">
    <div class="container">
      <h1>Get IN Touch</h1>
      <div class="row">
        <div class="col-md-6">
          <form class="contact-form">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Your Name" />
            </div>
            <div class="form-group">
              <input
                type="number"
                class="form-control"
                placeholder="Phone Number"
              />
            </div>
            <div class="form-group">
              <input type="email" class="form-control" placeholder="Email Id" />
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                rows="4"
                placeholder="Message"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">SEND MESSAGE</button>
          </form>
        </div>
        <div class="col-md-6 contact-info">
          <div class="follow">
            <b>Address</b><i class="fa fa-map-marker"></i> XYZ company 18/46 B
            Adarsha Lane Bandaragama
          </div>

          <div class="follow">
            <b>Phone</b> <i class="fa fa-phone"></i>+94 7563275
          </div>

          <div class="follow">
            <b>Email</b><i class="fa fa-envelope"></i> XYZ456@gmail.com
          </div>

          <div class="follow">
            <label><b>Get Social</b></label>
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-youtube-play"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-google-plus"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#contact {
  background: #efefef;
  padding-top: 40px;
  padding-bottom: 40px;
  color: #777;
}

.contact-form {
  padding: 15px;
}

.form-control {
  border-radius: 0 !important;
  border: none !important;
}

::placeholder {
  color: #999 !important;
}

.follow {
  background: #fff;
  padding: 10px;
  margin: 15px;
}
.contact-info .fa {
  margin: 10px;
  color: #007bff;
  font-weight: bold;
}
</style>
