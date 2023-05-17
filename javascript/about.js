const showDialogButton = document.querySelector("#showDialogButton");

// Create the dialog element
const dialog = document.createElement("dialog");
dialog.innerHTML = `
<div class="skillsHoneyComb">
<div class="skillTitle">
  <label class="skillLabelTitle">SKILLS</label>
</div>
  <div class="skillsContent">
    <p>This is a popup dialog.</p> 
  </div>
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
