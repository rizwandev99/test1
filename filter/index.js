// Add input element inside form, before button, to take fruit description
const form = document.querySelector("form");
const btnForm = document.querySelector("btn");
const inputDesc = document.createElement("input");
inputDesc.setAttribute("placeholder", "Write Description of fruit here...");
inputDesc.id = "desc";
form.insertBefore(inputDesc, btnForm);

// Show the fruit description in italics on the next line
const fruits = document.querySelector(".fruits");
const inputFruit = document.querySelector("#fruit-to-add");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const newLI = document.createElement("li");
  newLI.innerHTML = inputFruit.value + "<p>inputDesc.value</p>";
  inputDesc.style.fontStyle = "italic";
  fruits.appendChild(newLI);
});

// Create a filter that shows only those fruits whose either name or description or both matches the entered text
const filter = document.getElementById("filter");

filter.addEventListener("keyup", function (event) {
  const textEntered = event.target.value.toLowerCase();
});
