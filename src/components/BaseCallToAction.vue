<template>
  <section style="position:relative">
    
    <div class="final-download" id="download-app">

      <img src="@/assets/images/listtle-Icons/iconsheidl.svg" class="svg-shield">
        <!-- <img src="@/assets/images/listtle-Icons/iconuntop.svg" class="svg-untop"> -->
        <img src="@/assets/images/listtle-Icons/1.svg" class="svg-1">
        <img src="@/assets/images/listtle-Icons/4.svg" class="svg-4">
        <img src="@/assets/images/listtle-Icons/6.svg" class="svg-6">
       <img src="@/assets/images/listtle-Icons/btc-lite.svg" class="btc-lite">
        <img src="@/assets/images/listtle-Icons/7.svg" class="svg-7">
        <img src="@/assets/images/listtle-Icons/moneygold.svg" class="moneygold">
        <img src="@/assets/images/listtle-Icons/litegold.svg" class="litegold">
      <!-- <div class="littleIconWrapper">
        
      </div> -->
      <h1>Download The Coinprofit App Now To Get Started!</h1>
      <div class="final-download-wrapper">
        <a href="#" target="_blank" rel="noopener noreferrer"
          ><img
            src="../assets/images/goplay.svg"
            alt=""
            srcset=""
            class="final-download-img"
        /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"
          ><img
            src="../assets/images/appstore.svg"
            alt=""
            srcset=""
            class="final-download-img"
        /></a>
        <p class="comingSoon font-bold md:font-semibold text-2xl" >coming soon...</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.svg-shield {
    width: 2rem;
    position: absolute;
    top: 0;
  }
  .svg-untop {
    position: absolute;
    width: 2rem;
    left: 88%;
    top: 35%;
  }
  .svg-1 {
    position: absolute;
    width: 4rem;
    left: 40%;
    top: 0;
  }
  .svg-4 {
    display: none;
  }
  .svg-7 {
    position: absolute;
    width: 3rem;
    left: 80%;
    top: 0;
  }
  .svg-6 {
    position: absolute;
    width: 4rem;
    bottom: 0;
    left: 10px;
  }
    .btc-lite {
    display: none;
  }

  .moneygold {
    position: absolute;
    width: 4rem;
    left: 75%;
    top: 93%;
  }
  .litegold {
    position: absolute;
    width: 3rem;
    left: 41%;
    bottom: 0;
  }
.final-download {
  margin: 5rem auto 40px;
  width: 90%;
  max-width: 1450px;
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
  font-size: 32px;
  font-weight: bold;
  margin-top: 50px;
}
.final-download-wrapper {
  width: 80%;
  margin: 30px auto;
}
.final-download-wrapper img {
  /* display: block; */
  width: 100%;
}
.comingSoon  {
  margin-top: 1rem;
  text-align: center;
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
    text-align: center;
    margin: 30px auto 0;
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
    text-align: center;
  }
  .final-download-wrapper img {
    width: 40%;
    display: inline-block;
    margin-right: 1rem;
  }
}
@media only screen and (min-width: 1200px) {
  .svg-shield {
    width: 2.5rem;
    position: absolute;
    top: -5%;
    left: 20%;
  }
  .svg-untop {
    display: none;
  }
  .svg-1 {
    position: absolute;
    width: 10rem;
    left: 80%;
    top: 50%;
  }
  .svg-6 {
    position: absolute;
    width: 4rem;
    left: 4%;
    top: 40%;
  }
   .svg-4 {
     display: block;
    position: absolute;
    width: 4rem;
    left: -1%;
    bottom: 0;
  }
  .btc-svg {
    display: none;
  }
  .svg-7 {
    position: absolute;
    width: 4rem;
    left: 95%;
    top: -1rem;
  }
  .moneygold {
    position: absolute;
    width: 6rem;
    left: 47%;
    top: 92%;
  }
  .litegold {
    position: absolute;
    width: 3rem;
    left:  97%;
    top: 90%;
  }
  .final-download {
    margin: 100px auto 40px;
    width: 80%;
    height: 480px;
    border-radius: 25px;
    background: transparent linear-gradient(180deg, #22a1f5 0%, #677bff 100%) 0%
      0% no-repeat padding-box;
    box-shadow: 0px 30px 20px #22a1f51a;
    padding: 15px 0;
    position: relative;
  }
  .final-download h1 {
    width: 668px;
    margin: 0 auto;
    color: #fff;
    text-align: center;
    font-size: 43px;
    font-weight: 800;
    margin-top: 4rem;
  }
  .final-download-wrapper {
    width: 80%;
    text-align: center;
    margin-top: 60px;
  }
  .final-download-wrapper img {
    width: 23%;
    display: inline-block;
    margin-right: 1rem;
  }
}
</style>