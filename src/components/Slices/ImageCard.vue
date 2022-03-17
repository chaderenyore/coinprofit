<template>
  <div>
    <PrismicImage
      class="w-[100%] rounded-2xl mb-6"
      :field="slice.primary.image"
    />
  </div>
</template>

<script>
export default {
  name: "ImageCard",
  props: {
    slice: Object,
  },
};
</script>
