<script setup>
import { ref } from "vue";
import { db } from "../firebase/init";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const email = ref("");
const name = ref("");
const subject = ref("");
const message = ref("");

const sendMessage = async () => {
  try {
    const colRef = collection(db, "messages");

    const blogObjects = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
      timestamp: serverTimestamp(),
    };

    const dogRef = await addDoc(colRef, blogObjects);

    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
  } catch (error) {
    console.log(error.message);
  }
};
</script>

<template>
  <section class="contact-header">
    <h1>Contact Us</h1>
  </section>

  <section class="location">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12610.833975937734!2d144.93667917347165!3d-37.796870801674444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d283acb6965%3A0x5045675218ce760!2sNorth%20Melbourne%20VIC%203051!5e0!3m2!1sen!2sau!4v1696247279369!5m2!1sen!2sau"
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </section>

  <section class="contact-us">
    <div class="row">
      <div class="contact-col">
        <div>
          <i class="fa fa-home"></i>
          <span>
            <h5>88 Amberly Park Dr,</h5>
            <p>Narre Warren South VIC 3805</p>
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
            <h5>sashenjayathilaka486@gmail.com</h5>
            <p>Email us your query</p>
          </span>
        </div>
      </div>
      <div class="contact-col">
        <form
          @submit.prevent="sendMessage()"
          action="form-handler.php"
          method="post"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
            v-model="name"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email Addres"
            required
            v-model="email"
          />
          <input
            type="text"
            name="subject"
            placeholder="Enter Your Subject"
            required
            v-model="subject"
          />
          <textarea
            rows="8"
            name="message"
            placeholder="Message"
            v-model="message"
          ></textarea>
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
