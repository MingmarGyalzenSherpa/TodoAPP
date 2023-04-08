const taskInputEl = document.querySelector(".taskInput");
const submitBtn = document.querySelector(".submit");
const taskList = document.querySelector(".tasks");

let todos = JSON.parse(localStorage.getItem("tasks")) || [];
let items;
let count = 0;
console.log(count);
todos?.forEach((todo) => {
  appendToList(todo);
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let task = [];
  if (taskInputEl.value != "") {
    todos.push(taskInputEl.value);
    appendToList(taskInputEl.value);
    taskInputEl.value = "";
    console.log(todos);
  }
  localStorage.setItem("tasks", JSON.stringify(todos));
});

function appendToList(task) {
  let listItem = document.createElement("li");
  listItem.dataset.id = ++count;
  listItem.textContent = task;
  taskList.insertAdjacentElement("afterbegin", listItem);
}
