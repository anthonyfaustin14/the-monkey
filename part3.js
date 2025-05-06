document.addEventListener("DOMContentLoaded", () => {
        const tiger = document.querySelector(".scary-tiger");
        if (!tiger) return;
      
        const roar = new Audio("roar.mp3");  // path relative to the HTML file
      
        tiger.addEventListener("click", () => {
          // restart from the beginning every click
          roar.currentTime = 0;
          roar.play();
        });
      });
      /* 1 ▸  play roar.mp3 and 2 ▸ shake everything while it plays */

document.addEventListener("DOMContentLoaded", () => {
    const tiger   = document.querySelector(".scary-tiger");
    const targets = document.querySelectorAll(
      ".scary-tiger, .orange-arrow, .at-that-time-all-the"
    );
  
    if (!tiger) return;
  
    const roar = new Audio("roar.mp3");  // file is in the project root
  
    tiger.addEventListener("click", () => {
      /* restart the sound from the beginning */
      roar.currentTime = 0;
      roar.play();
  
      /* add the shake class to every target element */
      targets.forEach((el) => el.classList.add("shake"));
  
      /* remove the shake class when the sound ends */
      roar.onended = () => targets.forEach((el) => el.classList.remove("shake"));
    });
  });
  