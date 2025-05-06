// part2.js
console.log("✅ part2.js loaded and running");

document.addEventListener("DOMContentLoaded", () => {
  // 1 ▸ FALL text when hovered
  const fallables = document.querySelectorAll(
    ".legend-goes, .text-wrapper, .p"         // or ".legend-goes, .text-wrapper, .subtitle"
  );
  fallables.forEach(el =>
    el.addEventListener("mouseenter", () => el.classList.add("fall"))
  );

  // 2 ▸ BOUNCE the tiger when clicked
  const tiger = document.querySelector(".tiger-water");
  if (tiger) {
    tiger.addEventListener("click", () => {
      tiger.classList.toggle("bounce");
    });
  }
});
// part2.js

document.addEventListener("DOMContentLoaded", () => {
  // … your existing fall + bounce code …

  // 3 ▸ NAVIGATE on arrow-click
  const arrow = document.querySelector(".orange-arrow");
  if (arrow) {
    // show pointer cursor
    arrow.style.cursor = "pointer";

    arrow.addEventListener("click", () => {
      window.location.href = "part3.html";
    });
  }
});
