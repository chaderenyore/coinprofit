<template>
  <ul v-if="helpvid" class="flex flex-col gap-6">
    <li v-for="video in helpvid.results" :key="video.uid">
      <figure class="video-list flex flex-row gap-3 items-center rounded-xl">
        <div class="video-thumbnail h-28 w-32 rounded-xl">
          <PrismicImage
            :field="video.data.thumbnail"
            class="w-[100%] h-[100%] rounded-xl"
          />
        </div>
        <figcaption class="ml-3 flex flex-col">
          <h1 class="text-2xl font-bold text-[#3374EA] mb-3">
            {{ $prismic.asText(video.data.name) }}
          </h1>
          <p class="text-xl text-[#8993a7]">
            {{ $prismic.asText(video.data.duration) }}
          </p>
        </figcaption>
      </figure>
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        helpvid: null,
      };
    },
    methods: {
      async getData() {
        this.helpvid = await this.$prismic.client.getByType("tutorial");
        console.log(this.helpvid);
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
