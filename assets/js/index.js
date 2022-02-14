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

//   Init All ------------------
$(document).ready(function () {
  initParadoxWay();
});


new Splide( '.splide' ).mount();

new Splide( '.splide', {
  classes: {
		pagination: 'splide__pagination your-class-pagination',
		page      : 'splide__pagination__page your-class-page',
  },
} );


// when you hover the learn more video, this happens

