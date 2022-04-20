<template>
  <section class="help__section">
    <div class="help__section--div-1">
      <p class="help__section--welcome">Welcome to our Academy</p>
      <h2 class="help__section--welcome__bold">
        Bringing you all you need to know about cryptocurrency to help you
        become a profitable crypto trader and investors
      </h2>
    </div>
    <!-- <div class="help__cards">
      <div
        class="help__cards--card"
        :class="{
          'card-on': selectedComponent === 'academy-post-card',
        }"
        @click="selectedComponent = 'academy-post-card'"
      >
        <div class="help__cards__img-div">
          <img src="@/assets/images/blogging.png" alt="" />
        </div>

        <p>Articles</p>
      </div>
    </div> -->
    <div class="help__section--search">
      <div>
        <form
          action="#"
          @submit.prevent="searchArticles"
          class="help__section--search__form"
        >
          <input
            type="text"
            class="help__section--search__input"
            placeholder="Search"
            v-model.trim="searchQuery"
          />
          <button class="help__button">Find</button>
        </form>
      </div>
    </div>
    <div class="help-all-articles text-center mt-8">
      <button
        class="help__button"
        @click="selectedComponent = 'academy-post-card'"
      >
        All Articles
      </button>
    </div>
  </section>

  <section class="help__guide-section w-[85%] mt-32 md:w-[80%] m-auto">
    <KeepAlive>
      <component :is="selectedComponent" @search-tag="searchTag" />
    </KeepAlive>
  </section>

  <div class="help__section--contact" id="contact-section">
    <div class="help__section__texts">
      <h2 class="help__contact__h2 text-xl md:text-2xl">
        Still have questions?
      </h2>
      <p class="help__contact__p">
        Contact our team and we will help you as fast as we can.
      </p>
    </div>

    <div
      class="flex flex-col md:flex-wrap justify-center md:flex-row gap-6 md:gap-4"
    >
      <div class="help__contact--card p-4 rounded-xl">
        <h2 class="text-xl font-bold mb-3 text-[#3374EA]">Email Us</h2>
        <div class="flex items-center">
          <img
            class="h-4 w-5 email-icon"
            src="@/assets/images/email.svg"
            alt="Email"
          />
          <p class="help__contact--card-p ml-3 font-medium">
            support@coinprofit.app
          </p>
        </div>
      </div>
      <div class="help__contact--card p-4 rounded-xl">
        <p class="text-lg mb-3 font-semibold text-[#3374EA]">
          For Business Proposals, Please Email
        </p>
        <div class="flex items-center">
          <img
            class="h-4 w-5 email-icon"
            src="@/assets/images/email.svg"
            alt="Email"
          />
          <p class="help__contact--card-p ml-3 font-medium">
            business@coinprofit.app
          </p>
        </div>
      </div>
    </div>
  </div>
  <base-call-to-action></base-call-to-action>
</template>

<script>
  import AcademyPostCard from "../components/Academy/AcademyPostCard.vue";
  import AcademySearch from "../components/Academy/AcademySearch.vue";
  export default {
    components: {
      AcademyPostCard,
      AcademySearch,
    },

    data() {
      return {
        selectedComponent: "academy-post-card",
        searchQuery: "",
      };
    },
    methods: {
      searchArticles() {
        let regex = /^\s+$/;
        if (this.searchQuery.match(regex) || !this.searchQuery) {
          return;
        }
        this.$router.push({
          name: "academy",
          query: {
            q: this.searchQuery,
          },
        });
        this.selectedComponent = "academy-search";
        this.emitter.emit("search-fulltext", this.searchQuery);
        this.searchQuery = "";
      },
      searchTag(tag) {
        this.$router.push({
          name: "academy",
          query: {
            tag: tag,
          },
        });
        this.selectedComponent = "academy-search";
        this.emitter.emit("search-tags", tag);
      },
    },
    created() {
      if ("tag" in this.$route.query) {
        this.selectedComponent = "academy-search";
        setTimeout(() => {
          this.emitter.emit("search-tags", this.$route.query.tag);
          document.documentElement.scrollTo(0, 660);
        }, 400);
      } else if ("q" in this.$route.query) {
        this.selectedComponent = "academy-search";
        setTimeout(() => {
          this.emitter.emit("search-fulltext", this.$route.query.q);
          document.documentElement.scrollTo(0, 660);
        }, 400);
      } else {
        this.selectedComponent = "academy-search";
        setTimeout(() => {
          this.selectedComponent = "academy-post-card";
        }, 200);
      }
    },
  };
</script>

<style scoped>
  .help__section {
    padding-top: 7rem;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 5.2rem;
  }

  @media screen and (min-width: 520px) {
    .help__section {
      padding-top: 8rem;
    }
  }

  @media screen and (min-width: 768px) {
    .help__section {
      padding-top: 9rem;
    }
  }
  @media screen and (min-width: 1200px) {
    .help__section {
      padding-top: 15rem;
    }
  }

  .help__section--div-1 {
    order: -3;
  }

  .help__section--welcome {
    color: #00be13;
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  .help__section--welcome__bold {
    color: #3374ea;
    font-size: 0.8rem;
    font-weight: 600;
    text-align: center;
    line-height: 1.3;
  }

  .help__section--search {
    order: -2;
    margin-top: 1.5rem;
  }

  .help__section--search__form {
    margin-top: 1.75rem;
    background-color: var(--help-search);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.3rem;
    border-radius: 2.25rem;
    box-shadow: 0 1.5625rem 1.25rem #1c192305;
  }

  .help__section--search__input {
    background-color: transparent;
    font-family: inherit;
    font-size: inherit;
    font-size: 1.125rem;
    border: none;
    padding: 0.4375rem 1.25rem;
    width: 90%;
    color: var(--help-hero-text);
  }

  .help__section--search__input:focus {
    outline: none;
    outline-style: none;
    box-shadow: none;
    border-color: transparent;
  }

  .help__section--search__form:focus-within {
    box-shadow: 0 0.625rem 0.75rem #1c192305;
  }

  .help__section--search__input::placeholder {
    color: #b3bcce;
  }

  .help__button {
    border: none;
    cursor: pointer;
    background-image: linear-gradient(180deg, #22a1f5, #677bff);
    font-family: inherit;
    font-size: inherit;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.875rem 1.875rem;
    border-radius: 12.5rem;
    color: white;
    box-shadow: 0 10 10 #22a1f51a;
  }

  @media only screen and (min-width: 48.75rem) {
    .help__section {
      margin-bottom: 9rem;
    }

    .help__section--div-1 {
      align-self: end;
      order: unset;
    }

    .help__section--welcome {
      margin-bottom: 2rem;
    }

    .help__section--welcome__bold {
      margin-bottom: 3rem;
      max-width: 70%;
      font-size: 1rem;
      margin-left: auto;
      margin-right: auto;
    }

    .help__section--search__form {
      width: 80%;
      margin: auto;
    }

    .help__section--search {
      margin-top: 0;
      order: unset;
    }
  }

  @media only screen and (min-width: 65rem) {
    .help__section {
      margin-bottom: 12.5rem;
    }
  }

  @media only screen and (min-width: 90rem) {
    .help__section {
      grid-column-gap: 0.375rem;
    }
  }

  .help__section--contact {
    width: 85%;
    margin: 0 auto;
    margin-top: 5.625rem;
  }

  .help__section__texts {
    margin-bottom: 2.5rem;
  }

  .help__contact__h2 {
    color: #3374ea;
    text-align: center;
    margin-bottom: 1.25rem;
  }

  .help__contact__p {
    font-size: 1rem;
    line-height: 1.375rem;
    color: #525b6d;
    font-weight: 500;
    text-align: center;
  }

  .help__contact--card {
    background: var(--help-contact-box);
    box-shadow: 0 20px 17px #1c192305;
  }
  .help__contact--card-p {
    color: var(--help-contact-box-text);
  }

  .email-icon {
    background: var(--help-email-icon);
  }

  @media (min-width: 1400px) {
    .help__section {
      max-width: 1350px;
    }

    .help__section--contact {
      max-width: 1350px;
    }

    .help__guide-section {
      max-width: 1350px;
    }
  }
</style>
