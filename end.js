function spawnConfetti(x, y) {
    const img = document.createElement("img");
    img.src       = "img/banana.png";
    img.className = "confetti";
    img.style.left = `${x}px`;
    img.style.top  = `${y}px`;
    document.body.append(img);
    img.addEventListener("animationend", () => img.remove());
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    // burst 20 bananas from random positions across the top
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const x = Math.random() * window.innerWidth;
        spawnConfetti(x, -30);
      }, i * 100);
    }
  });
  