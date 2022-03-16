<template>
  <section>
    <PrismicImage
      v-for="image in slice.items"
      :key="image.alt"
      :field="image"
    />
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
