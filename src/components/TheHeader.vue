<template>

  <div class="backdrop"></div>

  <header class="header">
    <nav class="navbar">
      <div class="nav-logo">
        <router-link to="/"
          ><img
            src="../assets/images/coin-profit-logo-11@1x.png"
            alt="LOGO"
            class="logo"
        /></router-link>
      </div>
      <img
        src="@/assets/images/toggle.png"
        alt="Toggle Button"
        id="toggleIcon"
        class="toggle-moon"
      />

      <ul class="nav-menu">
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/leaders">Leaders</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/calculator">Calculator</router-link>
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

  <!--  -->
</template>

<script>
export default {
  methods: {
    closeMenu() {
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav-menu");
      const backdrop = document.querySelector(".backdrop");

      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      backdrop.classList.remove("active");
    },
    initHeader() {
      // Toggle light and dark mode codes here

      let togglebtn = document.querySelector("#toggleIcon");

      if (localStorage.getItem("theme") == null) {
        localStorage.setItem("theme", "light");
      }

      let localData = localStorage.getItem("theme");

      if (localData == "light") {
        togglebtn.src = require("@/assets/images/toggle.png");
        document.body.classList.remove("dark-theme");
      } else if (localData == "dark") {
        togglebtn.src = require("@/assets/images/toggle-dark.svg");
        document.body.classList.add("dark-theme");
      }

      togglebtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
          togglebtn.src = require("@/assets/images/toggle-dark.svg");
          localStorage.setItem("theme", "dark");
        } else {
          togglebtn.src = require("@/assets/images/toggle.png");
          localStorage.setItem("theme", "light");
        }
      });



      // Start navbar
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav-menu");
      const navLink = document.querySelectorAll(".nav-link");
      const backdrop = document.querySelector(".backdrop");

      hamburger.addEventListener("click", mobileMenu);
      navLink.forEach((n) => n.addEventListener("click", this.closeMenu));

      function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        backdrop.classList.toggle("active");
      }

      backdrop.addEventListener("click", closebackdrop);
      function closebackdrop() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        backdrop.classList.remove("active");
      }

      // End Navabr
    },
  },

  watch: {
    $route() {
      this.closeMenu();
    },
  },

  mounted() {
    this.initHeader();
  },
};
</script>

<style scoped>
.header {
  font-family: sans-serif;
  width: 100%;
  max-width: 1450px;
  margin: 0 auto;
}

.navbar {
  width: 90%;
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
  left: 25%;
}

.nav-logo {
  width: 20%;
}
.logo {
  height: 100px;
  left: 10%;
  object-fit: cover;
  position: absolute;
  top: 0.3rem;
  width: 12%;
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
  border-bottom: 2px solid #3374ea 2px;
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
  margin-left: 2rem;
}
.actn a:hover {
  background-color: #13141c;
  color: #fff !important;
  border-bottom: none;
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
  left: 25%;
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

@media only screen and (max-width: 768px) {
  .scrollTop {
    position: fixed;
    bottom: 400px;
    right: 30px;
    z-index: 10;
    /* background: #ffa94f url("../images/rocket.png"); */
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

    padding: 35px 30px;
    background-color: var(--nav-light);
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    z-index: 10;
    position: fixed;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
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
  top: 30%;
  left: 40%;
}
  nav ul {
    position: fixed;
    left: -130%;
    top: 6rem;
    margin-left: 100px;
    flex-direction: column;
    background-color: var(--nav-light);
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
    /* background: #ffa94f url("../images/rocket.png"); */
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
    height: 100vh;
    position: fixed;
    top: 7px;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  .navbar {
    width: 100%;
    padding: 20px 30px;
    background-color: var(--nav-light);
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    z-index: 10;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
  .logo {
    height: 80px;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 10px;
    width: 150px;
  }

.toggle-moon {
  width: 70px;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  left: 40%;
}

  nav ul {
    position: fixed;
    left: -110%;
    top: 4.1rem;
    margin-left: 100px;
    flex-direction: column;
    background-color: var(--nav-light);
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
