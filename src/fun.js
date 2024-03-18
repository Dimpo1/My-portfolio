function message() {
  let name = prompt("Please provide your name 🙏🏾");
  alert(`Thank you ${name}! The pages will be loaded soon.😉`);
}
let button = document.querySelector("#page");
button.addEventListener("click", message);
