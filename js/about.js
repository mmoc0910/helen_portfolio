// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".intro-content",
      toggleActions: "play none none none",
    },
  });

  tl.from(".intro-content .avaiable", {
    opacity: 0,
    y: -60,
    duration: 1,
  })
    .from(
      ".intro-content .intro-name span.hi",
      {
        opacity: 0,
        x: -100,
        duration: 1,
      },
      0
    )
    .from(
      ".intro-content .intro-name span.name",
      {
        opacity: 0,
        x: 100,
        duration: 1.5,
      },
      0
    )
    .from(
      ".intro-content .location",
      {
        scaleX: 0,
        transformOrigin: "center center",
        opacity: 0,
        duration: 1,
      },
      0
    );

  const el = document.querySelector(".intro-desc-text");
  if (!el) return;

  const fullText = el.getAttribute("data-text") || "";
  el.textContent = "";

  const chars = fullText.split("");
  let currentText = "";

  // timeline typing
  const tl_intro_desc = gsap.timeline({
    scrollTrigger: {
      trigger: ".intro-desc",
      start: "top 80%",
      // markers: true,
    },
  });

  const baseDelay = 0.01; 
  const randomExtra = 0.03; 

  chars.forEach((char) => {
    tl_intro_desc.to(
      {},
      {
        duration: baseDelay + Math.random() * randomExtra,
        onComplete: () => {
          currentText += char;
          el.textContent = currentText;
        },
      }
    );
  });

  tl_intro_desc.to(".t-cursor", {
    opacity: 0,
    duration: 0.5,
    ease: "power1.out",
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

  gsap.from(".fact-box-wp", {
    opacity: 0,
    x: 300,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".facts-column",
      start: "top 80%",
    },
  });

  gsap.from(".facts-image", {
    opacity: 0,
    y: 50,
    duảtion: 1,
    scrollTrigger: { trigger: ".facts-image", start: "top 80%" },
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".design-section",
      },
    })
    .from(
      ".design-section .text-center",
      { opacity: 0, y: 100, duration: 1 },
      0
    )
    .from(
      ".design-section .image-group.left",
      {
        opacity: 0,
        x: -100,
        duration: 1,
      },
      0
    )
    .from(
      ".design-section .image-group.right",
      { opacity: 0, x: 100, duration: 1 },
      0
    );

  gsap.utils.toArray(".experience-box-wp").forEach((el, index) => {
    if (index % 2 === 1)
      gsap.from(el, {
        opacity: 0,
        x: 100,
        duration: 0.5,
        scrollTrigger: {
          trigger: el,
          start: "top 50%",
        },
      });
    else
      gsap.from(el, {
        opacity: 0,
        x: -100,
        duration: 0.5,
        scrollTrigger: {
          trigger: el,
          start: "top 50%",
        },
      });
  });

  gsap.from(".statistic-box-wp", {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".statistics-container",
      start: "top 80%",
    },
  });

  const title1 = new SplitType(".contact-title-1", { types: "chars" });
  const title2 = new SplitType(".contact-title-2 .highlight", {
    types: "chars",
  });

  gsap.from(title1.chars, {
    opacity: 0,
    y: -20,
    stagger: 0.05,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".contact-title-1",
      start: "top 80%",
    },
  });

  gsap.from(title2.chars, {
    opacity: 0,
    y: -20,
    stagger: 0.05,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".contact-title-2",
      start: "top 80%",
    },
  });
});
