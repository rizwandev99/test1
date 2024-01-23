function submitForm(event) {
  event.preventDefault();
  let username = event.target.username.value;
  let email = event.target.email.value;
  let number = event.target.number.value;
  const obj = {
    username,
    email,
    number,
  };
  const obj_stringify = JSON.stringify(obj);
  localStorage.setItem("userdetails", obj_stringify);
}
