// PAGE SCROLL ANIMATIONS STARTS HERE

const faders = document.querySelectorAll(".fadeIn-scroll");
const slideIn = document.querySelectorAll(".slideIn");


const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

slideIn.forEach(slideIn => {
  appearOnScroll.observe(slideIn);
});

// PAGE SCROLL ANIMATIONS ENDS HERE

// About slider starts here

var slideIndex = 0; 
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot-active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " dot-active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// About slider ends here

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
              delay: 1000,
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
          faqicons[i].classList.remove('fa-angle-down');
          faqicons[i].classList.add('fa-plus');
        }
        else{
          faqcontentDiv[i].style.height = "0px";
          faqicons[i].classList.remove('fa-plus');
          faqicons[i].classList.add('fa-mius');
        }

        for(let j=0; j<faqcontentDiv.length; j++){
            if(j!==i){
              faqcontentDiv[j].style.height = "0px";
              faqicons[i].classList.remove('fa-angle-plus');
              faqicons[i].classList.add('fa-minus');
            }
        }
    });
}