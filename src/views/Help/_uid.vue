<template>
  <main v-if="post">
    <header>
      <h1>
        {{ $prismic.asText(post.data.title) }}
      </h1>
      <prismic-rich-text :field="post.data.text"></prismic-rich-text>
    </header>
    <SliceZone :slices="post.data.body" :components="components" />
  </main>
</template>

<script setup>
import { useRoute } from "vue-router";
import {
  usePrismicDocumentByUID,
  defineSliceZoneComponents,
  SliceZone,
} from "@prismicio/vue";
import BannerImage from "../../components/Slices/BannerImage.vue";
import GalleryAndText from "../../components/Slices/GalleryAndText.vue";

const route = useRoute();

const { data: post } = usePrismicDocumentByUID("help_post", route.params.uid);
const components = defineSliceZoneComponents({
  banner_image: BannerImage,
  gallery_and_text: GalleryAndText,
});
</script>

<style scoped>
h1 {
  font-weight: bold;
  color: burlywood;
}
</style>
