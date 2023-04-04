// header
const textDisplay = document.querySelector(".intro-text");
const phrases = [
  " Front-End Web Developer ",
  "Gamer",
  " Dog Dad ",
  " BBQ Enthusiast ",
];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
  isEnd = false;
  textDisplay.innerHTML = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      textDisplay.innerHTML = currentPhrase.join("");
    }
    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
      textDisplay.innerHTML = currentPhrase.join("");
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i == phrases.length) {
        i = 0;
      }
    }
  }

  const spedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (300 - 200) + 200;
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
  setTimeout(loop, time);
}
loop();
// about section
function scrollAppear() {
  var aboutInfo = document.querySelector(".about-info");
  var aboutPosition = aboutInfo.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.5;

  if (aboutPosition < screenPosition) {
    aboutInfo.classList.add("about-appear");
  } else {
    aboutInfo.classList.remove("about-appear");
  }
}

window.addEventListener("scroll", scrollAppear);
