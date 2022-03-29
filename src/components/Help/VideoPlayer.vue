<template>
  <div class="backdrop"></div>
  <div class="video-container-div">
    <vue-plyr>
      <video controls crossorigin playsinline :data-poster="thumbnail">
        <source size="720" :src="src" type="video/mp4" />
      </video>
    </vue-plyr>
  </div>
  <div class="close-player" @click="this.$emit('close-player')">
    <img src="@/assets/images/close-player.svg" alt="Close player" />
  </div>
</template>

<script>
  export default {
    props: ["src", "thumbnail", "videoName"],
    emits: ["close-player"],
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
    background-color: rgb(82, 91, 109);
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

  .close-player {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.7rem;
    cursor: pointer;
    z-index: 16;
    top: 2%;
    right: 3%;
    background: #d8dce4;
    border-radius: 400px;
  }

  @media screen and (min-width: 768px) {
    .close-player {
      top: 6%;
      right: 6%;
    }
  }

  @media screen and (min-width: 1024px) {
    .close-player {
      top: 2%;
      right: 11%;
    }
  }

  @media screen and (min-width: 1440px) {
    .close-player {
      top: 1%;
      right: 11%;
    }
  }
</style>
