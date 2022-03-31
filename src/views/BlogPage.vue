<template>
  <main v-if="blogpost">
    <h1
      class="text-xl md:text-2xl text-[#3374EA] font-bold text-center mb-[6rem]"
    >
      Our Blog Section
    </h1>
    <article-card :queryobj="blogpost.results"></article-card>
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
        console.log(this.blogpost);
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
