// const { default: gsap } = require("gsap");

// const { Power4 } = require("gsap");
function homepage() {
    
gsap.set('.pinning', {scale: 5});
var tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.home',
        start: 'top top',
        end: 'bottom top',
        pin: true,
        scrub: 2,
    
    },
})

tl
.to('.videocontainer',{
    '--clip': '0%',
    ease: Power4,
}, 'a');

tl.to('.pinning',{
    ease: Power4,
    scale: 1
}, 'a');
tl.to('.lft',{
    ease: Power4,
    xPercent: -10
}, 'b');
tl.to('.rgt',{
    ease: Power4,
    xPercent: 10
}, 'b');
}

function talkpage(){
    gsap.to('.slide',{
        scrollTrigger:{
            trigger: '.talk',
            start: 'top top',
            end: 'bottom top',
            pin: true,
            scrub: 2,
            overflow: 'auto',
        },
        xPercent:-290,
        
    })
}

function teampage(){
    document.querySelectorAll('.containers').forEach((elem)=>{
        elem.addEventListener('mousemove',function(dets){
           
            gsap.to(this.querySelector('.image'), { opacity: 1, duration: .5, scale: 1, x:  gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX), y: gsap.utils.mapRange(0, window.innerHeight, -100, 100, dets.clientY) , ease: Power4})
        });
        elem.addEventListener('mouseleave',function(dets){
            gsap.to(this.querySelector('.image'), { opacity: 0, duration: .5, scale: 0.8, ease: Power4})
        });
        })
}













homepage();
talkpage();
teampage();
