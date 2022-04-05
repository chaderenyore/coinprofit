<template>
  <main class="w-[85%] md:w-[80%] m-auto">
    <h1
      class="text-xl md:text-2xl text-[#3374EA] font-bold text-center mb-[6rem]"
    >
      Blog
    </h1>
    <div v-if="blogpost">
      <article-card :queryobj="blogpost.results"></article-card>
    </div>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        blogpost: "",
      };
    },
    methods: {
      async getData() {
        this.blogpost = await this.$prismic.client.getByType("blog");
      },
    },

    mounted() {
      this.getData();
    },
  };
</script>

<style scoped>
  main {
    padding-top: 8rem;
  }
</style>
