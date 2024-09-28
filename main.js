import "./styles/styles.scss";

const input = document.querySelector(".inputTask");
const btnEl = document.querySelector(".addTasks");
const tasksList = document.querySelector(".lists");

btnEl.addEventListener("click", addTasks);

function addTasks() {
  if (input.value === "") {
    alert('Invalid Task.');
  } else {
    const li = document.createElement("li");
    li.textContent += input.value;
    tasksList.appendChild(li);
    li.style.padding = "1rem";
    li.style.listStyleType = "none";
    input.value = "";
  }
}
