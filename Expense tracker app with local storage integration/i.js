// adding to local storage:
let obj = {
  amt: amt.value,
  desc: desc.value,
  category: category.value,
};

localStorage.setItem(desc.value, JSON.stringify(obj));
