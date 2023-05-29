const nav_header = document.getElementById("mobile__menu__item");
const open = document.getElementById("open");
const total = document.getElementById("total-prize");
const winners = document.getElementById("winners");
const onlinePlayers = document.getElementById("online-players");
const overlay = document.getElementById("container__overlay");
const signIn = document.getElementById("signin__btn");

//navigation

const toggleNavbar = () => {
  if (nav_header.style.display === "block") {
    nav_header.style.display = "none";
  } else {
    nav_header.style.display = "block";
  }
};
open.addEventListener("click", () => toggleNavbar());

// counter
const day = new Date().getDate();
const totalCount = setInterval(totalPrize, 2000);
const totalWinners = setInterval(totalWins, 3000);
const totalPlayers = setInterval(totalOnlinePlayers, 2000);
let t = 13457941;
let tWinners = 12457;
let players = 4392;
function totalPrize() {
  t = t + 100;
  total.innerHTML = t;
}
function totalWins() {
  tWinners = tWinners + 5;
  winners.innerHTML = tWinners;
}
function totalOnlinePlayers() {
  players = players + 1;
  onlinePlayers.innerHTML = players;
}

// faq
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

// pop up
window.addEventListener("load", function () {
  setTimeout(function open(event) {
    document.querySelector(".popup").style.display = "block";
    overlay.style.display = "block";
  }, 2000);

  setInterval(function () {
    $(".custom-social-proof").stop().slideToggle("slow");
  }, 8000);
  $(".custom-close").click(function () {
    $(".custom-social-proof").stop().slideToggle("slow");
  });
});
signIn.addEventListener("click", function () {
  document.querySelector(".signUp__popup").style.display = "block";
  overlay.style.display = "block";
});
document.querySelector("#closeBtn").addEventListener("click", function () {
  document.querySelector(".signUp__popup").style.display = "none";
  overlay.style.display = "none";
});
document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
  overlay.style.display = "none";
});

// product popup
