<template>
  <section class="help__section">
    <div class="help__section--div-1">
      <p class="help__section--welcome">Welcome to our help center</p>
      <h2 class="help__section--welcome__bold">What can we help you with?</h2>
    </div>
    <div class="help__cards">
      <div class="help__cards--card">
        <div class="help__cards__img-div">
          <img src="../assets/images/okex-2.svg" alt="" />
        </div>

        <p>Tutorials</p>
      </div>
      <div class="help__cards--card">
        <div class="help__cards__img-div">
          <img src="../assets/images/okex-2.svg" alt="" />
        </div>

        <p>Articles</p>
      </div>
    </div>
    <div class="help__section--search">
      <p class="help__section--search-p">
       Check out our tutorial section where we show you step by step video guides on how to use the different features of the CoinProfit App. Also, we have various articles to help you get started. You can use the search bar to easily find what you are looking for.
      </p>
      <div>
        <form action="#" @submit.prevent class="help__section--search__form">
          <input
            type="text"
            class="help__section--search__input"
            placeholder="Search"
          />
          <button class="help__section--search__button">Find</button>
        </form>
      </div>
    </div>
  </section>

  <section v-if="data" class="w-4/5 m-auto mb-8">
    <h1 class="text-center font-extrabold text-3xl mb-3 text-[#3374ea]">
      {{ $prismic.asText(data.data.welcome_heading) }}
    </h1>
    <p
      class="help__article text-center text-[1.2rem] font-medium max-w-[636px] m-auto"
    >
      {{ $prismic.asText(data.data.welcome_text) }}
    </p>
  </section>
  <section class="w-[80%] m-auto">
    <help-post-card></help-post-card>
  </section>

  <div class="help__section--contact">
    <div class="help__section__texts">
      <h2 class="help__contact__h2">Still have questions?</h2>
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
          <img class="h-10" src="@/assets/images/okex-2.svg" alt="Email" />
          <p class="help__contact--card-p ml-3 font-medium">
            contact@coinprofitapp<span class="inline-block">.com</span>
          </p>
        </div>
      </div>

      <div class="help__contact--card p-4 rounded-xl">
        <h2 class="text-xl font-bold mb-3 text-[#3374EA]">Call Us</h2>
        <div class="flex items-center">
          <img class="h-10" src="@/assets/images/okex-2.svg" alt="Email" />
          <p class="help__contact--card-p ml-3 font-medium">
            +380 66 033 71 79
          </p>
        </div>
      </div>

      <div class="help__contact--card p-4 rounded-xl">
        <h2 class="text-xl font-bold mb-3 text-[#3374EA]">Find Us</h2>
        <div class="flex items-center">
          <img class="h-10" src="@/assets/images/okex-2.svg" alt="Email" />
          <p class="help__contact--card-p ml-3 font-medium">
            Ukraine, Sumy, st. Kharkivska 121
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useSinglePrismicDocument } from "@prismicio/vue";
import HelpPostCard from "../components/Help/HelpPostCard.vue";
export default {
  components: {
    HelpPostCard,
  },

  setup() {
    const { data } = useSinglePrismicDocument("help_welcome");

    return {
      data,
    };
  },
};
</script>

<style scoped>
.help__section {
  padding-top: 7rem;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 3.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-size: 1.5625rem;
  font-weight: 700;
  text-align: center;
}

.help__cards {
  margin-top: 1.5625rem;
  display: flex;
}

.help__cards--card {
  cursor: pointer;
  background: var(--help-hero-card);
  border-radius: 0.875rem;
  height: 10.25rem;
  width: 9.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1.25rem 1.0625rem #1c192305;
  transition: all;
}

.help__cards--card:hover {
  background-image: linear-gradient(180deg, #22a1f5, #677bff);
}

.help__cards--card:hover p {
  color: #fff;
}

.help__cards--card:not(:first-child) {
  margin-left: 1.25rem;
}

.help__cards__img-div {
  height: 40%;
  margin-bottom: 1.375rem;
}

.help__cards__img-div img {
  height: 100%;
}

.help__cards--card p {
  font-size: 1rem;
  color: #3374ea;
  font-weight: bold;
}

.help__section--search {
  margin-top: 1.5rem;
}

.help__section--search-p {
  font-size: 1.0625rem;
  line-height: 1.75rem;
  color: var(--help-hero-text);
  font-weight: 500;
  width: 92%;
  margin: 0 auto;
  text-align: center;
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

.help__section--search__button {
  border: none;
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
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin-bottom: 9rem;
  }

  .help__section--div-1 {
    align-self: end;
  }

  .help__section--welcome {
    margin-bottom: 2rem;
    text-align: left;
  }

  .help__cards {
    grid-row: 1 / span 2;
    margin-top: 0;
    grid-column-start: 2;
    justify-self: center;
  }

  .help__section--welcome__bold {
    text-align: left;
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  .help__section--search__form {
    width: 80%;
  }

  .help__section--search {
    margin-top: 0;
  }

  .help__section--search-p {
    margin: 0;
    text-align: left;
    line-height: 1.75rem;
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
  width: 80%;
  margin: 0 auto;
  margin-top: 5.625rem;
}

.help__section__texts {
  margin-bottom: 2.5rem;
}

.help__contact__h2 {
  font-size: 2rem;
  font-weight: 800;
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
.help__article {
  color: var(--help-article-text);
}
</style>
