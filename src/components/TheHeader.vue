<template>
  <div class="backdrop"></div>

  <header>
    <div class="container">
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
            <div class="navDropDown">
              <a class="navdropBTN">
                Company
                <i class="fa fa-caret-down"></i>
              </a>
              <div class="dropdown-content">
                <router-link to="/about">About</router-link>
                <router-link to="/help">Blog</router-link>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <router-link to="/help">Help</router-link>
          </li>
          <li class="nav-item actn">
            <button @click="scrollToDownload">Get App</button>
          </li>
        </ul>
        <div class="hamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    methods: {
      scrollNavbar() {
        window.addEventListener("scroll", function () {
          let header = document.querySelector("header");
          let windowPosition = window.scrollY > 0;
          header.classList.toggle("navscroll-active", windowPosition);
        });
      },
      scrollToDownload() {
        const element = document.querySelector(".final-download");
        element.scrollIntoView({ behavior: "smooth" });
      },
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
      this.scrollNavbar();
    },
  };
</script>

<style scoped>
  header {
    width: 100%;
    margin: 0 auto;
    z-index: 1000;
    position: fixed;
    transition: background-color 0.5s ease;
  }
  .container {
    width: 100%;
    max-width: 1450px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  .navbar {
    width: 90%;
    margin: auto;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: padding 0.5s ease;
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
    margin: 24px 20px;
  }
  nav ul li a {
    color: var(--fourth-color);
    font-size: 14px;
    position: relative;
    transition:  font-size 0.5s ease;
  }
  

  /* Dropdown content (hidden by default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: var(--dropdown-content);
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  /* Links inside the dropdown */
  .dropdown-content a {
    float: none;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    color: var(--fourth-color);
  }
  /* Show the dropdown menu on hover */
  .navDropDown:hover .dropdown-content {
    display: block;
  }

  nav ul li a::after {
    content: "";
    width: 100%;
    height: 2px;
    background-color: #3374ea;
    position: absolute;
    left: 0;
    bottom: -5px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
  }
  nav ul li a:hover::after {
    transform: scaleX(1);
  }
  .actn {
    margin-right: 50px;
  }
  .actn button {
    cursor: pointer;
    background-color: white;
    border-radius: 30px;
    padding: 7px 25px;
    color: blue;
    margin-left: 2rem;
    border: none;
  }
  .actn button:hover {
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

  /*Apply styles after scroll*/
  .navscroll-active {
    background-color: var(--navScroll-light);
    box-shadow: 0 3px 1rem var(--navShadow);
  }

  .navscroll-active .navbar {
    padding: 4px 0;
  }



  .navscroll-active nav ul li a {
    color: var(--navScrollp);
    font-size: 15px;
  }
  .navscroll-active .actn button {
    background-color: #3374ea;
    color: #fff;
  }

  /*Apply styles after scroll end*/

  
  /* on ipad pro screen */
  @media only screen and (max-width: 1024px) {

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
    .navscroll-active .navbar{
      padding: 10px 0;
    }
  }
  /* on ipad screen */
  @media only screen and (max-width: 768px) {


    .backdrop.active {
      width: 100vw;
      height: 94vh;
      position: fixed;
      top: 100px;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }
    .container {
      padding: 0;
    }
    .navbar {
      padding-top: 1rem;
      width: 100%;
      padding: 30px 30px;
      background-color: var(--nav-light);
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
      z-index: 10;
      position: fixed;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }
    .logo {

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
      text-align: left;
      transition: 0.5s;
      box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    }
    nav ul.active {
      left: 0;
    }
    nav ul li a {
      font-size: 26px;
    }
    nav ul li {
      display: block;
      margin: 2.5rem 300px;
    }
    .dropdown-content {
      position: relative;
    }
     .navscroll-active .navbar{
      padding: 30px 0;
    }
    nav ul li.actn {
      margin-left: 259px !important;
    }
    nav ul li.actn button {
      border: none;
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
      left: 50%;
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
      /* border-radius: 10px; */
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
      font-size: 16px;
    }

     .navscroll-active .navbar{
       padding: 20px 30px;
    }
    nav ul li.actn {
      margin-left: 30px !important;
    }
    .actn button {
      background-color: blue;
      border-radius: 30px;
      padding: 7px 25px;
      color: #fff;
      font-weight: bold;
    }
    
  }
</style>
