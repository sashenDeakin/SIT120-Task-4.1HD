<script setup>
import { ref } from "vue";
import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db, storage } from "../firebase/init";
import { getDownloadURL, uploadString } from "firebase/storage";

const userName = ref("");
const blogName = ref("");
const blogDes = ref("");
const blogImage = ref(null);

const handleFileChange = (event) => {
  const selectedFile = event.target.files[0];
  blogImage.value = selectedFile;
};

const createBlogPost = async () => {
  try {
    const docRef = await addDoc(collection(db, "blogs"), {
      userName: userName.value,
      blogName: blogName.value,
      blog: blogDes.value,
      blogImage: blogImage.value,
      timestamp: serverTimestamp(),
    });

    blogName.value = "";
    blogDes.value = "";
    blogImage.value = null;
  } catch (error) {
    console.log(error.message);
  }
};
</script>

<template>
  <div class="container">
    <h1>Contact Us</h1>
    <form>
      <div class="input-container">
        <div class="input-wrapper">
          <label for="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" />
        </div>
        <div class="input-wrapper">
          <label for="message">Message</label>
          <textarea id="message" placeholder="Your Message"></textarea>
        </div>
        <div class="input-wrapper">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" />
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column; /* Changed from 'row' to 'column' */
  gap: 10px;
}

.input-wrapper {
  flex: 1;
}

label {
  font-weight: bold;
  color: #333;
  font-size: 16px;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
  border-color: #007bff;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

@media (max-width: 768px) {
  .input-container {
    flex-direction: column;
  }
}
</style>
