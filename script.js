const nav_header = document.getElementById("mobile__menu__item");
const open = document.getElementById("open");
const total = document.getElementById("total-prize");
const winners = document.getElementById("winners");
const onlinePlayers = document.getElementById("online-players");
const overlay = document.getElementById("container__overlay");
const signIn = document.getElementById("signin__btn");
const login = document.getElementById("login__btn");
const fName = document.getElementById("name_input");
const email = document.getElementById("email_input");
const tel = document.getElementById("tel_input");
const signUp = document.getElementById("signUp__btn");
const mailBtn = document.getElementById("for__mail");

// login
function Login() {
  var elements = document.getElementsByClassName("loginVal");
  var formData = new FormData();
  for (var i = 0; i < elements.length; i++) {
    formData.append(elements[i].name, elements[i].value);
  }
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      var appURL = xmlHttp.responseText;

      if (appURL == "invalid") {
        //login is invalid, show invalid alert

        alert("Invalid login or password!");
      } else {
        window.open(appURL, "_self"); //login is valid, forward user to app
      }
    }
  };
  xmlHttp.open("post", "https://secure1.77711.eu/LoginAPI.aspx");
  xmlHttp.send(formData);
}
// sign up
signUp.addEventListener("click", function () {
  const emailValue = email.value;
  const nameValue = fName.value;
  const telValue = tel.value;
  mailBtn.href = `mailto:moonteval@gmail.com?subject=Information!&body=name:${nameValue},email:${emailValue},telephone:${telValue}`;
});
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
login.addEventListener("click", function () {
  document.querySelector(".login__popup").style.display = "block";
  overlay.style.display = "block";
});
document
  .querySelector("#loginclose__btn")
  .addEventListener("click", function () {
    document.querySelector(".login__popup").style.display = "none";
    overlay.style.display = "none";
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
