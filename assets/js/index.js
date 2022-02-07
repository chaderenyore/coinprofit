// The App UI changes on mouse hover 
// $(document).ready(function () {
//   $('.appui')
//       .mouseover(function () {
//       $(this).attr("src", "../assets/images/Asset 1.svg");
//   })
//       .mouseout(function () {
//       $(this).attr("src", "../assets/images/appUI.png");
//   });
// });

// APP UI change ends here

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
    dots[i].className = dots[i].className.replace(" dot-active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " dot-active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// THE ABOUT SLIDE ENDS HERE 

// APP UI CHANGES ON HOVER 




// END OF APP UI CHANGES ON HOVER FUNCTION