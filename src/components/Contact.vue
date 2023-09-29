<script setup></script>

<template>
  <section class="contact-header">
    <h1>Contact Us</h1>
  </section>

  <section class="location">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198740.83318956103!2d-77.1546608134622!3d38.89367081286511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20DC%2C%20USA!5e0!3m2!1sen!2slk!4v1645409707736!5m2!1sen!2slk"
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
  </section>

  <section class="contact-us">
    <div class="row">
      <div class="contact-col">
        <div>
          <i class="fa fa-home"></i>
          <span>
            <h5>New York University #486-235 Bulding</h5>
            <p>Sit Road.Azusa New York 34852</p>
          </span>
        </div>
        <div>
          <i class="fa fa-phone"></i>
          <span>
            <h5>(461) 453-733</h5>
            <p>Monday to Saturday,10AM to 6PM</p>
          </span>
        </div>
        <div>
          <i class="fa fa-envelope-o"></i>
          <span>
            <h5>NewYorkUniversit486@gmail.com</h5>
            <p>Email us your query</p>
          </span>
        </div>
      </div>
      <div class="contact-col">
        <form action="form-handler.php" method="post">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email Addres"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Enter Your Subject"
            required
          />
          <textarea rows="8" name="message" placeholder="Message"></textarea>
          <button type="submit" class="hero-btn red-btn">Send Message</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.location {
  width: 80%;
  margin: auto;
  padding: 80px 0;
}
.location iframe {
  width: 100%;
}
.contact-header {
  min-height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)),
    url(../assets/images/background3.jpg);
  background-position: center;
  background-size: cover;
  position: relative;
  text-align: center;
  color: #fff;
}
.contact-header h1 {
  padding-top: 350px;
}
.contact-us {
  width: 80%;
  margin: auto;
}
.contact-col {
  flex-basis: 48%;
  margin-bottom: 30px;
}
.contact-col div {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}
.contact-col div .fa {
  font-size: 28px;
  color: #f44336;
  margin: 10px;
  margin-right: 30px;
}
.contact-col div p {
  padding: 0;
}
.contact-col div h5 {
  font-size: 20px;
  margin-bottom: 5px;
  color: #555;
  font-weight: 400;
}
.contact-col input,
.contact-col textarea {
  width: 100%;
  padding: 15px;
  margin-bottom: 17px;
  outline: none;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
</style>
