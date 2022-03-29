<template>
  <p>Hello world</p>
</template>

<script>
  export default {
    data() {
      return {
        tagResult: "",
      };
    },

    methods: {
      searchByQuery(query) {
        console.log(query);
      },

      async searchByTag(tag) {
        this.tagResult = await this.$prismic.client.getByTag(tag);
        console.log(this.tagResult);
      },
    },

    created() {
      if ("q" in this.$route.query) {
        const query = this.$route.query.q;
        this.searchByQuery(query);
      } else if ("tag" in this.$route.query) {
        const tag = this.$route.query.tag;
        this.searchByTag(tag);
      }
    },
  };
</script>

<style scoped></style>
