const fadeElements = document.querySelectorAll(".fade-in");

function checkFadeIn(){  
    fadeElements.forEach(el=>{
        const position = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight-100;
        if(position<windowHeight){
            el.classList.add("visible");
        }
    }) ;
}

window.addEventListener("scroll",checkFadeIn);
window.addEventListener("load",checkFadeIn);

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll",()=>{
    if(window.scrollY>400){
        scrollBtn.style.display="flex";
    }
    else{
        scrollBtn.style.display="none";
    }
});

scrollBtn.addEventListener("click",()=>{
    window.scrollTo({top:0,behavior:"smooth"});
});