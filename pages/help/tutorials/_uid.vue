<template>
    <main v-if="video" class="pt-24 article-main">
   <!--  <teleport to="head">
      <template>
        <meta property="og:image" :content="this.video.data.thumbnail.url" />
        <meta name="description" :content="this.video.data.name" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" :content="this.video.data.name" />
        <meta name="og:description" :content="this.video.data.name" />
        <meta property="og:title" :content="this.video.data.name" />
        <meta
          name="keywords"
          content="bitcoin, btc education, bitcoin trading, crypto tracking, track crypto assets, tracking, Coinprofit Help Tutorials"
        />
      </template>
    </teleport> -->
    <article
      class="article-container p-0 rounded-3xl w-[90%] md:w-[60%] lg:w-2/4 m-auto"
    >
      <header>
        <PrismicImage
          class="rounded-3xl mb-4 w-[100%]"
          :field="this.video.data.thumbnail"
        />
        <section class="w-[90%] m-auto mt-2 mb-4">
          <ul class="flex flex-row gap-2 md:gap-3 justify-around">
            <li
              v-for="tag in this.video.tags"
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
            {{ $prismic.asText(this.video.data.name) }}
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
              :data-poster="this.video.data.thumbnail"
            >
              <source size="720" :src="this.video.data.video.url" type="video/mp4" />
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
              <ShareNetwork
                network="twitter"
                :url="'coinprofit.app' + this.video.url"
                :title="this.video.data.name[0].text"
                :description="this.video.data.name[0].text + 'Coinprofit Help'"
              >
                <svg
                  height="24px"
                  style="
                    fill-rule: evenodd;
                    clip-rule: evenodd;
                    stroke-linejoin: round;
                    stroke-miterlimit: 2;
                  "
                  version="1.1"
                  viewBox="0 0 512 512"
                  width="24px"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:serif="http://www.serif.com/"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <g>
                    <circle
                      cx="256"
                      cy="256"
                      id="Dark_Blue"
                      r="256"
                      style="fill: #1da1f2"
                    />
                    <path
                      d="M209.152,391.04c113.536,0 175.616,-94.08 175.616,-175.616c0,-2.688 0,-5.376 -0.128,-7.936c12.032,-8.704 22.528,-19.584 30.848,-32c-11.008,4.864 -22.912,8.192 -35.456,9.728c12.8,-7.68 22.528,-19.712 27.136,-34.176c-11.904,7.04 -25.088,12.16 -39.168,14.976c-11.264,-12.032 -27.264,-19.456 -45.056,-19.456c-34.048,0 -61.696,27.648 -61.696,61.696c0,4.864 0.512,9.6 1.664,14.08c-51.328,-2.56 -96.768,-27.136 -127.232,-64.512c-5.248,9.088 -8.32,19.712 -8.32,30.976c0,21.376 10.88,40.32 27.52,51.328c-10.112,-0.256 -19.584,-3.072 -27.904,-7.68l0,0.768c0,29.952 21.248,54.784 49.536,60.544c-5.12,1.408 -10.624,2.176 -16.256,2.176c-3.968,0 -7.808,-0.384 -11.648,-1.152c7.808,24.576 30.592,42.368 57.6,42.88c-21.12,16.512 -47.744,26.368 -76.672,26.368c-4.992,0 -9.856,-0.256 -14.72,-0.896c27.008,17.664 59.52,27.904 94.336,27.904"
                      id="Logo__x2014__FIXED"
                      style="fill: #fff; fill-rule: nonzero"
                    />
                  </g>
                </svg>
              </ShareNetwork>

              <ShareNetwork
                network="facebook"
                :url="'coinprofit.app' + this.video.url"
                :title="this.video.data.name[0].text"
                :description="this.video.data.name[0].text + 'Coinprofit Help'"
                :quote="this.video.data.name[0].text"
              >
                <svg
                  height="24px"
                  style="
                    fill-rule: evenodd;
                    clip-rule: evenodd;
                    stroke-linejoin: round;
                    stroke-miterlimit: 2;
                  "
                  version="1.1"
                  viewBox="0 0 512 512"
                  width="24px"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:serif="http://www.serif.com/"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <g>
                    <path
                      d="M512,256c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z"
                      style="fill: #1877f2; fill-rule: nonzero"
                    />
                    <path
                      d="M355.65,330l11.35,-74l-71,0l0,-48.022c0,-20.245 9.917,-39.978 41.719,-39.978l32.281,0l0,-63c0,0 -29.297,-5 -57.305,-5c-58.476,0 -96.695,35.44 -96.695,99.6l0,56.4l-65,0l0,74l65,0l0,178.89c13.033,2.045 26.392,3.11 40,3.11c13.608,0 26.966,-1.065 40,-3.11l0,-178.89l59.65,0Z"
                      style="fill: #fff; fill-rule: nonzero"
                    />
                  </g>
                </svg>
              </ShareNetwork>
            </div>
        </section>
      </footer>
    </article>
  </main>


</template>

<script>
  export default {
    data() {
      return {
        loading: true,
        video: null,
        error: false,
        errorMessage: null,
        tutorialTitle: null,
      };
    },

    async asyncData({ $prismic, params, error }) {
    const video = await $prismic.api.getByUID("tutorial", params.uid);

    if (video) {
      return { video };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  },

    
    methods: {
      searchTag(tag) {
        this.$router.push({
          name: "help",
          query: {
            tag: tag,
          },
        });
      },
    },

    head() {
    return {
      title: this.video.data.name[0].text,
      meta: [
        {
          hid: "desc",
          name: "description",
          content: this.video.data.description[0].text,
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "bitcoin,crypto tracking, track crypto assets, coinprofit help, eth, tracking, portfolio tracking",
        },
        {
          property: "og:title",
          content: this.video.data.name[0].text,
        },
        {
          property: "og:description",
          content: this.video.data.description[0].text,
        },
        {
          property: "og:type",
          content: "article",
        },
        {
          property: "og:url",
          content: "coinprofit.app" + this.video.url,
        },
        {
          property: "og:image",
          content: this.video.data.thumbnail.url,
        },
        
        {
          name: "twitter:title",
          content: this.video.data.name[0].text,
        },
        
        {
          name: "twitter:description",
          content: this.video.data.description[0].text,
        },
        {
          name: "twitter:image",
          content: this.video.data.thumbnail.url,
        },
      ],
    };
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

   .video-container-div {
    width: 100%;
    height: 70vh;
  }

  social-button-container {
    display: flex;
    justify-content: space-around;
  }
</style>