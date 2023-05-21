// const hide_card = document.querySelector(".profile-card-hidden");
// const buttonCloseHome = document.querySelector(".home-close-button");
// const buttonClickMe = document.querySelector(".home__fingerprint");

// buttonCloseHome.addEventListener("click", () => {
//   hide_card.classList.replace("profile-card", "profile-card-hidden");
// });

// buttonClickMe.addEventListener("click", () => {
//   hide_card.classList.replace("profile-card-hidden", "profile-card");
// });

// AUTO POPUP PROFILE

const hide_card = document.querySelector(".profile-card-hidden");
const buttonCloseHome = document.querySelector(".home-close-button");
const buttonClickMe = document.querySelector(".home__fingerprint");
let intervalTimer;

buttonClickMe.addEventListener("mouseover", () => { 
  intervalTimer = setInterval(popUpProfile, 1000);
});

buttonClickMe.addEventListener("mouseout", () => {
  clearInterval(intervalTimer);
  console.log("MOUSE OUT");
});

buttonCloseHome.addEventListener("click", () => {
  hide_card.classList.replace("profile-card", "profile-card-hidden");
});

function popUpProfile() {
  hide_card.classList.replace("profile-card-hidden", "profile-card");
}
