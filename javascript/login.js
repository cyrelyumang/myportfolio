const loginForm = document.querySelector('.action_btn');
const modalDialog = document.querySelector('.dialog__login');
const closeButton = document.querySelector('.close-button');

loginForm.addEventListener("click", () => {
  modalDialog.showModal();
});

closeButton.addEventListener("click", () => {
  modalDialog.close();
});
