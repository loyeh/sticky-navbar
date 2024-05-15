const navbar = document.getElementById("navbar");
const wellcome = document.querySelector(".welcome");

console.log(navbar, wellcome.offsetTop);

const myPosition = wellcome.offsetTop;

function position() {
  if (window.scrollY >= myPosition - 100) {
    navbar.classList.add("open");
  } else {
    navbar.classList.remove("open");
  }
}

window.onscroll = position;
