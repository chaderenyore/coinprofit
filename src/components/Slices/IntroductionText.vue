<template>
  <div class="mb-6">
    <PrismicRichText
      class="font-bold text-[#3374EA] mb-4"
      :field="slice.primary.intro_header"
      wrapper="h1"
    />

    <p class="article-introtext font-medium text-base">
      {{ $prismic.asText(slice.primary.intro_text) }}
    </p>
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
.article-introtext {
  color: var(--article-text);
}
</style>
