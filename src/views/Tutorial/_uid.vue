<template>
  <section v-if="loading" class="text-3xl pt-20 font-extrabold">
    <div class="spinner">
      <svg>
        <use href="@/assets/images/icons.svg#icon-loader"></use>
      </svg>
    </div>
  </section>
  <main v-if="video" class="pt-24 article-main">
    <article
      class="article-container p-0 rounded-3xl w-[90%] md:w-[60%] lg:w-2/4 m-auto"
    >
      <header>
        <PrismicImage
          class="rounded-3xl mb-4 w-[100%]"
          :field="video.data.thumbnail"
        />
        <section class="w-[90%] m-auto mt-2 mb-4">
          <ul class="flex flex-row gap-2 md:gap-3 justify-around">
            <li
              v-for="tag in video.tags"
              :key="tag"
              @click="searchTag(tag)"
              class="article-tag self-start text-sm text-[#3374EA] font-medium md:font-semibold rounded-full p-1.5 md:px-3 md:py-2"
            >
              #{{ tag }}
            </li>
          </ul>
        </section>
        <section class="w-[90%] m-auto">
          <p class="text-base font-bold text-green-600">Tutorials</p>
          <h1 class="text-xl md:text-2xl text-[#3374EA] font-bold">
            {{ $prismic.asText(video.data.name) }}
          </h1>
        </section>
      </header>
      <main class="w-[90%] m-auto mt-3">
        <div class="video-container-div">
          <vue-plyr>
            <video
              controls
              crossorigin
              playsinline
              :data-poster="video.data.thumbnail"
            >
              <source size="720" :src="video.data.video.url" type="video/mp4" />
            </video>
          </vue-plyr>
        </div>
      </main>
      <footer class="w-[90%] m-auto mt-3 pb-3">
        <section class="article__review rounded-lg p-[1.5rem]">
          <h1 class="text-[#3374EA] text-sm mb-3 w-4/5 m-auto md:w-2/5">
            Share This Tutorial
          </h1>
          <div class="social-button-container w-4/5 m-auto md:w-2/5">
            <twitter-button
              :url="location"
              :description="video.data.name[0].text"
              :isBlank="false"
              btnText=""
            />
            <facebook-button
              :url="location"
              :description="video.data.name[0].text"
              :isBlank="false"
              btnText=""
            />
          </div>
        </section>
      </footer>
    </article>
    <BaseCallToAction />
  </main>

  <div v-if="error" class="pt-32 md:pt-24 mb-16">
    <NotFound :errorMessage="errorMessage" />
  </div>
</template>

<script>
  import BaseCallToAction from "@/components/BaseCallToAction.vue";
  import NotFound from "@/components/Help/NotFound.vue";
  import TwitterButton from "vue-share-buttons/src/components/TwitterButton";
  import FacebookButton from "vue-share-buttons/src/components/FacebookButton";
  export default {
    components: {
      BaseCallToAction,
      NotFound,
      TwitterButton,
      FacebookButton,
    },
    data() {
      return {
        loading: true,
        video: null,
        error: false,
        errorMessage: null,
      };
    },
    computed: {
      location() {
        return document.location.href;
      },
    },
    methods: {
      async getPost() {
        try {
          this.video = await this.$prismic.client.getByUID(
            "tutorial",
            this.$route.params.uid
          );
          console.log(this.video);
        } catch (error) {
          this.loading = false;
          this.error = true;
          this.errorMessage = error.message;
        }
      },

      searchTag(tag) {
        this.$router.push({
          name: "help-search",
          query: {
            tag: tag,
          },
        });
      },
    },

    created() {
      this.getPost();
    },

    beforeUpdate() {
      this.loading = false;
    },
  };
</script>

<style scoped>
  @media (min-width: 27.5rem) {
    .article-main {
      padding-top: 8rem;
    }
  }

  @media (min-width: 820px) {
    .article-main {
      padding-top: 10rem;
    }
  }

  .article-container {
    background: var(--article-container);
    box-shadow: 0 20px 17px #1c192305;
  }

  .article__review {
    background: var(--social-button-container);
  }

  .article-tag {
    cursor: pointer;
    background: var(--article-tag);
  }

  .spinner {
    margin: 5rem auto;
    text-align: center;
  }

  .spinner svg {
    height: 6rem;
    width: 6rem;
    fill: #3374ea;
    animation: rotate 2s infinite linear;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .video-container-div {
    width: 100%;
    height: 70vh;
  }

  .share-button {
    border-radius: 1200px !important;
  }

  social-button-container {
    display: flex;
    justify-content: space-around;
  }
</style>
