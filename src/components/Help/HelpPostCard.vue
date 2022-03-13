<template>
  <section class="help__section--article" v-if="data">
    <h1 class="help__article--heading">
      {{ $prismic.asText(data.data.welcome_heading) }}
    </h1>
    <p class="help__article--p">
      <PrismicRichText :field="data.data.welcome_text" />
    </p>

    <div class="help__card">
      <ul>
        <li v-for="post in helpost" :key="post.uid">
          <PrismicLink :field="post">
            <article class="help__card--article">
              <PrismicText :field="post.data.title" wrapper="h4" />
              <section>
                <PrismicImage :field="post.data.thumbnail" />
                <PrismicRichText :field="post.data.text" />
              </section>
            </article>
          </PrismicLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import {
  useSinglePrismicDocument,
  useAllPrismicDocumentsByType,
} from "@prismicio/vue";

const { data } = useSinglePrismicDocument("help_welcome");
const { data: helpost } = useAllPrismicDocumentsByType("help_post");
</script>

<style scoped>
.help__section--article {
  width: 80%;
  margin: 0 auto;
  margin-top: 0.5625rem;
}

.help__article--heading {
  color: #3374ea;
  font-size: 2.25rem;
  text-align: center;
  margin-bottom: 1.25rem;
}

.help__article--p {
  color: #525b6d;
  font-size: 1.0625rem;
  text-align: center;
  font-weight: 500;
  line-height: 1.875rem;
}

.help__card--article {
  background-color: var(--light-color);
  padding: 1rem;
  border: 4px solid #3374ea;
  border-radius: 30px;
  margin: 0.8rem;
}
</style>
