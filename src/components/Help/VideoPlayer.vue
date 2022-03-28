<template>
  <div class="backdrop"></div>
  <div class="video-container-div">
    <vue-plyr>
      <video controls crossorigin playsinline :data-poster="thumbnail">
        <source size="720" :src="src" type="video/mp4" />
      </video>
    </vue-plyr>
  </div>
</template>

<script>
  export default {
    props: ["src", "thumbnail", "videoName"],
    // emits: ["close-player"]
    mounted() {
      console.log("mounted");
    },
    updated() {
      console.log("Updated");
    },
  };
</script>

<style scoped>
  .backdrop {
    position: fixed;
    z-index: 11;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(165, 165, 165, 0.9);
  }
  .video-container-div {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 89%;
    height: 80vh;
    z-index: 16;
  }

  @media screen and (min-width: 425px) {
    .video-container-div {
      top: 53%;
      width: 74%;
      height: 87vh;
    }
  }

  @media screen and (min-width: 1024px) {
    .video-container-div {
      top: 50%;
      width: 65%;
      height: 95vh;
    }
  }
</style>
