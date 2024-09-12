document.addEventListener("DOMContentLoaded", () => {
    const text = "Hi, I am Eshaan ";
    let index = 0;
    const speed = 150; // Speed of typing in milliseconds
  
    function typeText() {
      if (index < text.length) {
        document.getElementById("animated-text").textContent += text.charAt(index);
        index++;
        setTimeout(typeText, speed);
      }
    }
  
    typeText(); // Start typing when the page loads
  });
  