// ai generated because the type.js import doesn't work

// The array contating the words I want to have typed out
const words = ["Designer", "Developer", "Creator", "Game Developer"];
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

  // if the robot finish typing all the letters: !isDeleting means not erasing yet(still typing)
  // charIndex allows it to finish typing the whole word
  if (!isDeleting && charIndex === currentWord.length + 1) {
    // start to erase the typed word
    isDeleting = true;
    // wait 1 second, 1000 is millis
    typingSpeed = 1000; // Pause before deleting
    // if there is no word/the previous word is deleted
  } else if (isDeleting && charIndex === 0) {
    // typing the word
    isDeleting = false;
    // move to the next word within the array
    wordIndex = (wordIndex + 1) % words.length;
    // type slowly
    typingSpeed = 150;
  } else {
    // if its erasing the word move faster and slower if its typing
    typingSpeed = isDeleting ? 50 : 150;
  }

  // after waiting for a bit, do the whole process again, go through the words within the array once more
  setTimeout(type, typingSpeed);
}

document.addEventListener("DOMContentLoaded", type);
