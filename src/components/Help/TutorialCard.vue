<template>
  <ul v-if="tutsObj" class="flex flex-col gap-6">
    <li v-for="video in tutsObj" :key="video.uid">
      <prismic-link :field="video">
        <figure class="video-list flex flex-row gap-3 items-center rounded-xl">
          <div class="video-thumbnail h-20 md:h-28 w-24 rounded-xl">
            <PrismicImage
              :field="video.data.thumbnail"
              class="thumbnial-image w-[100%] rounded-xl"
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
      </prismic-link>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      tutsObj: {
        type: Object,
        required: true,
      },
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
    height: 4.6875rem;
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
</style>
