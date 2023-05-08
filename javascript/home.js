const hide_card = document.querySelector(".profile-card-hidden");
const buttonCloseHome = document.querySelector(".home-close-button");
const buttonClickMe = document.querySelector(".home__data");

buttonCloseHome.addEventListener("click", () => {
  hide_card.classList.replace("profile-card", "profile-card-hidden");
});

buttonClickMe.addEventListener("click", () => {
    console.log("Click");
  hide_card.classList.replace("profile-card-hidden", "profile-card");
});
