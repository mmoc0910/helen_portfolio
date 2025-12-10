// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  // gsap code here!
  gsap.from(".design-focus-header", {
    opacity: 0,
    y: 30,
    duration: 1,
    scrollTrigger: ".design-focus-header",
    trigger: "top 80%",
  });
  gsap.from(".design-focus-card", {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: ".design-focus-card",
    trigger: "top 80%",
  });
  gsap.from(".target-discipline-header", {
    opacity: 0,
    x: -100,
    duration: 1,
    scrollTrigger: ".target-discipline-header",
    trigger: "top 80%",
  });
  gsap.from(".discipline-cards", {
    opacity: 0,
    x: 100,
    duration: 1,
    scrollTrigger: ".target-discipline-header",
    trigger: "top 80%",
  });
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
  gsap.from(".belief-item", {
    opacity: 0,
    x: -50,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: { trigger: ".belief-list", start: "top 60%" },
  });
  gsap.from(".design-belief-right", {
    opacity: 0,
    x: 50,
    duration: 1,
    scrollTrigger: { trigger: ".design-belief-right", start: "top 60%" },
  });

  const belief_description = new SplitType(".belief-description", {
    types: "chars",
  });

  gsap.from(belief_description.chars, {
    opacity: 0,
    stagger: 0.02,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".belief-description",
      start: "top 60%",
    },
  });

  gsap.from(".apply-card-wp", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: { trigger: ".apply-card-container", start: "top 60%" },
  });
  gsap.utils.toArray(".process-step").forEach((el, index) => {
    if (index % 2 === 1)
      gsap.from(el, {
        opacity: 0,
        x: 100,
        duration: 0.5,
        scrollTrigger: {
          trigger: el,
          start: "top 60%",
        },
      });
    else
      gsap.from(el, {
        opacity: 0,
        x: -100,
        duration: 0.5,
        scrollTrigger: {
          trigger: el,
          start: "top 60%",
        },
      });
  });
  gsap.from(".learned-box", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: { trigger: ".learned-grid", start: "top 60%" },
  });

  gsap.from(".quote-text", {
    y: 30,
    duration: 1,
    opacity: 0,
    scrollTrigger: { trigger: ".quote-text", start: "top 60%" },
  });
});
