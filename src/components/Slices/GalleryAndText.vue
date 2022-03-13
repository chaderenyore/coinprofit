<template>
  <section>
    <ul>
      <li v-for="item in slice.items" :key="item.alt">
        <PrismicImage :field="item.gal_img_1" />
      </li>
    </ul>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue";
export default {
  props: getSliceComponentProps(),
};
</script>
