<template>
  <p>Hello world</p>
</template>

<script>
  export default {
    mounted() {
      if (this.$route.query === "q") {
        console.log("Search Result");
      } else if (this.$route.query === "tag") {
        console.log("tag results");
      }
    },
  };
</script>

<style scoped></style>
