document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
      type         : 'loop',
      perPage      : 1,
      autoplay     : true,
      interval     : 3000, // How long to display each slide
      pauseOnHover : true, // m
      pauseOnFocus : false, // must be false
      resetProgress: false
    }).mount();
  })
  
  // end of splider js