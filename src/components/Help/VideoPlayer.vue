<template>
  <div class="backdrop"></div>

  <div class="video-player">
    <div @click="closePlayer" class="close-icon">
      <img src="@/assets/images/close-player.svg" alt="Close" />
    </div>
    <video
      :src="src"
      class="video"
      @timeupdate="
        currentTime();
        seekVideo();
      "
      @ended="listenTOVideoEnded"
      ref="video"
    ></video>
    <div class="player-controls">
      <div class="player-controls-wrapper">
        <div class="time-stamp flex justify-between text-[#F2F8FF]">
          <span class="current">0:00</span>
          <span class="duration">0:00</span>
        </div>
        <div class="video-progress">
          <input
            type="range"
            class="video-progress-filled"
            @input="changeProgressBar"
            min="0"
            value="0"
            @click="updateProgressAndVideo"
          />
          <div class="video-progress-bar"></div>
        </div>
        <div class="control-container flex justify-between">
          <div class="video-control-button cursor-pointer" @click="playVideo">
            <img
              src="@/assets/images/play-video.svg"
              v-if="videoIsPlaying === false"
              alt="Play"
            />
            <img
              src="@/assets/images/pause-video.svg"
              class="video-control-button-pause"
              v-else
              alt="Pause"
            />
          </div>
          <p class="text-[#fff] text-base font-semibold">
            {{ videoName }}
          </p>
          <div
            @click="enterFullScreen"
            class="fullscreen cursor-pointer text-white"
          >
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
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["src", "thumbnail", "videoName"],
    emits: ["close-player"],

    data() {
      return {
        videoIsPlaying: true,
        video: document.querySelector(".video"),
      };
    },

    methods: {
      closePlayer() {
        this.$emit("close-player");
      },

      playVideo() {
        const video = document.querySelector(".video");
        if (video.paused) {
          video.play();
          this.videoIsPlaying = true;
        } else {
          video.pause();
          this.videoIsPlaying = false;
        }
      },

      currentTime() {
        const currentTimeElement = document.querySelector(".current");
        const durationTimeElement = document.querySelector(".duration");

        const video = document.querySelector(".video");

        if (!video) {
          return;
        }

        let currentMinutes = Math.floor(video.currentTime / 60);
        let currentSeconds = Math.floor(
          video.currentTime - currentMinutes * 60
        );
        let durationMintues = Math.floor(video.duration / 60);
        let durationSeconds = Math.floor(video.duration - durationMintues * 60);

        currentTimeElement.innerHTML = `${currentMinutes}:${
          currentSeconds < 10 ? "0" + currentSeconds : currentSeconds
        }`;
        durationTimeElement.innerHTML = `${durationMintues}:${durationSeconds}`;
      },

      changeProgressBar() {
        const slider = document.querySelector(".video-progress-filled");
        const progressBar = document.querySelector(".video-progress-bar");
        progressBar.style.width = slider.value + "%";
      },

      seekVideo() {
        const progressBar = document.querySelector(".video-progress-filled");
        const video = document.querySelector(".video");
        if (!video) return;

        const percentage = (video.currentTime / video.duration) * 100;
        progressBar.value = percentage;
        this.changeProgressBar();
      },

      updateProgressAndVideo(e) {
        const video = document.querySelector(".video");
        const progress = document.querySelector(".video-progress-filled");
        const progressTime =
          (e.offsetX / progress.offsetWidth) * video.duration;
        video.currentTime = progressTime;
      },

      enterFullScreen() {
        const video = document.querySelector(".video");
        video.requestFullscreen();
      },

      listenTOVideoEnded() {
        this.videoIsPlaying = false;
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
    top: 36%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 95%;
    border-radius: 14px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    min-width: 320px;
    padding-top: 20px;
    padding-right: 7px;
    overflow: hidden;
  }

  @media screen and (min-width: 678px) {
    .video-player {
      top: 50%;
    }
  }

  @media screen and (min-width: 768px) {
    .video-player {
      /* top: 50%; */
      width: 70%;
    }
  }

  .video {
    width: 100%;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  .player-controls {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 6.25rem;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    background-color: #1c1923;
    margin-left: -7px;
    transform: translateY(100%);
    transition: all 0.6s ease-out;
  }

  .video-player:hover .player-controls {
    transform: translateY(0);
  }

  .player-controls-wrapper {
    width: 90%;
    margin: auto;
    display: flex;
    gap: 0.3rem;
    margin-top: 0.625rem;
    flex-direction: column;
  }

  .video-progress {
    position: relative;
  }

  .video-progress-filled {
    -webkit-appearance: none;
    background: transparent;
    width: 100%;
  }

  .video-progress-filled::-webkit-slider-runnable-track {
    cursor: pointer;
    background: #b3bcce80;
    height: 4px;
  }

  .video-progress-filled::-moz-range-track {
    cursor: pointer;
    background: #b3bcce80;
    height: 4px;
  }

  .video-progress-filled::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-image: linear-gradient(180deg, #14cbff, #366be8);
    margin-top: -8px;
    cursor: pointer;
  }

  .video-progress-filled::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    /* margin-top: 0; */
    cursor: pointer;
    background-image: linear-gradient(180deg, #14cbff, #366be8);
  }

  .video-progress-filled:focus {
    outline: none;
  }

  .video-progress-bar {
    background: #3374ea;
    width: 0;
    height: 4px;
    position: absolute;
    top: 10px;
    z-index: -1;
  }

  @-moz-document url-prefix() {
    .video-progress-bar {
      top: 8px;
    }
  }

  .video-control-button {
    background: white;
    height: 27px;
    border-radius: 50%;
    padding: 5px 9px 8px 11px;
  }

  .video-control-button img {
    height: 100%;
  }

  .close-icon {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    background: #d8dce4;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    border-radius: 100%;
    z-index: 15;
  }

  .close-icon img {
    width: 100%;
  }

  .backdrop {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #525b6d;
    opacity: 96%;
    z-index: 12;
  }
</style>
