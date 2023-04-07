const taskInputEl = document.querySelector(".taskInput");
const submitBtn = document.querySelector(".submit");
const taskList = document.querySelector(".tasks");

let todos = JSON.parse(localStorage.getItem("tasks"));
let items;

todos.forEach((todo) => {
  appendToList(todo);
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  todos.push(taskInputEl.value);
  appendToList(taskInputEl.value);
  taskInputEl.value = "";

  localStorage.setItem("tasks", JSON.stringify(todos));
});

function appendToList(task) {
  let listItem = document.createElement("li");
  listItem.textContent = task;
  taskList.insertAdjacentElement("afterbegin", listItem);
}
