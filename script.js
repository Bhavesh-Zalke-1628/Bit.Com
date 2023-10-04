function gsapForHeader() {
    gsap.from("#header", {
        y: 50,
        duration: 0.5,
        delay: 1,
        opacity: 0,
    })
}
gsapForHeader()


gsap.from("##page3", {
    y: 10,
    x:-10,
    scale: 0,
    opacity:0,
    ease: "back.in",
    opacity: 0,
    duration: 2,
    stagger: 0.1
})