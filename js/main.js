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
