document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  // gsap code here!

  gsap.utils.toArray(".section-heading").forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      rotation: -80,
      transformOrigin: "bottom left",
      duration: 0.5,
      scrollTrigger: {
        trigger: el,
        start: "top 50%",
      },
    });
  });

  gsap
    .timeline({ scrollTrigger: { trigger: ".project-intro" } })
    .from(".project-role", { opacity: 0, x: -20, duration: 1 }, 0)
    .from(".project-title", { opacity: 0, x: -20, duration: 1 }, 0.2)
    .from(".project-link", { opacity: 0, x: -20, duration: 1 }, 0.4)
    .from(".project-right", { opacity: 0, x: 20, duration: 1 }, 0.4);

  gsap.from(".tools-items", {
    opacity: 0,
    x: 100,
    duration: 1,
    scrollTrigger: { trigger: ".tools-items", start: "top bottom" },
  });

  gsap.utils.toArray(".cardpic").forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: "top 60%",
      },
    });
  });

  gsap
    .timeline({ scrollTrigger: { trigger: ".apply-project-section.apor" } })
    .from(".ap-l", { opacity: 0, y: -50, duration: 1 }, 0)
    .from(".ap-r", { opacity: 0, y: -50, duration: 1 }, 0.3);

  gsap.utils.toArray(".apply-card-wp").forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: "top 60%",
      },
    });
  });
});
