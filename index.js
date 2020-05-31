const title = document.querySelector("#title");
console.log(title);
const BASE_COLOR = "rgb(52, 73, 74)";
const OTHER_COLOR = "#7f8c";

function handleClick() {
  const cur = title.style.color;
  if (cur === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}
function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}
init();
