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
          Get a
          <strong><span style="color: #3374ea">10%</span></strong> lifetime
          commission for every person you refer to CoinProfitApp. Your friends
          also get
          <strong><span style="color: #3374ea">50%</span></strong> welcome boss
          on their first upgrade.
        </p>
      </div>
    </div>

    <div class="affiliate-benefits-wrapper">
      <div class="benefitOne">
        <h1 class="benefitOneH1">Instant Commission on Every Upgrade</h1>

        <div class="benfitsImagesoneWrapper">
          <img src="@/assets/images/about/mainblob.svg" class="benfitBlobOne" />
          <img
            src="@/assets/images/appUI.webp"
            alt="Share Image"
            class="benefitOneIMG"
          />
        </div>

        <div class="benfitOneContents">
          <h1 class="benefitOneH1F">Instant Commission on Every Upgrade</h1>
          <p>
            Your account is automatically credited with 10% commision anytime
            your referral upgrade/renew a premium plan.
          </p>
        </div>
      </div>
      <!-- end benefits one -->

      <div class="benefitTwo">
        <div class="benefitTwoH1Content">
          <h1>Instant and automated Withdrawals</h1>
        </div>
        <div class="benfitsImagesTwoWrapper">
          <img src="@/assets/images/about/mainblob.svg" class="benfitBlobTwo" />
          <img
            src="@/assets/images/appUI.webp"
            alt="Share Image"
            class="benefitTwoIMG"
          />
        </div>
        <div class="benefitTwoPContent">
          <p>
            Once you hit the minimum withdrawal threshold of $10, You can
            request your withdrawal anytime, even if it’s 12am on New Year day
            and it will be credited to your crypto wallet instantly.
          </p>
        </div>
      </div>
    </div>
    <!--end affiliate-benefits-wrapper -->

    <!-- Affiiate steps wrapper -->
    <div class="affiliate-steps-wrapper">
      <h1>How Does It Work?</h1>
      <p>
        It’s pretty simple and straightforward. Anyone can become an affiliate
        in <strong><span style="color: #3374ea">easy steps.</span></strong> No
        KYC required.
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
              <img
                src="@/assets/images/affiliate/cloud-download.png"
                alt="IMAGE"
              />
              <h3>STEP 1</h3>
            </div>

            <h4>Download the App</h4>

            <p>
              Download the CoinProfit App from either Playstore or Apple Store
              and copy your affiliate ID from your referral dashboard.
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
                src="@/assets/images/affiliate/social-media.png"
                alt="IMAGE"
              />
              <h3>STEP 2</h3>
            </div>

            <h4>Share Your Referral Code</h4>

            <p>
              Share with your family and friends, invite them to download the
              CoinProfit App and use your referral Code on sign up.
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
              <img src="@/assets/images/affiliate/earn.png" alt="IMAGE" />
              <h3>STEP 3</h3>
            </div>

            <h4>Earn</h4>

            <p>
              Earn commission anytime your friends upgrade or renew their
              premium subscription. As long as they keep their subscription
              active, you get paid!
            </p>
          </div>
        </div>
      </div>
      <p>Become an Affiliate &ndash; Download the CoinProfit App</p>
      <div class="app-downloadsAffiliates">
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
    </div>
  </div>
  <BaseCallToAction />
</template>



<style scoped>
.mainContainer {
  width: 100%;
  max-width: 1450px;
  margin: 0 auto;
  font-family: "Montserrat", sans-serif;
}

.affiliate_hero {
  padding-top: 7rem;
  width: 90%;
  margin: 0 auto;
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
  color: var(--fourth-color);
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

@media (min-width: 1024px) {
  .share-portfolio-img {
    width: 20rem;
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
    width: 22rem;
    position: absolute;
    top: 30%;
    margin: 0;
    left: 60%;
    right: 0;
  }
}

.affiliate-benefits-wrapper {
  position: relative;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 5rem;
}
.benefitOne,
.benefitTwo {
  position: relative;
}
.benefitOneH1 {
  display: block;
}
.benefitOneH1F {
  display: none;
}
.affiliate-benefits-wrapper h1 {
  text-align: center;
  margin-top: 5rem;
  color: #3374ea;
  font-weight: 800;
}
.affiliate-benefits-wrapper p {
  text-align: center;
  margin-top: 9rem;
  line-height: 30px;
  color: var(--fourth-color);
}
.benfitBlobOne {
  position: relative;
  margin: 2rem 0;
  width: 100%;
}

.benfitBlobTwo {
  position: relative;
  margin: 2rem 0;
  width: 100%;
}

@media (min-width: 880px) {
  .benfitBlobOne {
    margin: 2rem 0 5rem;
    margin-left: 15%;
    width: 70%;
  }
  .benfitBlobTwo {
    margin: 2rem 0 5rem;
    margin-left: 15%;
    width: 70%;
  }
  .affiliate-benefits-wrapper p {
    width: 70%;
    margin-top: 1rem;
    margin: 0 auto;
  }
}

@media (min-width: 1000px) {
  .benfitBlobOne {
    margin-bottom: 2rem;
  }
  .benfitBlobTwo {
    margin-bottom: 2rem;
  }
}

.benefitOneIMG {
  width: 17rem;
  position: absolute;
  top: 28%;
  margin: auto;
  left: 0;
  right: 0;
}

.benefitTwoIMG {
  width: 17rem;
  position: absolute;
  top: 28%;
  margin: auto;
  left: 0;
  right: 0;
}
@media (min-width: 540px) {
  .benefitOneIMG {
    width: 20rem;
  }
  .benefitTwoIMG {
    width: 20rem;
  }
}

@media (min-width: 1200px) {
  .affiliate-benefits-wrapper {
    margin-top: 3rem;
    padding-top: 10rem;
    width: 80%;
  }
  .benefitTwo {
    margin-top: 45rem;
  }

  .benfitsImagesoneWrapper {
    width: 50%;
    float: left;
  }
  .benfitsImagesTwoWrapper {
    width: 50%;
    float: right;
    margin-top: -15rem;
  }
  .benfitBlobOne {
    margin: 0 0 5rem;
    width: 100%;
  }
  .benfitBlobTwo {
    margin: 0 0 5rem;
    width: 100%;
    transform: translate(42px, -1rem);
  }
  .benefitOneIMG {
    width: 22rem;
    position: absolute;
    top: 30%;
    left: 9%;
    margin: 0;
    right: 0;
  }
  .benefitTwoIMG {
    width: 22rem;
    position: absolute;
    top: 0;
    left: 64%;
    margin: 0;
    right: 0;
    transform: translate(5px, -4rem);
  }
  .benfitOneContents {
    width: 40%;
    float: right;
    margin-top: -3rem;
  }
  .benefitTwoH1Content {
    padding-top: 4rem;
    width: 50%;
    position: relative;
  }
  .benefitTwoPContent {
    width: 50%;
  }
  .benefitOneH1 {
    display: none;
  }
  .benefitOneH1F {
    display: block;
  }
  .affiliate-benefits-wrapper h1 {
    width: 100%;
    text-align: left;
    margin: 2rem 0 0;
    color: #3374ea;
    font-size: 2.5rem;
    font-weight: 800;
    letter-spacing: 0;
    line-height: 50px;
  }
  .affiliate-benefits-wrapper p {
    width: 100%;
    color: var(--fourth-color);
    font-size: 1rem;
    text-align: left;
    margin: 10px 0;
    line-height: 30px;
  }
}

.affiliate-steps-wrapper {
  position: relative;
  width: 90%;
  margin: 0 auto;
}
.affiliate-steps-wrapper h1 {
  text-align: center;
  color: #3374ea;
  font-weight: 800;
}
.affiliate-steps-wrapper p {
  color: var(--fourth-color);
  font-size: 1rem;
  text-align: center;
  margin: 10px auto 0;
  line-height: 30px;
  max-width: 600px;
}

@media (min-width: 1200px) {
  .affiliate-steps-wrapper {
    margin-top: 25rem;
  }
}

.core-features_wrapper {
  width: 100%;
  margin-top: 2rem;
  text-align: center;
}
.core_feature_main_wrapper p {
  text-align: left;
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
  padding: 1rem;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.core-features_img_wrapper img {
  width: 40%;
}
.core_features_box h3 {
  text-align: left;
  margin: 1rem 0;
  color: #3374ea;
}
.core_features_box h4 {
  text-align: left;
  margin: 1rem 0;
  color: #3374ea;
}

.app-downloadsAffiliates {
  width: 100%;
  text-align: center;
}
.app-downloadsAffiliates img {
   width: 12rem;
  margin: 0.5rem 1rem;
}

@media only screen and (min-width: 768px) {
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

  .app-downloadsAffiliates {
    width: 100%;
    text-align: center;
    margin: 30px auto 0;
  }
  .app-downloadsAffiliates img {
    width: 14rem;
    display: inline-block;
  }
}
@media only screen and (min-width: 1024px) {
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

  .app-downloadsAffiliates {
    width: 80%;
    margin: 30px auto;
    text-align: center;
  }
  .app-downloadsAffiliates img {
    width: 16rem;
    display: inline-block;
    margin-right: 1rem;
  }
}

@media only screen and (min-width: 1200px) {
  .core_feature_main_wrapper {
    vertical-align: middle;
    display: inline-block;
    width: 30%;
    margin: 3rem 1rem 0;
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
    box-shadow: 0px 3px 6px #00000008;
    border-radius: 10px;
  }
  .app-downloadsAffiliates {
    width: 80%;
    text-align: center;
    margin-top: 5px;
  }
  .app-downloadsAffiliates img {
    width: 15rem;
    display: inline-block;
    margin-right: 1rem;
  }
}
</style>