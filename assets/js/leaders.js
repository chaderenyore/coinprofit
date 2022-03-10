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


