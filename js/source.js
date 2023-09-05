
$(".toggle").click(function () {
  $(".fa-times").toggle();
  $(".fa-bars").toggle();
  $(".nav-t").animate({
    height: "toggle"
  });
});

let navBar = document.getElementById("my-nav");
        window.onscroll = function () {
            if (window.scrollY > 22) {
                navBar.classList.add("scrolled");
            } else {
                navBar.classList.remove("scrolled");
            }
        };

// function loco() {
//   gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#big-wrapper"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#big-wrapper", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#big-wrapper").style.transform ? "transform" : "fixed"
// });
// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

// }
// loco()


// let tl = gsap.timeline()

// tl
// .from(".banner-text",{
//   y: 80,
//   duration:1,
// })
// .from(".banner-text span",{
//   x:-50,
//   duration:1,
// })