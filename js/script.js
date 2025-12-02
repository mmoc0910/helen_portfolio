const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("logo").addEventListener("click", function () {
  window.location.href = "index.html";
});
const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

let mouseX = 0,
  mouseY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  gsap.to(cursor, {
    x: mouseX,
    y: mouseY,
    duration: 0.08,
    ease: "power1.out",
  });

  gsap.to(follower, {
    x: mouseX,
    y: mouseY,
    duration: 0.1,
    ease: "power2.out",
  });
});

document.querySelectorAll(".clickable").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    follower.classList.add("hover-effect");
  });

  el.addEventListener("mouseleave", () => {
    follower.classList.remove("hover-effect");
  });
});

function toggleMenu(toggleBtn) {
  const menu = document.querySelector(".menu");
  const header = document.querySelector(".header-wrapper");

  menu.classList.toggle("active");
  header.classList.toggle("expanded");
  toggleBtn.classList.toggle("active");
}

const fullText = "Hi, I'm Helen";
const target = document.getElementById("typewriter");

let index = 0;
let typing = "";

// function typeNextChar() {
//   if (index < fullText.length) {
//     typing += fullText.charAt(index);
//     target.textContent = typing;
//     index++;
//     setTimeout(typeNextChar, 100);
//   } else {
//     highlightHelen();
//   }
// }

// function highlightHelen() {
//   // Vị trí chữ "Helen"
//   const helenStart = fullText.indexOf("Helen");
//   const helenEnd = helenStart + 5;

//   const before = fullText.slice(0, helenStart);
//   const name = fullText.slice(helenStart, helenEnd);
//   const after = fullText.slice(helenEnd);

//   target.innerHTML = `${before}<span class="highlight-yellow">${name}</span>${after}`;
// }

// typeNextChar();

const boxes = document.querySelectorAll(".experience-box");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        boxes.forEach((box, i) => {
          box.classList.remove("active", "past");
          if (i < index) box.classList.add("past");
          else if (i === index) box.classList.add("active");
        });
      }
    });
  },
  {
    threshold: 0.5,
  }
);

// boxes.forEach((box) => observer.observe(box));

// const stack = document.querySelector(".photo-stack-rotate");
// setInterval(() => {
//   const first = stack.querySelector(".photo:first-child");
//   stack.appendChild(first);
// }, 3000);

document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const card = question.parentElement;
    card.classList.toggle("open");
  });
});
