<template>
  <div class="backdrop" @click="closePlayer"></div>
  <div class="video-player">
    <div
      @click="closePlayer"
      class="close-icon bg-[#B3BCCE] absolute top-0 right-1 p-2 rounded-full"
    ></div>
    <video
      :src="src"
      class="video"
      @click="playVideo"
      @timeupdate="currentTime"
      ref="video"
    ></video>
    <div class="player-controls">
      <div class="time-stamp flex justify-between text-[#F2F8FF]">
        <span class="current">0:00</span>
        <span class="duration">0:00</span>
      </div>
      <div class="control-container flex justify-between">
        <div class="play-button" @click="playVideo">
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
        </div>
        <p class="text-[#3374EA] text-base font-semibold">{{ videoName }}</p>
        <p>FullScreen</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["src", "thumbnail", "videoName"],
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

      currentTime() {
        const currentTimeElement = document.querySelector(".current");
        const durationTimeElement = document.querySelector(".duration");

        const video = document.querySelector(".video");
        let currentMinutes = Math.floor(video.currentTime / 60);
        let currentSeconds = Math.floor(
          video.currentTime - currentMinutes * 60
        );
        let durationMintues = Math.floor(video.duration / 60);
        let durationSeconds = Math.floor(video.duration - durationMintues * 60);

        currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds}`;
        durationTimeElement.innerHTML = `${durationMintues}:${durationSeconds}`;
      },
    },

    mounted() {
      this.playVideo();
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
    background-color: #1c1923;
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
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    gap: 0.3rem;
  }

  .play-button {
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
