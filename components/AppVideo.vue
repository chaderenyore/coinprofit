
  
<template>
    <div class="video-player-box" 
         :playsinline="playsinline"
         @ended="onPlayerEnded($event)"
         v-video-player:myVideoPlayer="playerOptions">
    </div>
</template>

<script>
  export default {
    props: ['playerdata', 'source'],
    data () {
      return {
        // component options
        playsinline: true,
        
        // videojs options
        playerOptions: {
          autoplay: this.playerdata.autoplay,
          muted: false,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: this.source
          }],
        }
      }
    },
    mounted() {
      console.log('this is current player instance object', this.myVideoPlayer)
    },
    methods: {
      // listen event
      onPlayerEnded(player) {
        console.log('player ended!', player)
      },
      
    }
  }
</script>

<style>    
    .video-player-box > div {
      width: 100% !important;
      height: 70vh !important;
    }
</style>