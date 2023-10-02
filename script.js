gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({
    defaults: { duration: 1 },
});
timeline
    .from(".header", { y: "-100%", ease: "bounce" })
    .from(".link", { opacity: 0, stagger: 0.5 })
    .from(".right", { x: "-100vw", ease: "power2.in" }, 1)
    .from(".left", { x: "-100%" }, "<.5")
    .to(".footer", { y: 0, ease: "elastic" })
    .fromTo(
        ".button",
        { opacity: 0, scale: 0, rotation: 720 },
        { opacity: 1, scale: 1, rotation: 0 }
    );

const boxtimeline = gsap.timeline({
    scrollTrigger: {
        scroller: ".main",
        trigger: ".animate-me",
        start: "center 70%",
        end: "center 30%",
        scrub: true,
        markers: true,
    },
    defaults: { duration: 1 },
});

boxtimeline.fromTo(
    ".animate-me",
    {
        backgroundColor: "pink",
        height: "20%",
    },
    {
        backgroundColor: "black",
        height: "60%",
    }
);

const button = document.querySelector(".button");

button.addEventListener("click", () => {
    timeline.timeScale(3);
    timeline.reverse();
    document.querySelector(".main").style.display = "none"; 
});
