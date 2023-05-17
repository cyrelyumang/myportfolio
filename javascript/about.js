// const divSkills = document.querySelector("#buttonSkills");
// const sectionAbout = document.querySelector("#about");

// // divSkills.addEventListener('click', function popUpSkills() {
// // sectionAbout.innerHTML = '';
// // });

// function popUpSkills() {
//   const dialogContent = `
// <dialog class="skillDialog">
//     <div class=" ">
//         <div class="skillsHoneyComb">
//             <p>This is a popup dialog.</p>
//         </div>
//     </div>
// </dialog>
//     `;

//     document.body.innerHTML += dialogContent;
//   const dialog = document.querySelector(".skillDialog");
//   dialog.showModal();
// }

const showDialogButton = document.querySelector("#showDialogButton");

// Create the dialog element
const dialog = document.createElement("dialog");
dialog.innerHTML = `
<div class="skillsHoneyComb">
    <p>This is a popup dialog.</p> 
</div>
        `;
// Add a class to the dialog element
dialog.classList.add("skillDialogClass");

// Add the dialog element to the document body
document.body.appendChild(dialog);

// Show the dialog when the button is clicked
showDialogButton.addEventListener("click", () => {
  dialog.showModal();
});

// Close the dialog when the close button is clicked
// dialog.querySelector("#closeDialogButton").addEventListener("click", () => {
//   dialog.close();
// });
