<template>
  <div>
    <PrismicText
      class="text-lg font-medium"
      wrapper="p"
      :field="slice.primary.paragraph_texts"
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
