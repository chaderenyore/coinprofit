<template>
  <header class="header">
    <nav class="navbar">
      <div class="nav-logo">
        <a href="#"
          ><img
            src="../assets/coin-profit-logo-11@1x.png"
            alt="LOGO"
            class="logo"
        /></a>
      </div>
      <img
        src="../assets/toggl.png"
        alt="Toggle Button"
        id="toggleIcon"
        class="toggle-moon"
      />

      <ul class="nav-menu">
        <li class="nav-item">
          <!-- <a href="#">Home</a> -->
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <!-- <a href="#">Leaders</a> -->
          <router-link to="/leaders">Leaders</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/affiliate">Affiliate</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/help">Help</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about">About</router-link>
        </li>
        <li class="nav-item actn">
          <a href="#">Get App</a>
        </li>
      </ul>
      <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header {
  font-family: sans-serif;
}

.navbar {
  width: 80%;
  margin: auto;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: -1;
}

.toggle-moon {
  width: 70px;
  cursor: pointer;
  position: absolute;
  top: 30px;
  left: 370px;
}

.nav-logo {
  width: 20%;
}
.logo {
  height: 100px;
  left: 164px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 170px;
}
nav ul li {
  display: inline-block;
  margin: 27px 20px;
}

nav ul li a {
  color: var(--fourth-color);
  font-size: 14px;
}

nav ul li a:hover {
  color: var(--dark-color);
}
nav ul li a:active {
  border-bottom: 2px solid blue;
}
.actn {
  margin-right: 50px;
}
.actn a {
  cursor: pointer;
  background-color: white;
  border-radius: 30px;
  padding: 7px 25px;
  color: blue;
}

.hamburger {
  display: none;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: var(--dark-color);
}
.bar:nth-child(2) {
  margin-left: 20px;
}
/* on ipad pro screen */

@media only screen and (max-width: 1024px) {
  ::-webkit-scrollbar {
    display: none;
  }
  ::-webkit-scrollbar-track {
    display: none;
  }
  ::-webkit-scrollbar-thumb {
    display: none;
  }
  .scrollTop {
    position: fixed;
    bottom: 400px;
    right: 90px;
    width: 100px;
    height: 100px;
    cursor: pointer;
    padding: 25px;
    border-radius: 50%;
    background-color: #ffa94f;
    background-size: 40px;
    background-repeat: no-repeat;
    background-position: center;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s;
  }
  .navbar {
    width: 100%;
    margin: auto;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .toggle-moon {
    width: 80px;
    cursor: pointer;
    position: absolute;
    top: 25px;
    left: 280px;
  }

  .nav-logo {
    width: unset;
  }
  .logo {
    height: 100px;
    left: 40px;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 20%;
  }
}

/* on ipad screen */

@media only screen and (max-width: 769px) {
  .scrollTop {
    position: fixed;
    bottom: 400px;
    right: 30px;
    z-index: 10;
    background: #ffa94f url("../assets/rocket.png");
    width: 40px;
    height: 40px;
    cursor: pointer;
    padding: 25px;
    border-radius: 50%;
    background-size: 40px;
    background-repeat: no-repeat;
    background-position: center;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s;
    /* display: none; */
  }
  .backdrop.active {
    width: 100vw;
    height: 94vh;
    position: fixed;
    top: 100px;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  .navbar {
    padding-top: 1rem;
    width: 100%;
    height: 10vh;
    padding: 10px 30px;
    background-color: var(--light-color);
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    z-index: 10;
    position: fixed;
  }
  .logo {
    /* height: 90px; */
    width: 25%;
    object-fit: cover;
    position: absolute;
    top: 10px;
    left: 50px;
  }

  .toggle-moon {
    width: 19%;
    position: absolute;
    top: 13px;
    left: 500px;
  }

  nav ul {
    position: fixed;
    left: -130%;
    top: 6rem;
    margin-left: 100px;
    flex-direction: column;
    background-color: var(--light-color);
    z-index: 2;
    width: 100%;
    height: 100vh;
    border-radius: 10px;
    text-align: left;
    transition: 0.5s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
  }

  nav ul.active {
    left: 0;
  }

  nav ul li a {
    color: var(--fourth-color);
    font-size: 26px;
  }

  nav ul li {
    display: block;
    margin: 2.5rem 300px;
  }
  nav ul li.actn {
    margin-left: 260px !important;
  }

  nav ul li.actn a {
    background-color: blue;
    border-radius: 30px;
    padding: 7px 25px;
    color: #fff;
    font-weight: bold;
    padding: 10px 30px;
  }

  .hamburger {
    display: block;
    cursor: pointer;
    background: none;
  }

  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active .bar:nth-child(1) {
    -webkit-transform: translateY(8px) rotate(45deg);
    transform: translateY(8px) rotate(45deg);
  }

  .hamburger.active .bar:nth-child(3) {
    -webkit-transform: translateY(-8px) rotate(-45deg);
    transform: translateY(-8px) rotate(-45deg);
  }
}

/* On Mobile Screens */
@media only screen and (max-width: 440px) {
  ::-webkit-scrollbar {
    display: none;
  }
  ::-webkit-scrollbar-track {
    display: none;
  }
  ::-webkit-scrollbar-thumb {
    display: none;
  }
  .scrollTop {
    position: fixed;
    bottom: 400px;
    right: 30px;
    z-index: 10;
    background: #ffa94f url("../assets/rocket.png");
    width: 40px;
    height: 40px;
    cursor: pointer;
    padding: 25px;
    border-radius: 50%;
    background-size: 40px;
    background-repeat: no-repeat;
    background-position: center;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s;
    /* display: none; */
  }

  .backdrop.active {
    width: 100vw;
    height: 94vh;
    position: fixed;
    top: 78px;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  .navbar {
    padding-top: 1rem;
    width: 100%;
    height: 10vh;
    padding: 10px 30px;
    background-color: var(--light-color);
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    z-index: 10;
  }
  .logo {
    height: 90px;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 10px;
    width: 150px;
  }

  .toggle-moon {
    width: 25%;
    position: absolute;
    top: 13px;
    left: 180px;
  }

  nav ul {
    position: fixed;
    left: -110%;
    top: 4.1rem;
    margin-left: 100px;
    flex-direction: column;
    background-color: var(--light-color);
    z-index: 2;
    width: 80%;
    height: 100vh;
    border-radius: 10px;
    text-align: left;
    transition: 0.5s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
  }

  nav ul.active {
    left: 0;
  }

  nav ul li {
    display: block;
    margin: 2.5rem 30px;
  }

  nav ul li a {
    color: var(--fourth-color);
    font-size: 16px;
  }
  nav ul li.actn {
    margin-left: 30px !important;
  }
  .actn a {
    background-color: blue;
    border-radius: 30px;
    padding: 7px 25px;
    color: #fff;
    font-weight: bold;
  }

  .hamburger {
    display: block;
    cursor: pointer;
    background: none;
  }

  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active .bar:nth-child(1) {
    -webkit-transform: translateY(8px) rotate(45deg);
    transform: translateY(8px) rotate(45deg);
  }

  .hamburger.active .bar:nth-child(3) {
    -webkit-transform: translateY(-8px) rotate(-45deg);
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>
