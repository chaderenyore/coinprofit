<template>
  <div>
    <div v-for="video in slice.items" :key="video.video_link.size" class="mb-6">
      <div class="video-container-div">
        <!-- <vue-plyr>
          <video controls crossorigin playsinline>
            <source size="720" :src="video.video_link.url" type="video/mp4" />
          </video>
        </vue-plyr> -->
         <AppVideo :playerdata='playerdata' :source="video.video_link.url" />
      </div>
    </div>
  </div>
</template>

<script>
  // import VideoPlayer from '@/components/VideoPlayer.vue';

  export default {
    name: "VideoPlayer",
    // components: {
    //   VideoPlayer,
    // },
    props: {
      slice: Object,
    },
    data() {
      return {
        playerdata: {
          autoplay: false,
        }
      }
    },
    mounted() {
      console.log(this.slice)
    }
  };
</script>

<style scoped>
  .video-container-div {
    width: 100%;
    height: 70vh;
  }
</style>
