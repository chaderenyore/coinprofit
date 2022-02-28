// Toggle light and dark mode codes here

let togglebtn = document.querySelector('#toggleIcon');


if(localStorage.getItem("theme") == null) {

    localStorage.setItem("theme", "light");
    
}



let localData = localStorage.getItem("theme");

if(localData == "light") {
    togglebtn.src = "toggl.png";
    document.body.classList.remove("dark-theme");

} else if (localData == "dark") {
    togglebtn.src = "toggle-dark.svg";
    document.body.classList.add("dark-theme");
}



togglebtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    if(document.body.classList.contains('dark-theme')) {
        togglebtn.src = "toggle-dark.svg";
        localStorage.setItem("theme", "dark");
    } else {
        togglebtn.src = "toggl.png";
        localStorage.setItem("theme", "light");
    }
});



//  Back to top feature
// window.addEventListener('scroll', function() {
//     let backToUp = this.document.querySelector('.scrollTop');
//     backToUp.classList.toggle("scrollactive", window.scrollY > 200)
// })

// function scrollToTop(){
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     })
// }

// Ends Back to top

// Start navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const backdrop = document.querySelector(".backdrop");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    backdrop.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    backdrop.classList.remove("active");
}

backdrop.addEventListener("click", closebackdrop);
function closebackdrop() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    backdrop.classList.remove("active");   
}


// End Navabr






// Footer section
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