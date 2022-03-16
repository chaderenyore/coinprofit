<template>
  <div>
    <PrismicText
    v-for="paragraph in slice.items"
    :key="paragraph.length"
      class="text-lg mt-2 font-medium"
      wrapper="p"
      :field="paragraph.paragraphs"
    />
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
