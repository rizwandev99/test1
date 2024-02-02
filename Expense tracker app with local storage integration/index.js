const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const amt = document.querySelector("#amt");
  const desc = document.querySelector("#desc");
  const category = document.querySelector("#category");
  const list = document.querySelector("#list");

  // Add Functionality:
  const li = document.createElement("li");
  li.innerHTML =
    amt.value +
    " " +
    desc.value +
    " " +
    category.value +
    '<button type="button" class="delete">Delete</button>' +
    '<button type="button" class="edit">Edit</button>';
  console.log(li);
  list.appendChild(li);
  // adding to local storage:
  let obj = {
    amt: amt.value,
    desc: desc.value,
    category: category.value,
  };

  localStorage.setItem(desc.value, JSON.stringify(obj));
});
// Delete functionality
list.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    const listToDelete = event.target.parentElement;
    list.removeChild(listToDelete);

    //removing from local storage:
    let text = listToDelete.innerText;
    text = text.replace("Delete", "").replace("Edit", "");
    let newKey = text.split(" ");
    let deleteKey = newKey[1];
    console.log(deleteKey);
    localStorage.removeItem(deleteKey);
  }
});
