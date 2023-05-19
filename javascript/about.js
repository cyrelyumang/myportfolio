// SKILLS 
const showDialogButton = document.querySelector("#showDialogButton");
// Create the dialog element
const dialogSkill = document.createElement("dialog");
dialogSkill.innerHTML = `
<div class="skillsHoneyComb">
<div class="skillTitle">
  <label class="skillLabelTitle">SKILLS</label>
</div>
  <div class="skillsContent">
    <p>SKILL CONTENT</p> 
  </div>
</div>
        `;
// Add a class to the dialog element
dialogSkill.classList.add("skillDialogClass");
// Add the dialog element to the document body
document.body.appendChild(dialogSkill);
// Show the dialog when the button is clicked
showDialogButton.addEventListener("click", () => {
  dialogSkill.showModal();
});


// QUOTE 
const showDialogButtonQuote = document.querySelector("#showDialogButtonQuote");
// Create the dialog element
const dialogQuote = document.createElement("dialog");
dialogQuote.innerHTML = `
<div class="quoteHoneyComb">
<div class="quoteTitle">
  <label class="quoteLabelTitle">QUOTE</label>
</div>
  <div class="quoteContent">
    <p>QUOTE CONTENT</p> 
  </div>
</div>
        `;
// Add a class to the dialog element
dialogQuote.classList.add("quoteDialogClass");
// Add the dialog element to the document body
document.body.appendChild(dialogQuote);
// Show the dialog when the button is clicked
showDialogButtonQuote.addEventListener("click", () => {
  dialogQuote.showModal();
});


// PROJECT 
const showDialogButtonProject = document.querySelector("#showDialogButtonProject");
// Create the dialog element
const dialogProject = document.createElement("dialog");
dialogProject.innerHTML = `
<div class="projectHoneyComb">
<div class="projectTitle">
  <label class="projectLabelTitle">PROJECTS</label>
</div>
  <div class="projectContent">
    <p>PROJECT CONTENT</p> 
  </div>
</div>
        `;
// Add a class to the dialog element
dialogProject.classList.add("projectDialogClass");
// Add the dialog element to the document body
document.body.appendChild(dialogProject);
// Show the dialog when the button is clicked
showDialogButtonProject.addEventListener("click", () => {
  dialogProject.showModal();
});


// ACTIVITYIES 
const showDialogButtonActivities = document.querySelector("#showDialogButtonActivities");
// Create the dialog element
const dialogActivities = document.createElement("dialog");
dialogActivities.innerHTML = `
<div class="activitiesHoneyComb">
<div class="activitiesTitle">
  <label class="activitiesLabelTitle">ACTIVITIES</label>
</div>
  <div class="activitiesContent">
    <p>ACTIVITIES CONTENT</p> 
  </div>
</div>
        `;
// Add a class to the dialog element
dialogActivities.classList.add("activitiesDialogClass");
// Add the dialog element to the document body
document.body.appendChild(dialogActivities);
// Show the dialog when the button is clicked
showDialogButtonActivities.addEventListener("click", () => {
  dialogActivities.showModal();
});


// BACKGROUND 
const showDialogButtonBackground = document.querySelector("#showDialogButtonBackground");
// Create the dialog element
const dialogBackground = document.createElement("dialog");
dialogBackground.innerHTML = `
<div class="backgroundHoneyComb">
<div class="backgroundTitle">
  <label class="backgroundLabelTitle">BACKGROUND</label>
</div>
  <div class="backgroundContent">
    <p>BACKGROUND CONTENT</p> 
  </div>
</div>
        `;
// Add a class to the dialog element
dialogBackground.classList.add("backgroundDialogClass");
// Add the dialog element to the document body
document.body.appendChild(dialogBackground);
// Show the dialog when the button is clicked
showDialogButtonBackground.addEventListener("click", () => {
  dialogBackground.showModal();
});
