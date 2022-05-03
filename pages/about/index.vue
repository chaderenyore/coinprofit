<template>
  <div class="mainaboutWrapper">
    <section class="about-sec">
      <div class="about_container">
        <div class="littleIconWrapper">
          <img src="@/assets/images/listtle-Icons/2.svg" class="svg-2" />
          <img
            src="@/assets/images/listtle-Icons/moneygold.svg"
            class="moneygold"
          />
          <img src="@/assets/images/listtle-Icons/6.svg" class="svg-6" />
          <img
            src="@/assets/images/listtle-Icons/icon-btc.svg"
            class="iconBTC"
          />
          <img
            src="@/assets/images/listtle-Icons/dollar.svg"
            class="litegold"
          />
          <img src="@/assets/images/listtle-Icons/1.svg" class="svg-1" />
          <img src="@/assets/images/listtle-Icons/4.svg" class="svg-4" />
          <img src="@/assets/images/listtle-Icons/7.svg" class="svg-7" />
        </div>
        <h1>About us</h1>
        <div class="about-img-wrapper">
          <!-- <img src="@/assets/images/about/mainblob.svg" class="share-blob" /> -->
          <NuxtImg
            src="/about/mainblob.svg"
            class="share-blob"
            loading="lazy"
          />
          <div class="share-portfolio-img-box">
            <!-- <img
              src="@/assets/images/about/Asset-1.svg"
              alt="Share Image"
              class="share-portfolio-img"
            /> -->
            <NuxtImg
              src="/about/Asset-1.svg"
              alt="Share Image"
              class="share-portfolio-img"
              loading="lazy"
            />
          </div>
        </div>

        <p>
          We are a small team of crypto traders and investors on a mission to
          make crypto trading and investment profitable for everyone. Tired of
          seeing beginners lose money to pump and dump schemes, we&rsquo;re set
          to change the game with our unique social trading platform that lets
          users subscribe to and follow the footsteps of profitable crypto
          traders with a track record. We made the Coinprofit app to make making
          money as easy as doing what seasoned crypto traders do. You&rsquo;re
          welcome!
        </p>
      </div>
    </section>

    <section>
      <div class="core_container">
        <h1>Our core value</h1>
        <p>
          Our company is built around
          <span style="color: var(--dark-color)"><b>3 core values</b></span>
        </p>

        <div class="core-features_wrapper">
          <div class="core_feature_main_wrapper">
            <div class="core_blobimg_wrapper">
              <img
                src="@/assets/images/about/core_blob.png"
                alt=""
                class="core_blobimg"
              />
            </div>

            <div class="core_features_box">
              <div class="core-features_img_wrapper">
                <img src="@/assets/images/about/security.png" alt="IMAGE" />
              </div>

              <h4>Safe and Transparent Crypto Community</h4>

              <p>
                Your funds are SAFU! We are neither an exchange company nor a
                wallet service provider. Your funds are in your custody, we can
                only read your connected wallets to display your balance and
                your assets. And you see the live trade of the leaders you
                subscribe to, not a simulated trade.
              </p>
            </div>
          </div>

          <div class="core_feature_main_wrapper">
            <div class="core_blobimg_wrapper">
              <img
                src="@/assets/images/about/core_blob.png"
                alt=""
                class="core_blobimg"
              />
            </div>

            <div class="core_features_box">
              <div class="core-features_img_wrapper">
                <img src="@/assets/images/about/money.png" alt="IMAGE" />
              </div>

              <h4>Built for People to Make Money</h4>

              <p>
                We are tired of seeing people lose money to fake crypto gurus so
                we changed the rules of the game. With our growing list of
                leaders with a track record and our revolutionary social trading
                feature, we empower our users to do what their preferred leaders
                are doing and not what they are saying.
              </p>
            </div>
          </div>

          <div class="core_feature_main_wrapper">
            <div class="core_blobimg_wrapper">
              <img
                src="@/assets/images/about/core_blob.png"
                alt=""
                class="core_blobimg"
              />
            </div>

            <div class="core_features_box">
              <div class="core-features_img_wrapper">
                <img
                  src="@/assets/images/about/customer_service.png"
                  alt="IMAGE"
                />
              </div>

              <h4>Customer Is Always Right</h4>

              <p>
                Wherever and whenever, we listen to our users with 24/7 IT
                Support. Don&rsquo;t be a stranger, get in touch with your
                feedback and we will make the Coinprofit app even better for
                you. WAGMI!!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="team-wrapper">
        <div class="custom-shape-divider-top-1646868710">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>

        <div class="team_content">
          <h1>Team</h1>
          <p>Meet the coinprofit App team members</p>

          <div class="team_memebers_box">
            <div class="team_memebers_box_img_box">
              <NuxtImg src="/about/emmanuel.webp" alt="IMAGE" loading="lazy" />
            </div>

            <h3>Emmanuel Ohworeko</h3>
            <!-- <h4>CEO and Founder of CoinProfit</h4> -->
          </div>
          <!-- end team_memebers_box-->

          <div class="team_memebers_box">
            <div class="team_memebers_box_img_box">
              <!-- <img src="@/assets/images/about/Assurance.jpg" alt="IMAGE" /> -->
              <NuxtImg
                src="/about/Assurance.jpg"
                alt="IMAGE"
                format="webp"
                loading="lazy"
              />
            </div>

            <h3>Ogwezi Assurance Oghenenyore</h3>
          </div>
          <!-- end team_memebers_box-->

          <div class="team_memebers_box">
            <div class="team_memebers_box_img_box">
              <!-- <img src="@/assets/images/about/mudi.jpeg" alt="IMAGE" /> -->
              <NuxtImg
                src="/about/mudi.jpeg"
                alt="IMAGE"
                format="webp"
                loading="lazy"
              />
            </div>

            <h3>Uwojeya Moody Mudiaga</h3>

            <!-- <div class="reviews">
            <p>
              With over 6 years in digital marketing, Emmanuel has helped
              businesses around the world
            </p>
          </div> -->
          </div>
          <!-- end team_memebers_box-->
        </div>
        <!-- end team_content-->

        <div class="custom-shape-divider-bottom-1646872311">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </section>

    <section>
      <div class="we_made">
        <h1>We made Coinprofit with Love</h1>
        <p>Try it and you'll see</p>

        <!-- Slideshow container -->
        <div class="slideshow-container">
          <div class="mySlides fade">
            <!-- <img src="@/assets/images/about/we_made1.png" /> -->
            <NuxtImg src="/about/we_made1.png" format="webp" loading="lazy" />
          </div>

          <div class="mySlides fade">
            <!-- <img src="@/assets/images/about/we_made2.png" /> -->
            <NuxtImg src="/about/we_made2.png" format="webp" loading="lazy" />
          </div>

          <div class="mySlides fade">
            <!-- <img src="@/assets/images/about/we_made3.png" /> -->
            <NuxtImg src="/about/we_made3.png" format="webp" loading="lazy" />
          </div>
        </div>
        <br />

        <!-- The dots/circles -->
        <div style="text-align: center" class="dot_wrapper">
          <span class="dot" @click="currentSlide(1)"></span>
          <span class="dot" @click="currentSlide(2)"></span>
          <span class="dot" @click="currentSlide(3)"></span>
        </div>

        <!-- Desktop starts here -->
        <div class="we_made_computer_container">
          <div class="we_made_feature">
            <!-- <img src="@/assets/images/about/we_made1.png" /> -->
            <NuxtImg src="/about/we_made1.png" format="webp" loading="lazy" />
          </div>

          <div class="we_made_feature">
            <!-- <img src="@/assets/images/about/we_made2.png" class="second_img" /> -->
            <NuxtImg src="/about/we_made2.png" format="webp" loading="lazy" />
          </div>

          <div class="we_made_feature">
            <!-- <img src="@/assets/images/about/we_made3.png" /> -->
            <NuxtImg src="/about/we_made3.png" format="webp" loading="lazy" />
          </div>
        </div>
        <!-- Desktop ends here -->
      </div>
    </section>
  </div>
  <!-- <BaseCallToAction /> -->
</template>

<script>
export default {
  data() {
    return {
      title: "About Coinprofit",
      slideIndex: 1,
    };
  },
  methods: {
    currentSlide(n) {
      this.showSlides((this.slideIndex = n));
    },
    showSlides(n) {
      var i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].classList += " active";
      setTimeout(this.showSlides, 1000);
    },
  },
  mounted() {
    this.showSlides(this.slideIndex);
  },

  head: {
    title: "About CoinProfit",
    meta: [
      {
        hid: "description",
        name: "desc",
        content:
          "We are a small team of crypto traders and investors on a mission to make crypto trading and investment profitable for everyone",
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "bitcoin,crypto tracking, track crypto assets, coinprofit leaders, eth, tracking, portfolio tracking",
      },
      {
        name: "apple-mobile-web-app-capable",
        content: "yes",
      },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black",
      },
      {
        name: "apple-mobile-web-app-title",
        content: "About CoinProfit",
      },
      {
        property: "og:description",
        content: "About CoinProfit",
      },
      {
        property: "og:title",
        content: "About Coinprofit",
      },
    ],
  },
};
</script>

<style scoped>
.mainaboutWrapper {
  width: 100%;
  max-width: 1450px;
  margin: 0 auto;
}
.about-sec {
  padding-top: 10rem;
  position: relative;
}
.about_container {
  position: relative;
  width: 90%;
  margin: 4rem auto 0;
}
.svg-2 {
  width: 3rem;
  position: absolute;
  top: 8%;
  left: 50%;
  z-index: 1;
}
.moneygold {
  width: 3rem;
  position: absolute;
  top: 30%;
  left: 70%;
  z-index: 1;
}
.iconBTC {
  width: 2rem;
  position: absolute;
  top: 26%;
  left: 13%;
  z-index: 1;
}
.svg-1 {
  width: 5rem;
  position: absolute;
  top: 35%;
  left: 42%;
  z-index: 1;
}
@media (min-width: 375px) {
  .svg-1 {
    top: 40%;
  }
}
@media (min-width: 450px) {
  .svg-1 {
    top: 45%;
  }
}
@media (min-width: 550px) {
  .svg-1 {
    top: 50%;
  }
}
.litegold {
  position: absolute;
  display: none;
}
.svg-4 {
  width: 4rem;
  position: absolute;
  top: 100%;
  left: 80%;
  z-index: 1;
}
.svg-6 {
  position: absolute;
  display: none;
}
.svg-7 {
  display: none;
}
.about_container h1 {
  text-align: center;
  color: #3374ea;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 2.5rem;
}
.share-blob {
  position: relative;
  margin: 2rem 0;
  width: 100%;
}
.share-portfolio-img-box {
  /* position: relative ; */
  width: 50%;
}
.share-portfolio-img {
  width: 50%;
  position: absolute;
  top: 17%;
  left: 27%;
}
@media (min-width: 360px) {
  .share-portfolio-img {
    top: 20%;
  }
}
@media (min-width: 430px) {
  .share-portfolio-img {
    top: 23%;
  }
}
@media (min-width: 704px) {
  .share-portfolio-img {
    top: 25%;
  }
}
.about_container p {
  width: 100%;
  color: var(--fourth-color);
  text-align: center;
  font-size: 1.1rem;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
  line-height: 30px;
}
.core_container {
  width: 90%;
  margin: 7rem auto 0;
  z-index: -1;
}
.core_container h1 {
  text-align: center;
  color: #3374ea;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 2.5rem;
}
.core_container p {
  margin-top: 1rem;
  width: 100%;
  color: var(--fourth-color);
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
  line-height: 30px;
}
.core-features_wrapper {
  width: 100%;
  margin-top: 2rem;
  text-align: center;
}
.core_blobimg_wrapper {
  z-index: -1;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  position: relative;
  margin-bottom: -8rem;
}
.core_blobimg {
  width: 60%;
}
.core_features_box {
  display: block;
  width: 100%;
  padding: 2rem 2rem 3rem;
  background: var(--third-color) no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000008;
  margin: 0 auto 5rem;
  font-family: "Montserrat", sans-serif;
  border-radius: 10px;
  z-index: 1;
}
.core-features_img_wrapper {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
.core-features_img_wrapper img {
  width: 40%;
}
.core_features_box h4 {
  text-align: center;
  margin: 1rem 0;
  color: #3374ea;
}
.team-wrapper {
  margin-top: -15rem;
  z-index: -1;
  background: transparent linear-gradient(180deg, #22a1f5 0%, #677bff 100%)
    no-repeat padding-box;
  position: relative;
  padding: 10rem 0 4rem;
}
.custom-shape-divider-top-1646868710 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}
.custom-shape-divider-top-1646868710 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 150px;
}
.custom-shape-divider-top-1646868710 .shape-fill {
  fill: var(--light-color);
}
.team_content {
  text-align: center;
  margin-top: 5rem;
  font-family: "Montserrat", sans-serif;
}
.team_content h1 {
  color: white;
  font-weight: 600;
  font-size: 2.5rem;
}
.team_content p {
  color: white;
  margin-top: 1rem;
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 30px;
}
.team_memebers_box {
  width: 85%;
  padding: 0 20px 50px;
  background: transparent linear-gradient(180deg, #22a1f5 0%, #28a1f1 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 10px #00000008;
  margin: 9rem auto 5rem;
  font-family: "Montserrat", sans-serif;
  border-radius: 10px;
}
.team_memebers_box_img_box {
  margin: auto;
  position: relative;
  top: -4rem;
  margin-bottom: -3rem;
  height: 15rem;
  width: 14rem;
}
.team_memebers_box_img_box img {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  border-radius: 50%;
  object-fit: cover;
}
.team_memebers_box h3 {
  text-align: center;
  color: #fff;
  margin-bottom: 7px;
}
.team_memebers_box h4 {
  color: #f7ff00;
  text-align: center;
  margin: 0.4rem auto 0;
  font-size: 0.8rem;
  line-height: 30px;
}
.reviews p {
  color: #ffffff;
  margin-top: 20px;
  font-size: 17px;
}
.custom-shape-divider-bottom-1646872311 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}
.custom-shape-divider-bottom-1646872311 svg {
  position: relative;
  display: block;
  width: calc(116% + 1.3px);
  height: 78px;
  transform: rotateY(180deg);
}
.custom-shape-divider-bottom-1646872311 .shape-fill {
  fill: var(--light-color);
}
.we_made {
  margin-top: 5rem;
  text-align: center;
}
.we_made h1 {
  color: #3374ea;
  font-weight: 600;
}
.we_made p {
  margin-top: 1rem;
  width: 100%;
  color: var(--fourth-color);
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
  line-height: 30px;
}
.slideshow-container {
  width: 100%;
  text-align: center;
  position: relative;
}
.mySlides {
  width: 100%;
  margin: 0;
  /* height: 20rem; */
  padding: 0.4rem auto 0;
}
.mySlides img {
  width: 100%;
}
/* The dots/bullets/indicators */
.dot_wrapper {
  text-align: center;
}
.dot {
  height: 30px;
  width: 30px;
  margin: 0 2px;
  background-color: #ccc;
  box-shadow: 0px 10px 10px #00000008;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}
.dot.active {
  background-color: #3374ea;
}
/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}
@-webkit-keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
.we_made_computer_container {
  display: none;
}
/* IPAD  */
@media only screen and (min-width: 768px) {
  .svg-1 {
    display: block;
    position: absolute;
    width: 4rem;
    left: 50%;
    top: 60%;
    z-index: 1;
  }
  .about_container h1 {
    font-weight: 800;
  }
  .share-blob {
    position: relative;
    margin: 2rem 1rem 0;
    width: 90%;
    opacity: 0.8;
  }
  .share-portfolio-img {
    width: 40%;
    top: 30%;
    left: 30%;
  }
  .core_feature_main_wrapper {
    vertical-align: middle;
    display: inline-block;
    width: 40%;
    margin: 2rem 1rem 0;
  }
  .core_blobimg_wrapper {
    z-index: -1;
    width: 100%;
    margin: 0 auto 0;
    text-align: center;
    position: relative;
    margin-bottom: -5rem;
  }
  .core_blobimg {
    width: 50%;
  }
  .core_features_box {
    padding: 2rem 2rem 3rem;
    background: var(--third-color) no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000008;
    font-family: "Montserrat", sans-serif;
    border-radius: 10px;
  }
  .team_memebers_box {
    width: 40%;
    margin: 8rem 1rem 0;
    display: inline-block;
  }
  .mySlides img {
    width: 60%;
  }
}
/* IPAD PRO */
@media only screen and (min-width: 1024px) {
  .svg-2 {
    display: block;
    position: absolute;
    width: 4rem;
    left: 78%;
    top: -5%;
    z-index: 1;
  }
  .moneygold {
    display: block;
    position: absolute;
    width: 4rem;
    left: 90%;
    top: 40%;
    z-index: 1;
  }
  .iconBTC {
    display: block;
    position: absolute;
    width: 3rem;
    left: 55%;
    top: 40%;
    z-index: 1;
  }
  .svg-1 {
    display: block;
    position: absolute;
    width: 4rem;
    left: 75%;
    top: 105%;
    z-index: 1;
  }
  .svg-4 {
    display: block;
    position: absolute;
    width: 5rem;
    left: 40%;
    top: 100%;
    z-index: 1;
  }
  .litegold {
    position: absolute;
    top: -10%;
    display: block;
  }
  .svg-6 {
    position: absolute;
    display: block;
    position: absolute;
    width: 4rem;
    left: 47%;
    top: 0%;
    z-index: 1;
  }
  .svg-7 {
    display: block;
    width: 4rem;
    position: absolute;
    top: 110%;
    z-index: 1;
  }
  .about-sec {
    margin-bottom: 20rem;
  }
  .about_container {
    width: 80%;
    margin: 4rem auto 0;
  }
  .about_container h1 {
    float: left;
    margin-right: 14.5rem;
    margin-bottom: 1rem;
    text-align: left;
    font-weight: 800;
    width: 60%;
  }
  .about_container p {
    width: 50%;
    color: var(--fourth-color);
    text-align: left;
    font-size: 1.1rem;
    font-weight: 400;
    font-family: "Montserrat", sans-serif;
    line-height: 40px;
  }
  .share-blob {
    float: right;
    position: relative;
    margin: -5rem 0 2rem;
    width: 50%;
    opacity: 0.8;
  }
  .share-portfolio-img {
    width: 28%;
    top: 20%;
    left: 62%;
  }
  .core_blobimg_wrapper {
    z-index: -1;
    width: 100%;
    margin: 0 auto 0;
    text-align: center;
    position: relative;
    margin-bottom: -5rem;
  }
  .core_blobimg {
    width: 40%;
  }
  .team_content {
    width: 80%;
    margin: 5rem auto 5rem;
  }
  .slideshow-container,
  .dot_wrapper {
    display: none;
  }
  .we_made_computer_container {
    width: 100%;
    display: block;
  }
  .we_made_feature {
    display: inline-block;
  }
}
/* START COMPUTER SCREEN DESIGN */
@media only screen and (min-width: 1200px) {
  .svg-2 {
    display: block;
    position: absolute;
    width: 4rem;
    left: 78%;
    top: -5%;
    z-index: 1;
  }
  .moneygold {
    display: block;
    position: absolute;
    width: 4rem;
    left: 90%;
    top: 60%;
    z-index: 1;
  }
  .iconBTC {
    display: block;
    position: absolute;
    width: 3rem;
    left: 55%;
    top: 60%;
    z-index: 1;
  }
  .svg-1 {
    display: block;
    position: absolute;
    width: 4rem;
    left: 75%;
    top: 120%;
    z-index: 1;
  }
  .svg-4 {
    display: block;
    position: absolute;
    width: 5rem;
    left: 40%;
    top: 100%;
    z-index: 1;
  }
  .litegold {
    position: absolute;
    top: -20%;
    display: block;
  }
  .svg-6 {
    position: absolute;
    display: block;
    position: absolute;
    width: 4rem;
    left: 47%;
    top: 0%;
    z-index: 1;
  }
  .svg-7 {
    display: block;
    width: 4rem;
    position: absolute;
    top: 110%;
    z-index: 1;
  }
  .about-sec {
    padding-top: 12rem;
  }
  .about_container p {
    line-height: 30px;
    font-size: 1rem;
  }
  .share-blob {
    float: right;
    position: relative;
    margin: -9rem 0 2rem;
    width: 50%;
    opacity: 0.8;
  }
  .share-portfolio-img {
    width: 30%;
    top: 20%;
  }
  .core_container {
    padding-top: 1rem;
  }
  .core_container h1 {
    font-weight: 800;
  }
  .core_feature_main_wrapper {
    vertical-align: middle;
    display: inline-block;
    width: 30%;
    margin: 3rem 1rem 5rem;
  }
  .core_feature_main_wrapper:hover {
    transition: 1s;
    filter: saturate(100%);
    transform: scale(1.1);
  }
  .core_blobimg_wrapper {
    z-index: -1;
    width: 100%;
    margin: 0 auto 0;
    text-align: center;
    position: relative;
    margin-bottom: -5rem;
  }
  .core_blobimg {
    width: 40%;
  }
  .core_features_box {
    padding: 2rem 2rem 3rem;
    background: var(--third-color) no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000008;
    font-family: "Montserrat", sans-serif;
    border-radius: 10px;
  }
  .team-wrapper {
    margin-top: -25rem;
    padding: 20rem 0 5rem;
  }
  .team_content {
    width: 80%;
    margin: 5rem auto 5rem;
  }
  .team_content h1 {
    font-weight: 800;
  }
  .team_memebers_box {
    width: 30%;
    margin: 8rem 1rem 0;
    display: inline-block;
  }
  .we_made h1 {
    font-weight: 800;
    font-size: 2.5rem;
  }
  .we_made_computer_container {
    margin: 0 auto;
    text-align: center;
  }
  .we_made_feature img {
    width: 100%;
  }
  .second_img {
    position: relative;
    top: 5rem;
  }
}
</style>
