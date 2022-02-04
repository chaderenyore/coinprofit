// THE ABOUT SLIDE STARTS HERE 
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
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// THE ABOUT SLIDE ENDS HERE 

// APP UI CHANGES ON HOVER 
$(function(){
  $("#appui").on({
   mouseenter: function(){
    $(this).attr('src','https://v2.agrascout.com/img/markers/insect-2.png');
  },
  mouseleave: function(){
    $(this).attr('src','./assets/images/Assets 1.svg');
  }
  });
  
});

// END OF APP UI CHANGES ON HOVER FUNCTION