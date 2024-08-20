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
</style>
