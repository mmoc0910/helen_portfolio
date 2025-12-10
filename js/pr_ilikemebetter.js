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

  gsap.from(".headline-container", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: { trigger: ".headline-container", start: "top bottom" },
  });

  gsap
    .timeline({ scrollTrigger: ".intro-section" })
    .from(
      ".intro-slide-1-wp",
      {
        opacity: 0,
        x: -50,
        duration: 1,
      },
      0
    )
    .from(".slide-text-1", { opacity: 0, y: 50, duration: 1 }, 0.2)
    .from(
      ".intro-slide-2-wp",
      {
        opacity: 0,
        x: 50,
        duration: 1,
      },
      0.4
    )
    .from(".slide-text-2", { opacity: 0, y: -50, duration: 1 }, 0.6);

  gsap.from(".storyboard-header-wp", {
    opacity: 0,
    x: -50,
    duration: 1,
    scrollTrigger: { trigger: ".storyboard-section", top: "top 60%" },
  });

  gsap.utils.toArray(".storyboard-item").forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      x: 50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: el,
        start: "top 60%",
      },
    });
  });

  gsap.utils.toArray(".apply-card-wp").forEach((el, index) => {
    gsap.from(el, {
      opacity: 0,
      y: 50,
      duration: 1,
    //   delay: index * 0.2,
      scrollTrigger: {
        trigger: el,
        start: "top 60%",
      },
    });
  });
});
