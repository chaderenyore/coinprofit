<template>
  <div class="w-10/12 md:w-6/12 lg:w-5/12 m-auto rounded-lg p-5 shadow-lg">
    <h3 class="text-[#3374EA] mb-2">{{ errorMessage }}</h3>
    <p>
      This Means that the article you're looking for does not exist or may have
      been moved.
    </p>
  </div>
</template>

<script>
export default {
  props: ["errorMessage"],
};
</script>

<style scoped>
div {
  background-color: var(--article-container);
}

p {
  color: var(--help-article-text);
}
</style>
