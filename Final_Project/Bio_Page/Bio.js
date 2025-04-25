const words = ["Designer", "Developer", "Creator", "Freelancer"];
const textElement = document.getElementById("text");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
  const currentWord = words[wordIndex];
  const currentText = isDeleting
    ? currentWord.substring(0, charIndex--)
    : currentWord.substring(0, charIndex++);

  textElement.textContent = currentText;

  if (!isDeleting && charIndex === currentWord.length + 1) {
    isDeleting = true;
    typingSpeed = 1000; // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typingSpeed = 150;
  } else {
    typingSpeed = isDeleting ? 50 : 150;
  }

  setTimeout(type, typingSpeed);
}

document.addEventListener("DOMContentLoaded", type);
