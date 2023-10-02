<script setup>
import { RouterLink } from "vue-router";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/init.js";
import { ref } from "vue";

const isOpen = ref(false);
const rValue = ref(true);

const email = ref("");
const password = ref("");
const userName = ref("");
const userType = ref("");
const name = ref("");

const open = () => {
  isOpen.value = true;
};

const close = () => {
  isOpen.value = false;
};

const changeValue = () => {
  rValue.value = false;
};

const oppositeChangeValue = () => {
  rValue.value = true;
};

const login = () => {
  try {
    signInWithEmailAndPassword(auth, email.value, password.value)
      .catch((error) => {
        alert(error.message);
      })
      .then(() => {
        alert("Login Successfully");
      });
  } catch (error) {
    console.log(error.message);
  }

  password.value = "";
  email.value = "";
  isOpen.value = false;
};

const signup = () => {
  try {
    createUserWithEmailAndPassword(auth, email.value, password.value).then(
      () => {
        updateProfile(auth.currentUser, {
          photoURL: userType.value,
        })
          .catch((error) => {
            console.log(error.message);
          })
          .then(() => {
            alert("SignUp successfully");
          });
      }
    );
  } catch (error) {
    alert(error.message);
  }

  isOpen.value = false;
  password.value = "";
  email.value = "";
  userName.value = "";
};

const loggedInOut = () => {
  try {
    signOut(auth)
      .then(() => {
        name.value = "";
      })
      .then(() => {
        alert("LoginOut Success!");
      });
  } catch (error) {
    console.log(error.message);
  }
};

if (auth.currentUser) {
  name.value = auth.currentUser.email;
}
</script>

<template>
  <section id="nav-bar">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><img src="../assets/images/1-2-cloud-server-png.png"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#top"
                ><RouterLink to="/">HOME</RouterLink></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">
                <RouterLink to="/about">ABOUT US </RouterLink></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services"
                ><RouterLink to="/blog">BLOG</RouterLink></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">
                <RouterLink to="/contact">CONTACT</RouterLink></a
              >
            </li>
            <Transition name="bounce">
              <li
                v-if="!name"
                class="nav-item"
                @click="open()"
                style="cursor: pointer"
              >
                <p class="nav-link" href="" id="login-btn">LOGIN</p>
              </li>
              <li
                v-else
                @click="loggedInOut()"
                class="nav-item"
                style="cursor: pointer"
              >
                <p id="login-btn" class="nav-link">SIGN OUT</p>
              </li>
            </Transition>
          </ul>
        </div>
      </div>
    </nav>
  </section>
  <div class="login-form-container" v-if="isOpen">
    <svg
      class="fas fa-times"
      id="form-close"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="{1.5}"
      stroke="currentColor"
      style="width: 50px"
      @click="close()"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>

    <form action="" v-if="rValue" @submit.prevent="login">
      <h3>login</h3>
      <input
        type="email"
        class="box"
        placeholder="Enter your email"
        v-model="email"
      />
      <input
        type="password"
        class="box"
        placeholder="Enter your password"
        v-model="password"
      />
      <input type="submit" value="login now" class="btn" srt @click="login()" />
      <input type="checkbox" id="remember" style="margin-right: 10px" />
      <label for="remember">remember me</label>
      <p>forget password? <a href="#">click here</a></p>
      <p>
        Don't have and account?
        <a href="#" @click="changeValue()">Register now</a>
      </p>
    </form>
    <form action="" v-else @submit.prevent="signup">
      <h3>Register now</h3>
      <input
        type="email"
        class="box"
        placeholder="Enter your email"
        v-model="email"
      />
      <input
        type="password"
        class="box"
        placeholder="Enter your password"
        v-model="password"
      />
      <div class="space" style="margin-bottom: 20px">
        <span class="fa fa-lock"></span>
        <select id="mySelect" v-model="userType">
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>
      <input type="submit" value="Register" class="btn" srt @click="signup()" />
      <input type="checkbox" id="remember" style="margin-right: 10px" />
      <label for="remember">remember me</label>
      <p>forget password? <a href="#">click here</a></p>
      <p>
        Already have and account?
        <a href="#" @click="oppositeChangeValue()">Login now</a>
      </p>
    </form>
  </div>
</template>

<style scoped>
#nav-bar {
  position: sticky;
  top: 0;
  z-index: 10;
}

select {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  outline: none;
  align-items: center;
  text-align: center;
  margin-right: 20px;
}

.navbar-brand img {
  height: 50px;
  padding-left: 30px;
}
.navbar-nav li {
  padding: 0 10px;
}
.navbar-nav li a {
  float: right;
  text-align: left;
}
#nav-bar ul li a:hover {
  color: #007bff !important;
}
.navbar {
  background: #fff;
}
.navbar-toggler {
  border: none !important;
}
.nav-link {
  color: #555 !important;
  font-weight: 600;
  font-size: 16px;
}

.login-form-container {
  position: fixed;
  /*  top: -120%; */
  left: 0;
  z-index: 10000;
  min-height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-form-container.active {
  top: 0;
}

.login-form-container form {
  margin: 2rem;
  padding: 1.5rem 2rem;
  border-radius: 0.5rem;
  background: #fff;
  width: 50rem;
}

.login-form-container form h3 {
  font-size: 3rem;
  color: #444;
  text-transform: uppercase;
  text-align: center;
  padding: 1rem 0;
}

.login-form-container form .box {
  width: 100%;
  padding: 1rem;
  font-size: 1.7rem;
  color: #333;
  margin: 0.6rem 0;
  border: 0.1rem solid rgba(0, 0, 0, 0.3);
  text-transform: none;
}

.login-form-container form .box:focus {
  border-color: #f70d1a;
}

.login-form-container form #remember {
  margin: 2rem 0;
}

.login-form-container form label {
  font-size: 1.5rem;
}

.login-form-container form .btn {
  display: block;
  width: 100%;
}

.login-form-container form p {
  padding: 0.5rem 0;
  font-size: 1.5rem;
  color: #666;
}

.login-form-container form p a {
  color: #f70d1a;
}

.login-form-container form p a:hover {
  color: #333;
  text-decoration: underline;
}

.login-form-container #form-close {
  position: absolute;
  top: 2rem;
  right: 3rem;
  font-size: 5rem;
  color: #fff;
  cursor: pointer;
}

.btn {
  display: inline-block;
  margin-top: 1rem;
  background: #b21807;
  color: #fff;
  padding: 0.8rem 3rem;
  border: 0.2rem solid #b21807;
  cursor: pointer;
  font-size: 1.7rem;
}

.btn:hover {
  background: rgba(250, 0, 0, 0.09);
  color: #f70d1a;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
