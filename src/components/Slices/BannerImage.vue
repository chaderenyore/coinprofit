<template>
  <figure>
    <PrismicImage :field="slice.primary.hero_image" />
  </figure>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue";
export default {
  props: getSliceComponentProps(),
};
</script>
