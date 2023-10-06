<script setup>
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { ref } from "vue";
import { auth, db } from "../firebase/init";
import BlogForm from "./BlogForm.vue";

const posts = ref([]);
const isShow = ref(false);
const currentId = ref("");
const updateBlogName = ref("");
const updateBlogDescription = ref("");
const updateImage = ref("");

const fetchPost = () => {
  try {
    onSnapshot(
      query(collection(db, "blogs"), orderBy("timestamp", "desc")),
      (snapshot) => {
        posts.value = snapshot.docs;
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};

fetchPost();

const deleteBlogs = async (deleteId) => {
  alert("Delete Doc");
  await deleteDoc(doc(db, "blogs", deleteId));
  fetchPost();
};

const onShow = (currentUpdateId) => {
  isShow.value = true;
  currentId.value = currentUpdateId;
};

const updateBlog = async (updateId) => {
  try {
    const docRef = doc(db, "blogs", updateId);

    await updateDoc(docRef, {
      blogName: updateBlogName.value,
      blog: updateBlogDescription.value,
      blogImage: updateImage.value,
    });

    fetchPost();
  } catch (error) {
    alert(error.message);
  }

  updateBlogName.value = "";
  updateBlogDescription.value = "";
  currentId.value = "";
  updateImage.value = "";
};
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
        <div v-for="(item, index) in posts" :key="index">
          <div class="box">
            <div class="img">
              <img :src="item.data().blogImage" alt="" />
              <span>Blog</span>
            </div>
            <div class="text">
              <h3>{{ item.data().blogName }}</h3>
              <p>
                {{ item.data().blog }}
              </p>
              <a href="#"
                >Read More <i class="far fa-long-arrow-alt-right"></i>
              </a>
            </div>
            <div
              class="button-contr"
              v-if="auth.currentUser.photoURL === 'admin'"
            >
              <button
                v-if="item.id !== currentId"
                class="custom-button update"
                href="#"
                target="_blank"
                @click="onShow(item.id)"
              >
                Update
              </button>
              <button
                class="custom-button delete"
                target="_blank"
                @click="deleteBlogs(item.id)"
              >
                Delete
              </button>
            </div>
            <Transition>
              <div v-if="isShow" style="margin-top: 10px">
                <div class="input-container" v-if="item.id === currentId">
                  <div class="input-wrapper">
                    <label for="name">Blog Name</label>
                    <input
                      type="text"
                      id="name"
                      :placeholder="item.data().blogName"
                      v-model="updateBlogName"
                    />
                  </div>
                  <div class="input-wrapper">
                    <label for="message">Blog Description</label>
                    <textarea
                      id="message"
                      :placeholder="item.data().blog"
                      v-model="updateBlogDescription"
                    ></textarea>
                  </div>
                  <div class="input-wrapper">
                    <label for="text">Blog Image</label>
                    <input
                      type="text"
                      id="image"
                      placeholder="Blog Image Url"
                      v-model="updateImage"
                    />
                  </div>
                  <button type="submit" @click="updateBlog(item.id)">
                    Submit
                  </button>
                </div>
              </div>
            </Transition>
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

.custom-button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
}

.update {
  background-color: #3498db;
}

.delete {
  background-color: #ff5e62;
}

/* Hover effect */
.custom-button:hover {
  background-color: #2980b9;
}

.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 30px;
}

@media (max-width: 768px) {
  .grid {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
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

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .input-container {
    flex-direction: column;
  }
}
</style>
