const qualificationBtn = document.querySelector("#qualificationBtn");
const aboutBtn = document.querySelector("#aboutBtn");

console.log(qualificationBtn);
console.log(aboutBtn);

qualificationBtn.addEventListener("click", () => {
  window.location.href = "qualification.html";
});

aboutBtn.addEventListener("click", () => {
  window.location.href = "about.html";
});
