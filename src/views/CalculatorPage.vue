<template>
  <div class="mainContainer">
    <div class="calcwrapper">
      <div class="calcContnet">
        <h2>THE IF CALCULATOR</h2>
        <p>
          Crypto boss, we love “I told you so. If you bought $1,000 worth of
          Solana at $2, you would have been a billionaire by now. If you bought
          this, If you bought that… Anyway, we added this as a fun feature to
          the CoinProfit App! We call it the &ldquo;If Calculator &rdquo; <br />
          <br />
          You think you would have been a BILLIONAIRE if you HODL? Use the ‘If
          Calculator…. Let&rsquo;s see how much you would have made. <br />
          The "If calculator" lets you calculate how much you would have made if
          you bought a coin with a certain amount of money on a particular day
          or price and HOLD till the time of doing the calculation.
        </p>
      </div>
      <div class="calcImgWrapper">
        <img src="@/assets/images/calculator.jpg" alt="IMAGE" class="calcimg" />
      </div>
    </div>
  </div>
  <BaseCallToAction />
</template>

<script>
import BaseCallToAction from "@/components/BaseCallToAction.vue";
export default {
  components: {
    BaseCallToAction,
  },
  methods: {},
};
</script>

<style scoped>
.mainContainer {
  width: 100%;
  max-width: 1450px;
  margin: 0 auto;
  padding-top: 1rem;
}

.calcwrapper {
  position: relative;
  margin-top: 10rem;
}

.calcContnet h2 {
  font-family: "Montserrat", sans-serif;
  width: 80%;
  font-weight: 700;
  margin: 10px auto 0;
  text-align: center;
  color: #3374ea;
  letter-spacing: 0;
}
.calcContnet p {
  width: 90%;
  margin: auto;
  text-align: center;
  margin-top: 4px;
  color: var(--fourth-color);
  line-height: 30px;
}
.calcImgWrapper {
  width: 70%;
  margin: 2rem auto 0;
}
.calcimg {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

@media (min-width: 600px) {
  .calcimg {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
}

@media only screen and (min-width: 1024px) {
  .calcwrapper {
    padding-top: 10rem;
  }
  .calcwrapper {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    margin: 0 auto;
  }

  .calcContnet {
    width: 60%;
  }
  .calcContnet h2 {
    width: 90%;
    text-align: left;
  }
  .calcContnet p {
    text-align: left;
  }
  .calcImgWrapper {
    width: 30%;
    margin: 0;
  }
  .calcimg {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
}

@media (min-width: 1200px) {
    .calcwrapper {
    width: 90%;
  }
}
</style>
