<script setup></script>

<template>
  <section class="sub-header">
    <h1>About Us</h1>
  </section>

  <section class="about-us">
    <div class="row">
      <div class="about-col">
        <h1>
          We are a diverse group of highly skilled and experienced freelancers
        </h1>
        <p>
          In computing, a program is a specific set of ordered operations for a
          computer to perform. In the modern computer that John von Neumann
          outlined in 1945, the program contains a one-at-a-time sequence of
          instructions that the computer follows. Typically, the program is put
          into a storage area accessible to the computer. The computer gets one
          instruction and performs it and then gets the next instruction. The
          storage area or memory can also contain the data that the instruction
          operates on. Note that a program is also a special kind of data that
          indicates how to operate on application or user data.
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
