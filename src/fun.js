function message(event) {
  event.preventDefault();
  let name = prompt("Please provide your name 🙏🏾");
  alert(`Thank you ${name}! The pages will be loaded soon.😉`);
}
let button = document.querySelector("button");
button.addEventListener("click", message);
