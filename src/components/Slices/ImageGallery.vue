<template>
  <section>
    <ul class="grid grid-cols-2 gap-2 md:gap-4 lg:gap-5 grid-rows-2 mb-6">
      <li v-for="item in slice.items" :key="item.image.alt">
        <PrismicImage :field="item.image" class="w-[100%] rounded-lg" />
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
