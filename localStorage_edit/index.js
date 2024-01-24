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
    const editButton = document.createElement("input");
    deleteButton.type = "button";
    deleteButton.value = "edit";
    deleteButton.onclick = () => {
      localStorage.removeItem(obj.email);
      parentElem.removeChild(childElem);

      const u_name = document.getElementById("username");
      u_name.value = obj.username;
      const u_email = document.getElementById("email");
      u_email.value = obj.email;
      const u_phone = document.getElementById("phone");
      u_phone.value = obj.phone;
    };
    childElem.appendChild(deleteButton);
    childElem.appendChild(editButton);
    parentElem.appendChild(childElem);
  }
  showUserOnScreen(obj);
}
