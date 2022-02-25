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