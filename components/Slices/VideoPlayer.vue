<template>
  <div>
    <div v-for="video in slice.items" :key="video.video_link.size" class="mb-6">
      <div class="video-container-div">
        <vue-plyr>
          <video controls crossorigin playsinline>
            <source size="720" :src="video.video_link.url" type="video/mp4" />
          </video>
        </vue-plyr>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "VideoPlayer",
    props: {
      slice: Object,
    },
  };
</script>

<style scoped>
  @import "vue-plyr/dist/vue-plyr.css";

  .video-container-div {
    width: 100%;
    height: 70vh;
  }
</style>
