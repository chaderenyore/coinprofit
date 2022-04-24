<template>
<div class="mainContainer">

<div class="affiliate_hero">
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

      <h3>Become and Affiliate &ndash; Download the CoinProfit App</h3>  
    <div class="app-downloads">
          <a href="https://play.google.com/store/apps/details?id=com.procity.coinprofit" target="_blank" rel="noopener noreferrer"
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
      <p>Get a <span style="color:#3374EA">10%</span> lifetime commission for every person you refer to CoinProfitApp. Your friends also get <span style="color:#3374EA">50%</span> welcome boss on their first upgrade.</p>
</div>





</div>
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
    font-family: montserrat;
}
.affiliate_hero h1 {
    text-align: center;
    color: #3374EA;
    font-weight: 800;
    
}
.affiliate_hero h3 {
    color: var(--dark-color);
    text-align: center;
    margin-top: 5rem;
    margin-bottom: 1rem;
    font-weight: 500;
}
.affiliate_hero p {
    text-align: center;
    margin-top: 1rem;
}
.heroBlobWrapper {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
}
  .heroBlob {
    position: relative;
    margin: 2rem 0;
    width: 30rem;
    transform: translate(-3rem, -2ex);
  }

.share-portfolio-img {
    width: 20rem;
    position: absolute;
    top: 30%;
    left: 15%;
  }

.app-downloads {
      width: 100%;
      text-align: center;
    }
    .app-download {
      display: inline-block;
      width: 15rem;
      margin: 0.5rem 1rem;
    }

@media (min-width:1200px) {
    .affiliate_hero_img_wrapper {
        display: none;
    }
}
</style>