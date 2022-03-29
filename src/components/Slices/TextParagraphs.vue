<template>
  <div>
    <div v-for="paragraph in slice.items" :key="paragraph.length">
      <p
        v-html="$prismic.asHTML(paragraph.paragraphs)"
        class="article-introtext text-base mb-6 font-medium"
      ></p>
    </div>
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
  .article-introtext >>> p {
    color: var(--article-text);
  }

  .article-introtext >>> a {
    color: #3374ea;
  }
</style>
