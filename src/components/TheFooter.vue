<template>
<div class="main-footerWrapper">
  <footer class="mobilefooter">
    <!-- mobile footer will be displayed only for mobile and tablets screens -->
    <div class="MF-wrapper">
      <div class="footer-logo-wrapper">
       <router-link to="/"> <img src="../assets/images/footerlogo.png" alt="logo"/> </router-link>
      </div>
      <div class="slogan"><p>Helping you become a profitable crypto trader and investor</p></div>
      <div class="social-link">
        <a href="https://twitter.com/coinprofit_app" target="_blank" rel="noopener noreferrer">
          <svg
            style="fill: #3374ea"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            /></svg
        ></a>

        <a href="https://www.facebook.com/coinprofitapp" target="_blank" rel="noopener noreferrer"
          ><svg
            style="fill: #3374ea"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
            /></svg
        ></a>

        <a href="https://t.me/+dHybmF8BHyY3ZDY0" target="_blank" rel="noopener noreferrer"
          ><svg
            style="fill: #1188c3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
          >
            <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"
            /></svg
        ></a>

      </div>

      <div class="FAQfooterContainer">
        <div class="footerWrapper">
          <button class="footerToggle">
            <h3>Company</h3>
            <i class="fa fa-chevron-down footerIcon" style="color: #3374ea"></i>
          </button>
          <div class="footerContent">
            <router-link to="/about"><p>About Us</p></router-link>
            <a href="#"><p>Blog</p></a>
            <a href="#"><p>Contact</p></a>
          </div>
        </div>
        <div class="footerWrapper">
          <button class="footerToggle">
            <h3>Product</h3>
            <i class="fa fa-chevron-down footerIcon" style="color: #3374ea"></i>
          </button>
          <div class="footerContent">
            <a href="#"><p>Andrioid App</p></a>
            <a href="#"><p>ios App</p></a>
          </div>
        </div>
        <div class="footerWrapper">
          <button class="footerToggle">
            <h3>Help</h3>
            <i class="fa fa-chevron-down footerIcon" style="color: #3374ea"></i>
          </button>
          <div class="footerContent">
            <a href="#"><p>How to Guide</p></a>
            <a href="#"><p>Learn</p></a>
            
          </div>
        </div>

        <div class="footerWrapper">
          <button class="footerToggle">
            <h3>Legal</h3>
            <i class="fa fa-chevron-down footerIcon" style="color: #3374ea"></i>
          </button>
          <div class="footerContent">
            <a href="#"><p>Terms and Conditions</p></a>
             <router-link to="/privacy_policy"><p>Privacy policy</p></router-link>
            <router-link to="/aml_policy"><p>AML Policies</p></router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <footer class="computer-footer">
    <div class="computer-footer-wrapper">
      <div class="main-app-container">
        <div class="computer-logo-wrapper">
          <router-link to="/"> <img src="../assets/images/footerlogo.png" alt="logo"/> </router-link>
        </div>
        <div class="computer-slogan">
          <p>Helping you become a profitable crypto trader and investor</p>
        </div>
        <div class="social-link">
          <a
            href="https://twitter.com/coinprofit_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              style="fill: #3374ea"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              /></svg
          ></a>

          <a
            href="https://www.facebook.com/coinprofitapp"
            target="_blank"
            rel="noopener noreferrer"
            ><svg
              style="fill: #3374ea"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
              /></svg
          ></a>

          <a
            href="https://t.me/+dHybmF8BHyY3ZDY0"
            target="_blank"
            rel="noopener noreferrer"
            ><svg
              style="fill: #1188c3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"
              /></svg
          ></a>

          
        </div>
      </div>
      <div class="main-app-container">
        <div class="company-head">
          <h3>Company</h3>
         <router-link to="/about"><p>About Us</p></router-link>
          <a href="#"><p>Blog</p></a>
          <a href="#"><p>Contact</p></a>
        </div>
      </div>

      <div class="main-app-container">
        <div class="company-head">
          <h3>Help</h3>
          <router-link to="/help"><p>How to Guide</p></router-link>
          <a href="#"><p>Learn</p></a>
          
        </div>
      </div>
      <div class="main-app-container">
        <div class="company-head">
          <h3>Products</h3>
          <a href="#"><p>Andrioid App</p></a>
          <a href="#"><p>ios App</p></a>
        </div>
      </div>

      <div class="main-app-container">
        <div class="company-head">
          <h3>Legal</h3>
          <a href="#"><p>Terms and Conditions</p></a>
          <router-link to="/privacy_policy"><p>Privacy policy</p></router-link>
           <router-link to="/aml_policy"><p>AML Policies</p></router-link>
        </div>
      </div>
    </div>
  </footer>
  <div class="copyright">
    <p>
      COINPROFIT.APP COPYRIGHT &copy; 2022 ALL RIGHTS RESERVED.
    </p>
  </div>

 </div> 
</template>

<script>
export default {
  methods: {
    initFooter() {
      // Footer section
      // The footer section differs from each screen. Mobile and tablets are same while computers is different
      let toggles = document.getElementsByClassName("footerToggle");
      let contentBox = document.getElementsByClassName("footerContent");
      let icons = document.getElementsByClassName("footerIcon");

      for (let i = 0; i < toggles.length; i++) {
        toggles[i].addEventListener("click", () => {
          if (
            parseInt(contentBox[i].style.height) != contentBox[i].scrollHeight
          ) {
            contentBox[i].style.height = contentBox[i].scrollHeight + "px";
            icons[i].classList.remove("fa-chevron-down");
            icons[i].classList.add("fa-chevron-up");
          } else {
            contentBox[i].style.height = "0px";
            icons[i].classList.remove("fa-chevron-up");
            icons[i].classList.add("fa-chevron-down");
          }

          for (let j = 0; j < contentBox.length; j++) {
            if (j !== i) {
              contentBox[j].style.height = "0px";
              icons[j].classList.remove("fa-chevron-up");
              icons[j].classList.add("fa-chevron-down");
            }
          }
        });
      }
    },
  },
  mounted() {
    this.initFooter();
  },
};
</script>

<style scoped>
.main-footerWrapper {
  width: 100%;
  margin: 0 auto;
}
@media (min-width: 1400px) {
  .main-footerWrapper {
    max-width: 1350px;
  }
}
.mobilefooter {
  background-color: var(--light-color);
}

.MF-wrapper {
  width: 90%;
  margin: 50px auto 0;
}
.slogan {
  color: var(--fourth-color);
  width: 60%;
}
.footer-logo-wrapper {
  width: 20%;
}
.footer-logo-wrapper img {
  width: 150px;
  height: 90px;
  object-fit: cover;
}

.social-link svg {
  margin: 4px 5px;
  width: 30px;
}

.FAQfooterContainer {
  position: relative;
  width: 100%;
  margin: 50px 0;
}
.footerWrapper {
  background-color: var(--third-color);
  margin-bottom: 20px;
  padding: 15px 40px;
  border-radius: 5px;
  box-shadow: 0px 20px 17px #1c192305;
}

.footerWrapper h3 {
  color: #3374ea;
}
.footerToggle,
.footerContent {
  font-family: "Montserrat", sans-serif;
}
.footerToggle {
  width: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  color: #111130;
  font-weight: 500;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 15px 0;
}
.footerContent {
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 0;
  overflow: hidden;
  transition: all 1s;
}
.footerContent p {
  color: #3374ea;
  border-bottom: 1px solid #3374ea;
  margin-bottom: 8px;
}

.copyright {
  color: var(--fourth-color);
  position: relative;
  margin: 10px auto 30px;
  width: 80%;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  font-size: 0.9rem;
 
}
.computer-footer {
  display: none;
}

/* IPAD DESIGN */
@media only screen and (min-width: 768px) {
  .final-download {
    margin: 5rem auto 40px;
    width: 90%;
    height: 400px;
    border-radius: 25px;
    background: transparent linear-gradient(180deg, #22a1f5 0%, #677bff 100%) 0%
      0% no-repeat padding-box;
    box-shadow: 0px 30px 20px #22a1f51a;
    padding: 15px 25px;
  }
  .final-download-wrapper {
    width: 100%;
    margin: 30px 40px 0;
  }
  .final-download-wrapper img {
    width: 40%;
    display: inline-block;
  }
}

/* IPAD PRO */

@media only screen and (min-width: 1024px) {
  .final-download {
    margin: 100px auto 40px;
    width: 80%;
    height: 500px;
    border-radius: 25px;
    background: transparent linear-gradient(180deg, #22a1f5 0%, #677bff 100%) 0%
      0% no-repeat padding-box;
    box-shadow: 0px 30px 20px #22a1f51a;
    padding: 15px 25px;
  }
  .final-download h1 {
    color: #fff;
    text-align: center;
    font-size: 43px;
    font-weight: 800;
    margin-top: 100px;
  }
  .final-download-wrapper {
    width: 80%;
    margin: 30px auto;
  }
  .final-download-wrapper img {
    width: 40%;
    display: inline-block;
    margin-left: 30px;
  }
}

/* START COMPUTER SCREEN DESIGN */
@media only screen and (min-width: 1200px) {
  .mobilefooter {
    display: none;
  }

  .computer-footer {
    display: block;
    position: relative;
    background-color: var(--third-color);
    height: 240px;
    margin-top: 100px;
  }
  .computer-footer-wrapper {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .main-app-container {
    width: 200px;
  }
  .computer-logo-wrapper {
    width: 20%;
  }
  .computer-logo-wrapper img {
    margin-top: 30px;
    width: 150px;
    height: 90px;
    object-fit: cover;
  }
  .company-head h3 {
    letter-spacing: 0px;
    color: #3374ea;
    margin-top: 50px;
    margin-bottom: 40px;
    font-family: "Montserrat", sans-serif;
  }
  .computer-slogan {
    color: var(--fourth-color);
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    margin-bottom: 5px;
  }
  .company-head p {
    color: var(--fourth-color);
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    line-height: 30px;
  }
  .copyright {
    margin-top: 60px;
    margin-bottom: 10px;
    font-weight: 500;

  }
}
</style>
