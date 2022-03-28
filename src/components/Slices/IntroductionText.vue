<template>
  <div class="mb-6">
    <h1
      class="font-semibold md:font-bold text-xl md:text-2xl text-[#3374EA] mb-4"
    >
      {{ $prismic.asText(slice.primary.intro_header) }}
    </h1>

    <p
      class="article-introtext font-medium text-base"
      v-html="$prismic.asHTML(slice.primary.intro_text)"
    ></p>
  </div>
</template>

<script>
  export default {
    name: "IntroductionText",
    props: {
      slice: Object,
    },
  };
</script>

<style scoped>
  .article-introtext >>> p {
    color: var(--article-text);
  }
</style>
