<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="navbar">
    <div class="logo">
      <img src="../assets/logo.svg" alt="">
      <p class="logo-paragraph">VulnHunter</p>
    </div>
    <ul class="nav-links">
      <li><a class="nav-link" href="default.asp">Home</a></li>
      <li><a class="nav-link" href="news.asp">News</a></li>
      <li><a class="nav-link" href="contact.asp">Contact</a></li>
      <li><a class="nav-link" href="about.asp">About</a></li>
    </ul>
    <div class="auth">
      <a class="auth-signup">Signup</a>
      <a class="auth-login"> Login</a>
    </div>
  </header>
  <main>
    <div class="main-left">
      <p class="headline"><span class="headline-span">Stress-free</span> way to <span class="headline-span">secure</span> you software</p>
      <p class="sub-headline">"Identify and address security vulnerabilities in your software with our powerful analysis tool. Quickly scan
        your code to uncover potential threats, providing you with the insights needed to strengthen your system's
        defenses. Keep your software secure and stay ahead of cyber risks."</p>
      <input class="search">
    </div>
    <div class="main-right">
      <img class="landing-vector" src="../assets/landing-vector.svg" alt="">
    </div>
  </main>
</template>

<style scoped>
.navbar {
  display: grid;
  margin-top: 5px;
  border-radius: 20px;
  grid-template-columns: 15% 65% 20%;
  background-color: #262626;
}

.nav-links {
  grid-column: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  display: flex;
  padding-left: 20px;
  align-items: center;
}

ul {
  list-style-type: none;
}

p,
ul {
  margin-bottom: 0;
}

.logo-paragraph {
  margin-left: 10px;
  color: white;
}

.nav-link {
  margin-left: 30px;
  padding: 10px 15px;
  border-radius: 15px;
  color: white;
}

.auth {
  grid-column: 3;
  display: flex;
  justify-content: center;
  align-items: center;
}

.auth-login {
  background-color: #CAFF33;
  color: black;
  padding: 5px 15px;
  border-radius: 15px;
  margin-left: 10px;
}

.auth-signup {
  color: white;
  padding: 5px 15px;
  border-radius: 15px;
}

@media (hover: hover) {
  .nav-link:hover {
    color: #CAFF33;
  }
}

main {
  display: grid;
  grid-template-columns: 50% 50%;
}

.main-left {
  display: flex;
  flex-direction: column;
  padding-top: 20%;
  padding-left: 20px;
}


.main-right {
  display: flex;
  padding: 20% 70px;
}

.landing-vector {
  width: 100%;
}

.headline {
  color: white;
  margin-bottom: 15px;
  font-size: xx-large;
  font-weight: bolder;
}

.sub-headline {
  color: white;
  margin-bottom: 15px;
}

.headline-span{
  color: #CAFF33;
}

.search {
  height: 40px;
  width: 80%;
  border-radius: 8px;
}

</style>
