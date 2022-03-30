<template>
  <p>CoinProfit Blog</p>
</template>

<script>
  export default {
    data() {
      return {
        blogpost: "",
      };
    },
    // methods: {
    //   async getData() {
    //     this.blogpost = await this.$prismic.client.getByType("articles", {
    //       pageSize: this.pageSize,
    //     });
    //   },
    // },
  };
</script>

<style scoped>
  p {
    padding-top: 8rem;
    font-size: 1.2rem;
    color: #337ea3;
  }
</style>
