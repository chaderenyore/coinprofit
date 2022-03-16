<template>
  <div>
    <PrismicRichText
      class="font-bold text-2xl"
      :field="slice.primary.intro_header"
      wrapper="h1"
    />

    <PrismicRichText
      class="font-medium text-emerald-700 text-sm"
      wrapper="p"
      :field="slice.primary.intro_text"
    />
  </div>
</template>

<script>
export default {
  name: "IntroductionText",
  props: {
    slice: Object,
  },
};
</script>
