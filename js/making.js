document.getElementById("cta").addEventListener("click", () => {
  let tl = gsap.timeline({ defaults: { duration: 1 } });

  tl.to("body", { backgroundColor: "black" })
    .to(".shift button", { color: "transparent", outline: "none" }, "-=2")
    .to(".shift", { x: "600px", ease: "power2.inOut" })
    .to(".shift", { x: "-5px", ease: "bounce.out" })
    .to(".shift h1", { color: "red" })
    .to(".panel", { scaleY: 1, height: "100vh", ease: Power3.inOut })
    .to("#pdf", { opacity: 1, y: 0, ease: "bounce.out" }, "+=0.2")
    .to("p", { opacity: 1, y: 20 }, "-=0.1")
    .to(".box", { opacity: 1, scale: 1, ease: "elastic(0.5, 0.3)" }, 5.5);
});
