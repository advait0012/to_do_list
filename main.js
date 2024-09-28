import "./styles/styles.scss";

const input = document.querySelector(".inputTask");
const btnEl = document.querySelector(".addTasks");
const tasksList = document.querySelector(".lists");

btnEl.addEventListener("click", addTasks);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTasks();
  }
});

function addTasks() {
  if (input.value === "") {
    alert("Invalid Task.");
  } else {
    const li = document.createElement("li");
    li.textContent += input.value;
    tasksList.appendChild(li);
    li.style.margin = "2rem 0 0 0";
    li.style.listStyleType = "none";
    li.style.border = "1px solid #FF6500"
    li.style.padding = "0.3rem 0 0.4rem 2rem";
    li.style.boxShadow = "3px 3px 1px #FF6500"
    li.style.borderRadius = "0.5rem"
    li.style.width = "22rem"
    input.value = "";
  }
}
