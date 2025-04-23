cosnt = headers = document.getElementsByTagName("H2");
const topChar = headers[0];
const middleChar = headers[1];
const bottomChar = headers[2];
const bg = document.getElementById("page-wrap");

var tl = new TimelineLite();

tl.from(bg, 1, { opacity: 0 })
  .from(topChar, 1.5, {
    x: -500,
    opacity: 0,
    ease: "power4.out",
  }) /*The power4.out slows it down as it moves into place to create a dragging effect */
  .from(middleChar, 1.5, {
    x: 500,
    opacity: 0,
    ease: "power4.out",
  }) /*Use x and y instead of top, bottom, etc so that the character won't move while the screen is being resized*/
  .from(bottomChar, 1.5, { y: 500, opacity: 0, ease: "power4.out" });

// animate the charathers so that it slides in form the bottom

// gsap.from(".char", {
//   y: 10000,
//   opacity: 0,
//   duration: 3,
//   ease: "power2.out",
//   stagger: 0.5, // adds a delay between each character
// });
