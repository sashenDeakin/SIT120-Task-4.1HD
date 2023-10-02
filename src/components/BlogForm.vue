<script setup>
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref } from "vue";
import { auth, db } from "../firebase/init";

const blogName = ref("");
const blogDes = ref("");
const blogImage = ref("");

const createBlogPost = async () => {
  try {
    const colRef = collection(db, "blogs");

    const blogObjects = {
      blogName: blogName.value,
      blog: blogDes.value,
      blogImage: blogImage.value,
      timestamp: serverTimestamp(),
    };

    const dogRef = await addDoc(colRef, blogObjects);

    blogName.value = "";
    blogDes.value = "";
    blogImage.value = "";
  } catch (error) {
    console.log(error.message);
  }
};

/* console.log(auth.currentUser); */
</script>

<template>
  <div
    class="container"
    style="margin-top: 40px"
    v-if="auth.currentUser.photoURL === 'admin'"
  >
    <h1>Create Blogs</h1>
    <div>
      <div class="input-container">
        <div class="input-wrapper">
          <label for="name">Blog Name</label>
          <input
            type="text"
            id="name"
            placeholder="Blog Name"
            v-model="blogName"
          />
        </div>
        <div class="input-wrapper">
          <label for="message">Blog Description</label>
          <textarea
            id="message"
            placeholder="Blog Description"
            v-model="blogDes"
          ></textarea>
        </div>
        <div class="input-wrapper">
          <label for="email">Blog Image</label>
          <input
            type="text"
            id="image"
            placeholder="Blog Image Url"
            v-model="blogImage"
          />
        </div>
        <button type="submit" @click="createBlogPost()">Submit</button>
      </div>
    </div>
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
