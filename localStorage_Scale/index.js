// Write your code below:
function handleFormSubmit(event) {
  event.preventDefault();
  let username = event.target.username.value;
  let email = event.target.email.value;
  let phone = event.target.phone.value;

  const obj = { username, email, phone };
  const obj_stringified = JSON.stringify(obj);
  localStorage.setItem(email, obj_stringified);

  // Adding li elements under ul in html code:
  const li = document.createElement("li");
  li.innerHTML = username + " - " + email + " - " + phone;
  console.log(li);
  const ul = document.getElementById("ul");
  ul.appendChild(li);
}
