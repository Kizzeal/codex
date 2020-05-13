document.getElementById("cta").addEventListener("click", () => {
  let tl = gsap.timeline({ defaults: { duration: 1 } });

  tl.to(".shift", { x: "-30px", ease: "bounce.out" })
    .to(".panel", { scaleY: 1, height: "100vh", ease: Power3.inOut })
    .to("#pdf", { opacity: 1, y: 0, ease: "bounce.out" }, "+=0.2")
    .to("p", { opacity: 1, y: 20 }, "-=0.1")
    .to(".box", { opacity: 1, scale: 1, ease: "elastic(0.5, 0.3)" }, 2);
});
