const input = document.querySelector(".inputTask");
const btnEl = document.querySelector(".addTasks");
const tasksList = document.querySelector(".lists");

btnEl.addEventListener("click", addTasks);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTasks();
  }
});

// Load tasks from localStorage on page load
document.addEventListener("DOMContentLoaded", loadTasks);

function addTasks() {
  if (input.value === "") {
    alert("Invalid Task.");
  } else {
    const li = document.createElement("li");
    li.textContent = input.value; // Use direct assignment instead of +=
    li.addEventListener("click", () => {
      li.style.textDecoration =
        li.style.textDecoration === "line-through" ? "none" : "line-through";
      saveTasks();
    });

    const span = document.createElement("span");
    span.textContent = "X";
    span.addEventListener("click", () => {
      tasksList.removeChild(li);
      saveTasks();
    });

    li.appendChild(span);
    tasksList.appendChild(li);

    input.value = "";
    saveTasks(); // Save tasks after adding a new one
  }
}

// Function to save tasks to localStorage
function saveTasks() {
  const tasks = [];
  const listItems = tasksList.querySelectorAll("li");
  listItems.forEach((item) => {
    tasks.push({
      text: item.textContent.slice(0, -1), // Remove the 'X'
      completed: item.style.textDecoration === "line-through",
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to load tasks from localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.text;
    if (task.completed) {
      li.style.textDecoration = "line-through";
    }
    li.addEventListener("click", () => {
      li.style.textDecoration =
        li.style.textDecoration === "line-through" ? "none" : "line-through";
      saveTasks();
    });

    const span = document.createElement("span");
    span.textContent = "X";
    span.addEventListener("click", () => {
      tasksList.removeChild(li);
      saveTasks();
    });

    li.appendChild(span);
    tasksList.appendChild(li);
  });
}
