// part4.js
document.addEventListener("DOMContentLoaded", () => {
    const heading  = document.querySelector(".heading");
    const subtitle = document.querySelector(".subtitle");
    const maxAngle = 15; // max swing in degrees
  
    window.addEventListener("mousemove", (e) => {
      // how far from center (-1 to +1)
      const percentX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const angle    = percentX * maxAngle;
  
      // rotate headings opposite directions for contrast
      heading.style.transform  = `rotate(${ angle }deg)`;
      subtitle.style.transform = `rotate(${-angle }deg)`;
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    // ─────  SWING TEXT ON MOUSEMOVE  ─────
    const heading  = document.querySelector(".heading");
    const subtitle = document.querySelector(".subtitle");
    const maxAngle = 15;
  
    window.addEventListener("mousemove", (e) => {
      const pctX  = (e.clientX - window.innerWidth/2) / (window.innerWidth/2);
      const angle = pctX * maxAngle;
      heading.style.transform  = `rotate(${ angle }deg)`;
      subtitle.style.transform = `rotate(${-angle }deg)`;
    });
  
    // ─────  SPAWN & DROP BANANAS ON CLICK  ─────
    document.addEventListener("click", (e) => {
      const banana = document.createElement("img");
      banana.src        = "img/banana.png";      // adjust path if yours lives elsewhere
      banana.className  = "banana";
      // center the 100×100px banana on the click point:
      banana.style.left = `${e.clientX - 50}px`;
      banana.style.top  = `${e.clientY - 50}px`;
  
      document.body.appendChild(banana);
  
      // clean up after the fall animation finishes:
      banana.addEventListener("animationend", () => banana.remove());
    });
  });
  