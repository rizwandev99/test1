// Add input element inside form, before button, to take fruit description
const input = document.createElement("input");
input.setAttribute("type", "text");
const form = document.querySelector("form");
const button = document.querySelector("button");
form.insertBefore(input, button);

// Show the fruit description in italics on the next line
const fruits = document.querySelector(".fruits");
input.style.fontStyle = "italic";

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const fruitToAdd = document.getElementById("fruit-to-add");

  const newLi = document.createElement("li");
  newLi.innerHTML =
    fruitToAdd.value +
    '<button class="delete-btn">x</button>' +
    '<p class="desc">' +
    input.value +
    "</p>";

  newLi.className = "fruit";
  fruits.appendChild(newLi);

  const desc = document.getElementsByClassName("desc");
  for (let i = 0; i < desc.length; i++) {
    desc[i].style.fontStyle = "italic";
  }
});

// Create a filter that shows only those fruits whose either name or description or both matches the entered text
const filter = document.getElementById("filter");

filter.addEventListener("keyup", function (event) {
  const textEntered = event.target.value.toLowerCase();
  const fruitItems = document.getElementsByClassName("fruit");
  const fruitDesc = document.getElementsByClassName("desc");

  for (let i = 0; i < fruitItems.length; i++) {
    const currentFruitText = fruitItems[i].firstChild.textContent.toLowerCase();
    // const currentFruitDesc = fruitDesc[i].firstChild.textContent.toLowerCase();
    if (
      currentFruitText.indexOf(textEntered) === -1
      // && currentFruitDesc.indexOf(textEntered) === -1
    ) {
      fruitItems[i].style.display = "none";
    } else {
      fruitItems[i].style.display = "flex";
    }
  }

  for (let i = 4; i < fruitItems.length; i++) {
    console.log(fruitDesc[0]);
    const currentFruitDesc = fruitDesc[i].firstChild.textContent.toLowerCase();
    console.log(currentFruitDesc);
    if (currentFruitDesc.indexOf(textEntered) === -1) {
      fruitItems[i].style.display = "none";
      console.log("if---");
    } else {
      fruitItems[i].style.display = "flex";
      console.log("else---");
    }
  }
});
