
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

gsap.to('.slide',{
    scrollTrigger:{
        trigger: '.talk',
        start: 'top top',
        end: 'bottom top',
        pin: true,
        scrub: 2,
        overflow: 'auto',
        markers: true
    },
    xPercent:-290,
    
})

