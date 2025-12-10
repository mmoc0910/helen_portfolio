// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  // const title1 = new SplitType(".section-title span", { types: "chars" });
  // const title2 = new SplitType(".port-title p", { types: "chars" });

  // gsap.from(title1.chars, {
  //   opacity: 0,
  //   stagger: 0.15,
  //   duration: 0.5,
  // });

  // gsap.from(title2.chars, {
  //   opacity: 0,
  //   stagger: 0.02,
  //   duration: 0.5,
  // });
  gsap.from(".section-title", { opacity: 0, x: -50, duration: 1 });
  gsap.from(".port-title", { opacity: 0, x: -50, duration: 1 });
  gsap.utils.toArray(".portfolio-card-wp").forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      y: 200,
      duration: 1,
      delay: index % 2 === 0 ? 0 : 0.1,
      scrollTrigger: {
        trigger: card,
        start: "top bottom",
        toggleActions: "play none none none",
      },
    });
  });
});
