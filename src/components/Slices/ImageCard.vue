<template>
  <div>
    <PrismicImage :field="slice.primary.image" />
  </div>
</template>

<script>
export default {
  name: "TextParagraps",
  props: {
    slice: Object,
  },
};
</script>
