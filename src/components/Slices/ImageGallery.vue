<template>
  <section>
    <ul>
      <li v-for="item in slice.items" :key="item.alt">
        <PrismicImage :field="item.image" />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "ImageGallery",
  props: {
    slice: Object,
  },
};
</script>
