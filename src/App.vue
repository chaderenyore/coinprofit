<template>
  <nav>
    <TheHeader></TheHeader>
  </nav>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <TheFooter></TheFooter>
  </footer>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: {
    TheHeader: TheHeader,
    TheFooter: TheFooter,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
</style>
