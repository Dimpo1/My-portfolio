function message() {
  let name = prompt("Please provide your name 🙏🏾");
  alert(`Thank you ${name}! The pages will be loaded soon.😉`);
  console.log(name);
}
let page = document.querySelectorAll(".page");
page.addEventListener("click", message);
