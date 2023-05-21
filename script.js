const nav_header = document.getElementById("mobile__menu__item");
const open = document.getElementById("open");

const toggleNavbar = () => {
  if (nav_header.style.display === "block") {
    nav_header.style.display = "none";
  } else {
    nav_header.style.display = "block";
  }
};
open.addEventListener("click", () => toggleNavbar());
const faq = document.getElementsByClassName("faq-page");
let i;
for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var body = this.nextElementSibling;
    if (body.style.display === "block") {
      body.style.display = "none";
      body.style.opacity = 0;
    } else {
      body.style.display = "block";
      body.style.opacity = 1;
    }
  });
}
