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
    li.addEventListener("click", () => {
      if (li.style.textDecoration === "line-through") {
        li.style.textDecoration = "none";
      } else {
        li.style.textDecoration = "line-through";
      }
    });
    tasksList.appendChild(li);
    const span = document.createElement("span");
    span.textContent = "X";
    span.addEventListener("click", () => {
      tasksList.removeChild(li);
    });
    li.appendChild(span);
  }
  input.value = "";
}
