<template>
  <div>
    <div v-for="video in slice.items" :key="video.video_link.size">
      <video controls width="400" preload="metadata">
        <source :src="video.video_link.url" type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoPlayer",
  props: {
    slice: Object,
  },
};
</script>
