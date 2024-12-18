let cursor = document.querySelector("#cursor-div");
let blurCursor = document.querySelector("#blur-cursor");
document.addEventListener("mousemove", (dets) => {
  cursor.style.top = dets.y + "px";
  cursor.style.left = dets.x + "px";
  blurCursor.style.top = dets.y - 110 + "px";
  blurCursor.style.left = dets.x - 110 + "px";
});

let navLinks = document.querySelectorAll("#nav a");

navLinks.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    cursor.style.scale = 2.5;
    cursor.style.border = "1px solid #fff";
    cursor.style.backgroundColor = "transparent";
  });

  elem.addEventListener("mouseleave", () => {
    cursor.style.scale = 1;
    cursor.style.border = "none";
    cursor.style.backgroundColor = "#95c11e";
  });
});

let overlay = document.querySelectorAll(".overlay");
overlay.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    elem.style.opacity = 1;
  });
  elem.addEventListener("mouseleave", () => {
    elem.style.opacity = 0;
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "14%",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -73%",
    scrub: 2,
  },
});

gsap.to("#image-gallery .img", {
  scale: 1,
  duration: 0.1,
  scrollTrigger: {
    trigger: "#image-gallery .img",
    scroller: "body",
    scrub: 2,
  },
});

gsap.from("#about-section .about-img-01", {
  opacity: 0,
  x: -200,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-section .about-img-01",
    scroller: "body",
    // markers: true,
    start: "top 110%",
    end: "top 20%",
    scrub: 2,
  },
});

gsap.from("#about-section .about-img-02", {
  opacity: 0,
  x: 200,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-section .about-img-02",
    scroller: "body",
    // markers: true,
    start: "top 110%",
    end: "top 20%",
    scrub: 2,
  },
});

gsap.from("#about-section .content", {
  opacity: 0,
  y: 100,
  duration: 1.5,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#about-section .content",
    scroller: "body",
    // markers: true,
    start: "top 110%",
    end: "top 20%",
    scrub: 2,
  },
});

gsap.to("#page-03 #colon-01", {
  y: "130%",
  x: "180%",
  duration: 1,
  scrollTrigger: {
    trigger: "#page-03",
    scroller: "body",
    // markers: true,
    start: "top 20%",
    end: "top 15%",
    scrub: 5,
  },
});

gsap.to("#page-03 #colon-02", {
  y: "-240%",
  x: "-230%",
  duration: 5,
  scrollTrigger: {
    trigger: "#page-03",
    scroller: "body",
    // markers: true,
    start: "top 20%",
    end: "top 15%",
    scrub: 4,
  },
});

gsap.to("#page-04-section-01 h1", {
  y: "-42%",
  // duration: 0.5,
  scrollTrigger:{
    trigger:"#page-04-section-01",
    scroller:"body",
    // markers:true,
    start:"top 65%",
    end:"top 68%",
    scrub:3
  }
});
