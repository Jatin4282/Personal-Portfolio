


/*--------------Bg Animation Effect--------------*/
function bgAnimationItems(){
    const rows=7, cols=10;
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
           const div=document.createElement("div");
           div.className=`col-${j+1}`;
           document.querySelector(".bg-animation-effect").appendChild(div);
        }
    }
}
bgAnimationItems();

/*-------navigation bar effects on scroll---------*/
window.addEventListener("scroll",function(){
    const header=document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY>0);
});

// Scroll reveal animations
// Common reveal options to create reveal animations
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay:100
});
// Target elements, and specify options to create reveal animations
ScrollReveal().reveal('.home-section .home-content h1, .section-title-01, section-title-02', {delay:400, origin:'left'});
ScrollReveal().reveal('.home-section .home-content p, .about .description,  .about .btn, .footer-copyright p', {delay:500, origin:'right'});
ScrollReveal().reveal('.media-icons i, .contact-left li', {delay:400, origin:'left', interval:200});
ScrollReveal().reveal('.home-section .home-content img, .about-img', {delay:400, origin:'top', interval:200});
ScrollReveal().reveal('.edu-list li, .footer-container h2', {delay:400, origin:'left', interval:200});
ScrollReveal().reveal('.bars li, .skills-info .experience-card', {delay:400, origin:'bottom', interval:200});


