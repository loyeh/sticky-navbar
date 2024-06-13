const navbar = document.getElementById("navbar");
const wellcome = document.querySelector(".welcome");

const myPosition = wellcome.offsetTop;

window.onscroll = position;

function position() {
  if (window.scrollY >= myPosition - 100) {
    navbar.classList.add("open");
  } else {
    navbar.classList.remove("open");
  }
}
