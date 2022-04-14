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
  <ul v-if="helpvid" class="flex flex-col gap-6 md:flex-row justify-between">
    <li v-for="video in helpvid.results" :key="video.uid">
      <prismic-link :field="video">
        <figure
          class="video-list flex flex-row gap-3 items-center md:flex-col md:max-w-[230px] md:min-h-[280px] md:max-h-[350px] rounded-xl"
        >
          <div
            class="video-thumbnail h-20 md:h-28 w-24 md:w-[100%] rounded-xl md:rounded-none md:rounded-t-xl"
          >
            <PrismicImage
              :field="video.data.thumbnail"
              class="thumbnial-image w-[100%] rounded-xl"
            />
            <div class="play-video">
              <img src="@/assets/images/play-video.svg" alt="" />
            </div>
          </div>
          <figcaption class="ml-3 flex flex-col md:w-4/5 md:m-auto md:pb-2">
            <h1 class="text-sm font-bold text-[#3374EA] mb-3">
              {{ $prismic.asText(video.data.name) }}
            </h1>
            <p class="text-base text-[#8993a7]">
              {{ $prismic.asText(video.data.duration) }}
            </p>
          </figcaption>
        </figure>
      </prismic-link>
    </li>
  </ul>
  <div class="pagination text-center mt-14">
    <button class="pagination-button" @click="loadMore" v-if="showLoadMore">
      <p class="text-[#3374ea] text-base font-semibold">Load More</p>
    </button>
  </div>
</template>

<script>
  export default {
    inheritAttrs: false,
    data() {
      return {
        helpvid: "",
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
    background: var(--tutorial-card);
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

  @media screen and (min-width: 768px) {
    .thumbnial-image {
      height: 100%;
    }

    .play-video img {
      height: unset;
    }
  }

  .pagination-button {
    cursor: pointer;
    border: none;
    padding: 0.8rem 2rem;
    margin: 0;
    text-decoration: none;
    background: var(--load-more-button) 0% 0% no-repeat padding-box;
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
