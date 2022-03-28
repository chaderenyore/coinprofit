<template>
  <section class="mb-8">
    <h1
      class="text-center font-extrabold text-2xl md:text-3xl mb-3 text-[#3374ea]"
    >
      Our Helpful Tutorial Collection
    </h1>
    <p
      class="help__article text-center text-lg md:text-[1.2rem] font-medium max-w-[636px] m-auto"
    >
      You will definitely find everything that you have questions about answered
      in one of our tutorials.
    </p>
  </section>
  <ul v-if="helpvid" class="flex flex-col gap-6">
    <li v-for="video in helpvid.results" :key="video.uid">
      <figure
        @click="
          playVideo(
            video.data.video.url,
            video.data.thumbnail.url,
            video.data.name[0].text
          )
        "
        class="video-list flex flex-row gap-3 items-center rounded-xl"
      >
        <div class="video-thumbnail h-20 md:h-28 w-24 rounded-xl">
          <PrismicImage
            :field="video.data.thumbnail"
            class="thumbnial-image w-[100%] h-[100%] rounded-xl"
          />
          <div class="play-video">
            <img src="@/assets/images/play-video.svg" alt="" />
          </div>
        </div>
        <figcaption class="ml-3 flex flex-col">
          <h1 class="text-sm md:text-xl font-bold text-[#3374EA] mb-3">
            {{ $prismic.asText(video.data.name) }}
          </h1>
          <p class="text-base md:text-lg text-[#8993a7]">
            {{ $prismic.asText(video.data.duration) }}
          </p>
        </figcaption>
      </figure>
    </li>
  </ul>
  <div class="pagination text-center mt-14">
    <button class="pagination-button" @click="loadMore" v-if="showLoadMore">
      <p class="text-[#3374ea] text-base font-semibold">Load More</p>
    </button>
  </div>
  <teleport to="body">
    <video-player
      :src="videoSrc"
      :thumbnail="videoThumbnail"
      :videoName="videoName"
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
        helpvid: "",
        videoIsPlaying: false,
        videoSrc: null,
        videoThumbnail: null,
        videoName: null,
        pageSize: 8,
        showLoadMore: true,
      };
    },

    methods: {
      async getData() {
        this.helpvid = await this.$prismic.client.getByType("tutorial", {
          pageSize: this.pageSize,
        });
      },

      loadMore() {
        this.pageSize *= 2;
        this.getData();
      },

      playVideo(src, thumbnail, name) {
        this.videoIsPlaying = true;
        this.videoSrc = src;
        this.videoThumbnail = thumbnail;
        this.videoName = name;
      },

      closePlayer() {
        this.videoIsPlaying = false;
        this.videoSrc = null;
      },
    },

    watch: {
      "helpvid.next_page"(newValue) {
        if (!newValue) {
          this.showLoadMore = !this.showLoadMore;
        }
      },
    },

    mounted() {
      this.getData();
    },
  };
</script>

<style scoped>
  .help__article {
    color: var(--help-article-text);
  }

  .video-list {
    background: var(--nav-light);
    box-shadow: 0 1.25rem 17px #1c192305;
    cursor: pointer;
  }

  .video-thumbnail {
    position: relative;
    display: inline-block;
    background: linear-gradient(
      180deg,
      rgba(117, 231, 255, 1),
      rgba(103, 123, 255, 1)
    );
    opacity: 0.8;
    min-width: 95px;
    height: 100%;
  }

  .play-video {
    position: absolute;
    top: 50%;
    padding: 4%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 11px 11px 8px 16px;
    border-radius: 50%;
  }

  .play-video img {
    height: 16px;
  }

  .thumbnial-image {
    position: relative;
    z-index: -1;
    display: block;
    opacity: 0.2;
  }

  .pagination-button {
    cursor: pointer;
    border: none;
    padding: 0.8rem 2rem;
    margin: 0;
    text-decoration: none;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 1.25rem 1.0625rem #1c192305;
    border-radius: 1.875rem;
    transition: all 0.2s;
  }

  .pagination-button:hover {
    box-shadow: 0px 1rem 1.0625rem #1c192305;
  }

  .pagination-button:active {
    box-shadow: none;
  }
</style>
