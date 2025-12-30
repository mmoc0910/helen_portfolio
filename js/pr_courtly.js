// // use a script tag or an external JS file
// document.addEventListener("DOMContentLoaded", (event) => {
//   gsap.registerPlugin(ScrollTrigger);
//   // gsap code here!

//   gsap.utils.toArray(".section-heading").forEach((el) => {
//     gsap.from(el, {
//       opacity: 0,
//       rotation: -80,
//       transformOrigin: "bottom left",
//       duration: 0.5,
//       scrollTrigger: {
//         trigger: el,
//         start: "top 50%",
//       },
//     });
//   });

//   gsap
//     .timeline({ scrollTrigger: { trigger: ".project-intro" } })
//     .from(".project-role", { opacity: 0, x: -20, duration: 1 }, 0)
//     .from(".project-title", { opacity: 0, x: -20, duration: 1 }, 0.2)
//     .from(".project-link", { opacity: 0, x: -20, duration: 1 }, 0.4)
//     .from(".project-right", { opacity: 0, x: 20, duration: 1 }, 0.4);

//   gsap.from(".tools-items", {
//     opacity: 0,
//     x: 100,
//     duration: 1,
//     scrollTrigger: { trigger: ".tools-items", start: "top 60%" },
//   });

//   gsap.from(".design-focus-card", {
//     opacity: 0,
//     y: 50,
//     duration: 1,
//     scrollTrigger: { trigger: ".design-focus-card", start: "top 80%" },
//   });

//   gsap.from(".target-discipline-header", {
//     opacity: 0,
//     y: 60,
//     duration: 1,
//     scrollTrigger: { trigger: ".target-discipline-header", start: "top 80%" },
//   });

//   gsap.from(".discipline-cards", {
//     opacity: 0,
//     x: 50,
//     duration: 1,
//     scrollTrigger: { trigger: ".discipline-cards", top: "top 60%" },
//   });

//   gsap.from(".about-slide-wp", {
//     duration: 1,
//     opacity: 0,
//     y: 100,
//     scrollTrigger: { trigger: ".about-slide-wp", start: "top 60%" },
//   });
//   gsap.from(".intro-text", {
//     duration: 1,
//     opacity: 0,
//     x: 100,
//     scrollTrigger: { trigger: ".intro-text", start: "top 60%" },
//   });
//   gsap.from(".tablet-frame", {
//     opacity: 0,
//     y: 40,
//     duration: 1,
//     scrollTrigger: { trigger: ".tablet-frame", start: "top 60%" },
//   });
//   gsap.from(".projects-wrapper", {
//     opacity: 0,
//     y: 40,
//     duration: 1,
//     scrollTrigger: { trigger: ".projects-wrapper", start: "top 60%" },
//   });
// });
