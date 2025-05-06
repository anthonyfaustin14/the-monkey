document.addEventListener("DOMContentLoaded", () => {
      const colours = ["#D8B6A5", "#000000", "#FFFFFF"];
      let index = 0;
      const MIN_INTERVAL = 800;       // ←  adjust this number (ms) to taste
    
      let lastChange = performance.now();
    
      document.addEventListener("mousemove", () => {
        const now = performance.now();
        if (now - lastChange < MIN_INTERVAL) return;   // too soon → skip
    
        index = (index + 1) % colours.length;
        document.documentElement.style.setProperty("--bg", colours[index]);
        lastChange = now;
      });
    });
    // main.js
document.addEventListener("DOMContentLoaded", () => {
  // ─────  BACKGROUND CYCLE  ─────
  const colours     = ["#D8B6A5", "#000000", "#FFFFFF"];
  let index         = 0;
  const MIN_INTERVAL = 500;           // ms between colour changes
  let lastChange     = performance.now();

  document.addEventListener("mousemove", () => {
    const now = performance.now();
    if (now - lastChange < MIN_INTERVAL) return;
    index = (index + 1) % colours.length;
    document.documentElement.style.setProperty("--bg", colours[index]);
    lastChange = now;
  });

  // ─────  NAVIGATE ON CLICK  ─────
  // send the user to part2.html whenever they click anywhere
  window.addEventListener("click", () => {
    window.location.href = "part2.html";
  });
});
