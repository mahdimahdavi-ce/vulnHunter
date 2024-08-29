<script setup>
import { useRouter } from 'vue-router';
import axios from 'axios';
import { ref } from 'vue';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();

const searchValue = ref('');
const result = ref('');
const err = ref(false);
const loading = ref(false);


// Step 3: Define the function to handle the API call
const submitSearch = async () => {
  loading.value = true;
  err.value = false;
  try {
    const apiUrl = `http://37.32.7.91:3040/api/v1/vulnerabilities/${searchValue.value}`;
    const response = await axios.get(apiUrl);

    result.value = response.data;
    store.dispatch('updateSharedData', { key: response.data });
    router.push({ name: 'DetailsPage' });
  } catch (error) {
    console.error('Error fetching data:', error);
    result.value = 'Failed to fetch data';
    err.value = true;
  } finally {
    loading.value = false; // Set loading to false after the API call finishes
  }
};

</script>

<template>
  <main>
    <div class="main-left">
      <p class="headline"><span class="headline-span">Stress-free</span> way to <span class="headline-span">secure</span>
        you software</p>
      <p class="sub-headline">"Identify and address security vulnerabilities in your software with our powerful analysis
        tool. providing you with the insights needed to strengthen your system's
        defenses. Keep your software secure and stay ahead of cyber risks."</p>
      <div class="input-container">
        <input v-model="searchValue" placeholder="Enter name of a package, library, etc ..." class="search">
        <a @click.prevent="submitSearch" class="search-button" href="#">Go</a>
        <div v-if="loading" class="spinner-overlay">
          <span class="loader"></span>
        </div>
      </div>
      <p v-if="err" class="error">Oops! failed to get vulnerabilities from server</p>
    </div>
    <div class="main-right">
      <img class="vectors" src="../assets/Group.svg" alt="">
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
  flex-direction: column;
  padding: 20% 70px;
}

.landing-vector {
  width: 100%;
}

.vectors {
  width: 30%;
}

.headline {
  color: white;
  margin-bottom: 15px;
  font-size: 3em;
  font-weight: bolder;
  line-height: 1.3;
}

.sub-headline {
  color: white;
  margin-bottom: 15px;
  font-size: large;
  margin-top: 20px;
}

.headline-span {
  color: #CAFF33;
  font-weight: bold;
}

.search {
  height: 40px;
  width: 80%;
  border-radius: 8px;
  padding: 10px;
  color: black;
}

.input-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
}

.search-button {
  background-color: #CAFF33;
  padding: 8px 40px;
  border-radius: 8px;
  margin-left: 10px;
}

.search:hover {
  border: 1px solid black;
}

::placeholder {
  color: black;
  opacity: 1;
}

input:focus {
  border-width: 0px;
  box-shadow: none;
}

/* Spinner Overlay */
.spinner-overlay {
  position: fixed;
  /* Fixed position to cover the entire screen */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  /* Dark semi-transparent background */
  display: flex;
  /* Flexbox to center the spinner */
  justify-content: center;
  align-items: center;
  z-index: 1000;
  /* High z-index to ensure it's on top */
}

/* Simple spinner styles */
.spinner {
  border: 4px solid #f3f3f3;
  /* Light grey */
  border-top: 4px solid #3498db;
  /* Blue */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }

}

.spinner {
  color: #CAFF33;
  background-color: #CAFF33 !important;
  /* Replace with your desired color */
}

.loader {
  position: relative;
  display: flex;
}

.loader:before,
.loader:after {
  content: '';
  width: 15px;
  height: 15px;
  display: inline-block;
  position: relative;
  margin: 0 5px;
  border-radius: 50%;
  color: #FFF;
  background: currentColor;
  box-shadow: 50px 0, -50px 0;
  animation: left 1s infinite ease-in-out;
}

.loader:after {
  color: #CAFF33;
  animation: right 1.1s infinite ease-in-out;
}


@keyframes right {

  0%,
  100% {
    transform: translateY(-10px)
  }

  50% {
    transform: translateY(10px)
  }
}

@keyframes left {

  0%,
  100% {
    transform: translateY(10px)
  }

  50% {
    transform: translateY(-10px)
  }
}

.error {
  margin-top: 20px;
  color: #c0392b;
  font-size: large;
}

@media (max-width:1025px) {
  main {
    display: flex;
    justify-content: center;
  }

  .main-left {
    display: flex;
    flex-direction: column;
    padding-top: 20%;
    width: 80%;
    margin-bottom:50px;
  }

  .main-right {
    display: none;
    margin-bottom:50px;
  }

  .search {
    height: 40px;
    width: 90%;
    border-radius: 8px;
    padding: 10px;
    color: black;
  }

  .input-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 30px;
  }

  .search-button {
    background-color: #CAFF33;
    padding: 8px 30px;
    border-radius: 8px;
    margin-left: 10px;
  }

}
</style>
