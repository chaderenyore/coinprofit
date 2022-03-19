

// leaders silder starts here

function initParadoxWay() {
  "use strict";
 
  if ($(".testimonials-carousel").length > 0) {
      var j2 = new Swiper(".testimonials-carousel .swiper-container", {
          preloadImages: false,
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          grabCursor: true,
          mousewheel: false,
          centeredSlides: true,
          disableOnInteraction: false,
          pagination: {
              el: '.tc-pagination',
              clickable: true,
              dynamicBullets: true,
          },
          autoplay: {
              delay: 3000,
            },
          navigation: {
              nextEl: '.listing-carousel-button-next',
              prevEl: '.listing-carousel-button-prev',
          },
          breakpoints: {
              768: {
                  slidesPerView: 2,
              },
              1024: {
                  slidesPerView: 2,
              },
              1200: {
                slidesPerView :3,
              },
              
          }
      });
  }

}

$(document).ready(function () {
  initParadoxWay();
});


document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide', {
    type         : 'loop',
    perPage      : 1,
    autoplay     : true,
    interval     : 2000, // How long to display each slide
    pauseOnHover : true, // m
    pauseOnFocus : false, // must be false
    resetProgress: false
  }).mount();
})

// end of splider js


// Learn More Video codes starts here. When you click on the play icon, the video pops out of the page

const playIcon = document.querySelector('.vid-play'),
      closeIcon = document.querySelector('.vid-close');
const playVideoModal = document.querySelector('.video-modal');


playIcon.addEventListener("click", function(){
  playVideoModal.classList.add('showmodal');

});
closeIcon.addEventListener("click", function(){
  playVideoModal.classList.remove('showmodal');
  var iframes = playVideoModal.getElementsByTagName('iframe');
  if(iframes != null) {
    for (let i = 0;  i < iframes.length; i++){  
       const iframe = iframes[i];
       iframe.src = iframe.src;

      }
  }
  
  
});

// Learn more video codes ends here


// FAQ SECTION
let faqtoggles = document.getElementsByClassName('faqtoggle');
let faqcontentDiv = document.getElementsByClassName('faqcontent');
let faqicons = document.getElementsByClassName('faqicon');

for(let i=0; i<faqtoggles.length; i++){
  faqtoggles[i].addEventListener('click', ()=>{
        if( parseInt(faqcontentDiv[i].style.height) != faqcontentDiv[i].scrollHeight){
          faqcontentDiv[i].style.height = faqcontentDiv[i].scrollHeight + "px";
          faqicons[i].classList.remove('fa-chevron-down');
          faqicons[i].classList.add('fa-chevron-up');
        }
        else{
          faqcontentDiv[i].style.height = "0px";
          faqicons[i].classList.remove('fa-chevron-up');
          faqicons[i].classList.add('fa-chevron-down');
        }

        for(let j=0; j<faqcontentDiv.length; j++){
            if(j!==i){
            faqcontentDiv[j].style.height = "0px";
            faqicons[j].classList.remove('fa-chevron-up');
            faqicons[j].classList.add('fa-chevron-down');
            }
        }
    });
}


// The footer section differs from each screen. Mobile and tablets are same while computers is different

let toggles = document.getElementsByClassName('footerToggle');
let contentBox = document.getElementsByClassName('footerContent');
let icons = document.getElementsByClassName('footerIcon');

for(let i=0; i<toggles.length; i++){
    toggles[i].addEventListener('click', ()=>{
        if( parseInt(contentBox[i].style.height) != contentBox[i].scrollHeight){
            contentBox[i].style.height = contentBox[i].scrollHeight + "px";
            icons[i].classList.remove('fa-chevron-down');
            icons[i].classList.add('fa-chevron-up');
        }
        else{
            contentBox[i].style.height = "0px";
            icons[i].classList.remove('fa-chevron-up');
            icons[i].classList.add('fa-chevron-down');
        }

        for(let j=0; j<contentBox.length; j++){
            if(j!==i){
                contentBox[j].style.height = "0px";
                icons[j].classList.remove('fa-chevron-up');
                icons[j].classList.add('fa-chevron-down');
            }
        }
    });
}