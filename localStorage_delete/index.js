// Write your code below:
function handleFormSubmit(event) {
  event.preventDefault();
  let username = event.target.username.value;
  let email = event.target.email.value;
  let phone = event.target.phone.value;

  const obj = { username, email, phone };
  const obj_stringified = JSON.stringify(obj);
  localStorage.setItem(email, obj_stringified);

  function showUserOnScreen(obj) {
    const parentElem = document.getElementById("ul");
    const childElem = document.createElement("li");
    childElem.textContent =
      obj.username + " - " + obj.email + " - " + obj.phone;

    const deleteButton = document.createElement("input");
    deleteButton.type = "button";
    deleteButton.value = "delete";
    deleteButton.onclick = () => {
      localStorage.removeItem(obj.email);
      parentElem.removeChild(childElem);
    };
    childElem.appendChild(deleteButton);
    parentElem.appendChild(childElem);
  }
  showUserOnScreen(obj);
}
