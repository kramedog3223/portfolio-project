function scrollAppear() {
  var aboutInfo = document.querySelector(".about-info");
  var aboutPosition = aboutInfo.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.3;

  if (aboutPosition < screenPosition) {
    aboutInfo.classList.add("about-appear");
  }
}

window.addEventListener("scroll", scrollAppear);
