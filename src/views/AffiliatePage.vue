<template>
  <div class="mainContainer">
    
    <div class="affiliate_hero">
      <!-- <img src="../assets/images/Asset-1.svg" alt="" class="background-svg" /> -->

      <h1>Earn Free Crypto For Life!</h1>

      <div class="affiliate_hero_img_wrapper">
        <div class="heroBlobWrapper">
          <img src="@/assets/images/about/mainblob.svg" class="heroBlob" />
        </div>

        <div class="share-portfolio-img-box">
          <img
            src="@/assets/images/appUI.webp"
            alt="Share Image"
            class="share-portfolio-img"
          />
        </div>
      </div>
    <div class="hero-CTA">
      <h3>Become an Affiliate &ndash; Download the CoinProfit App</h3>
      <div class="app-downloads">
        <a
          href="https://play.google.com/store/apps/details?id=com.procity.coinprofit"
          target="_blank"
          rel="noopener noreferrer"
          ><img
            src="@/assets/images/goplay.svg"
            alt=""
            srcset=""
            class="app-download"
        /></a>

        <a href="#" target="_blank" rel="noopener noreferrer"
          ><img
            src="@/assets/images/appstore.svg"
            alt=""
            srcset=""
            class="app-download"
        /></a>

        <!-- <p class="comingSoon" >IOS coming soon...!</p> -->
      </div>
      <p>
        Get a <strong><span style="color: #3374ea">10%</span></strong> lifetime commission for
        every person you refer to CoinProfitApp. Your friends also get
        <strong><span style="color: #3374ea">50%</span></strong> welcome boss on their first
        upgrade.
      </p>
      </div>
    </div>
  </div>
  <BaseCallToAction />
</template>



<style scoped>
.mainContainer {
  width: 100%;
  max-width: 1450px;
  margin: 0 auto;
}

.affiliate_hero {
  padding-top: 7rem;
  width: 90%;
  margin: 0 auto;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 30rem; /* margin here needs to change!!! */
}
.background-svg {
    display: none;
  }

.affiliate_hero h1 {
  text-align: center;
  color: #3374ea;
  font-weight: 800;
}
.affiliate_hero h3 {
  color: var(--fourth-color);
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 1rem;
  font-weight: 500;
}
.affiliate_hero p {
  text-align: center;
  margin-top: 1rem;
  line-height: 30px;
}
@media (min-width: 430px) {
  .affiliate_hero h3 {
    margin-top: 2rem;
  }
}
.heroBlob {
  position: relative;
  margin: 2rem 0;
  width: 100%;
}

@media (min-width: 880px) {
  .heroBlob {
    margin: 2rem 0 5rem;
    margin-left: 15%;
    width: 70%;
  }
  .affiliate_hero p {
    text-align: center;
    width: 70%;
    margin-top: 1rem;
    margin: 0 auto;
  }
}

@media (min-width: 1000px) {
  .heroBlob {
    margin-bottom: 2rem;
  }
}
.share-portfolio-img {
  width: 17rem;
  position: absolute;
  top: 30%;
  margin: auto;
  left: 0;
  right: 0;
}

@media (min-width: 540px) {
  .share-portfolio-img {
    width: 20rem;
  }
}
@media (min-width: 635px) {
  .share-portfolio-img {
    width: 25rem;
  }
}

.app-downloads {
  width: 100%;
  text-align: center;
}
.app-download {
  display: inline-block;
  width: 12rem;
  margin: 0.5rem 1rem;
}
@media (min-width: 730px) {
  .app-download {
    width: 16rem;
  }
}

@media (min-width: 1200px) {
  .affiliate_hero {
    padding-top: 20rem;
    width: 80%;
  }
  .background-svg {
      display: block;
      position: absolute;
      top: 29%;
      left: 5%;
      width: 40%;
      opacity: 0.06;
    }
  .affiliate_hero h1 {
    width: 60%;
    text-align: left;
    margin: 2rem 0 0;
    color: #3374ea;
    font-size: 2.5rem;
    font-weight: 800;
    letter-spacing: 0;
    line-height: 50px;
  }

  .affiliate_hero h3 {
    text-align: left;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 500;
    line-height: 50px;
  }
  
  .affiliate_hero p {
    width: 60%;
    color: var(--fourth-color);
    font-size: 1rem;
    text-align: left;
    margin: 10px 0;
    line-height: 30px;
  }
  /* .hero-CTA {
    display: flex;
    flex-direction: column-reverse;
  } */
  .app-downloads {
    width: 40%;
    text-align: left;
  }
  .app-download {
    width: 12rem;
    margin: 0;
    padding-right: 20px;
  }

  .affiliate_hero_img_wrapper {
    width: 50%;
    float: right;
  }

  .heroBlob {
    transform: translate(42px, -10rem);
    margin: 0 0 5rem;
    width: 100%;
  }
  .share-portfolio-img {
    width: 23rem;
    position: absolute;
    top: 30%;
    margin: auto;
    left: 45%;
    right: 0;
  }
}

@media (min-width: 1400px) {
    .background-svg {
      display: block;
      position: absolute;
      top: 30%;
      left: 5%;
      width: 40%;
      opacity: 0.06;
    }
    
    
}
</style>