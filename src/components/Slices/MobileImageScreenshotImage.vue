<template>
  <div class="text-center">
    <PrismicImage
      class="w-[75%] xl:w-[50%] rounded-2xl mb-6"
      :field="slice.primary.screenshot_image"
    />
  </div>
</template>

<script>
  export default {
    name: "MobileImageScreenshotImage",
    props: {
      slice: Object,
    },
  };
</script>

<style scoped></style>
