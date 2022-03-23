<template>
  <ul v-if="helpvid" class="flex flex-col gap-6">
    <li v-for="video in helpvid.results" :key="video.uid">
      <figure
        @click="playVideo(video.data.video.url, video.data.thumbnail.url)"
        class="video-list flex flex-row gap-3 items-center rounded-xl"
      >
        <div class="video-thumbnail h-20 md:h-28 rounded-xl">
          <PrismicImage
            :field="video.data.thumbnail"
            class="w-[100%] h-[100%] rounded-xl"
          />
        </div>
        <figcaption class="ml-3 flex flex-col">
          <h1 class="text-base md:text-xl font-bold text-[#3374EA] mb-3">
            {{ $prismic.asText(video.data.name) }}
          </h1>
          <p class="text-base md:text-lg text-[#8993a7]">
            {{ $prismic.asText(video.data.duration) }}
          </p>
        </figcaption>
      </figure>
    </li>
  </ul>
  <teleport to="body">
    <video-player
      :src="videoSrc"
      :thumbnail="videoThumbnail"
      v-if="videoIsPlaying"
      @close-player="closePlayer"
    ></video-player>
  </teleport>
</template>

<script>
  import VideoPlayer from "./VideoPlayer.vue";
  export default {
    components: {
      VideoPlayer,
    },

    data() {
      return {
        helpvid: null,
        videoIsPlaying: false,
        videoSrc: null,
        videoThumbnail: null,
      };
    },
    methods: {
      async getData() {
        this.helpvid = await this.$prismic.client.getByType("tutorial");
        // console.log(this.helpvid);
      },

      playVideo(src, thumbnail) {
        this.videoIsPlaying = true;
        this.videoSrc = src;
        this.videoThumbnail = thumbnail;
      },

      closePlayer() {
        this.videoIsPlaying = false;
        this.videoSrc = null;
      },
    },
    mounted() {
      this.getData();
    },
  };
</script>

<style scoped>
  .video-list {
    background: var(--nav-light);
    box-shadow: 0 1.25rem 17px #1c192305;
    cursor: pointer;
  }

  .video-thumbnail {
    display: inline-block;
    background: linear-gradient(
      180deg,
      rgba(117, 231, 255, 1),
      rgba(103, 123, 255, 1)
    );
    opacity: 0.8;
  }

  .video-thumbnail img {
    position: relative;
    z-index: -1;
    display: block;
    opacity: 0.2;
  }
</style>
