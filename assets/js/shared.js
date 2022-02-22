// Toggle light and dark mode codes here

let togglebtn = document.querySelector('#toggleIcon-moon');
let suntoggle = document.querySelector('.toggle-sun');

togglebtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    if(document.body.classList.contains('dark-theme')) {
        togglebtn.style.display = 'none';
        suntoggle.style.display = 'block';
    } else {
        togglebtn.style.display = 'block';
        suntoggle.style.display = 'none';
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