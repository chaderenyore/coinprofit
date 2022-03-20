<template>
  <div>
    <PrismicText
      v-for="paragraph in slice.items"
      :key="paragraph.length"
      class="article-introtext text-base mb-6 font-medium"
      wrapper="p"
      :field="paragraph.paragraphs"
    />
  </div>
</template>

<script>
export default {
  name: "TextParagraps",
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
