function gsapForHeader() {
    gsap.from("#header", {
        y: 50,
        duration: 0.5,
        delay: 1,
        opacity: 0,
    })
}
gsapForHeader()