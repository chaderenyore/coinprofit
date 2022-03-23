<template>
  <div class="backdrop" @click="closePlayer"></div>
  <div class="video-player">
    <video :src="src" class="video" ref="video"></video>
    <div class="player-controls">
      <span class="play-button inline-block" @click="playVideo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["src", "thumbnail"],
    emits: ["close-player"],

    methods: {
      closePlayer() {
        this.$emit("close-player");
      },

      playVideo() {
        const video = document.querySelector(".video");
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      },
    },
  };
</script>

<style scoped>
  .video-player {
    z-index: 14;
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 2000px;

    width: 95%;
  }

  @media screen and (min-width: 678px) {
    .video-player {
      top: 50%;
    }
  }

  .video {
    width: 100%;
    border-radius: 20px;
    padding: 12px;
  }

  .player-controls {
    background-color: #1c1923;
  }

  .play-button {
    background: white;
    border-radius: 50%;
    padding: 0.5rem 0.5rem;
  }

  .backdrop {
    position: fixed;
    /* display: none; */
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #525b6d;
    opacity: 96%;
    cursor: pointer;
    z-index: 12;
  }
</style>
