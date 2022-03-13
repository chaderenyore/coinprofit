<template>
  <section>
    <div class="final-download" id="download-app">
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
      </div>
    </div>
  </section>
</template>

<style scoped>
.final-download {
  margin: 5rem auto 40px;
  width: 90%;
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

@media only screen and (min-width: 1200px) {
  .final-download {
    margin: 100px auto 40px;
    width: 80%;
    height: 480px;
    border-radius: 25px;
    background: transparent linear-gradient(180deg, #22a1f5 0%, #677bff 100%) 0%
      0% no-repeat padding-box;
    box-shadow: 0px 30px 20px #22a1f51a;
    padding: 15px 0;
  }
  .final-download h1 {
    width: 668px;
    margin: 0 auto;
    color: #fff;
    text-align: center;
    font-size: 43px;
    font-weight: 800;
    margin-top: 100px;
  }

  .final-download-wrapper {
    width: 80%;
    margin-top: 60px;
    margin-left: 220px;
  }
  .final-download-wrapper img {
    width: 30%;
    display: inline-block;
  }
}
</style>
