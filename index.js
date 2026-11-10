TweenMax.to("#bow", 0.3, {
scaleX: 1,
transformOrigin: "right center",
});
TweenMax.to(".arrow-angle use", 0.3, { opacity: 0 });
TweenMax.to("#arc", 0.2, { opacity: 0 });
const cake = document.querySelector('#cake')
cake.style.opacity = '1'
cake.style.animation = 'fade-in 2s forwards'
cake.style.animationDelay = '1s'
