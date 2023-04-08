const taskInputEl = document.querySelector(".taskInput");
const submitBtn = document.querySelector(".submit");
const deleteBtn = document.querySelectorAll(".delete-btn");
const taskList = document.querySelector(".tasks");

let todos = JSON.parse(localStorage.getItem("tasks")) || [];
let items;
let count = 0;

//load all the todos
function loadAllList() {
  taskList.innerHTML = "";
  todos?.forEach((todo) => {
    todo[0] = ++count;
    appendToList(todo[1]);
  });
}
loadAllList();

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let task = [];
  if (taskInputEl.value != "") {
    //update count and insert into todo array
    task.push(++count);
    task.push(taskInputEl.value);
    appendToList(taskInputEl.value);
    taskInputEl.value = "";
    todos.push(task);
  }
  localStorage.setItem("tasks", JSON.stringify(todos));
});

taskList.addEventListener("click", function (e) {
  if (e.target.closest(".delete-btn")) {
    //delete element with the index = count -1
    let id = e.target.closest("li").dataset.id;
    todos.splice(id - 1, 1);
    //reset and update index
    count = 0;
    loadAllList();
    localStorage.setItem("tasks", JSON.stringify(todos));
  }
});

function appendToList(task) {
  let listItem = document.createElement("li");
  listItem.dataset.id = count;
  listItem.innerHTML = `<span> ${task} </span> <button class = "delete-btn"> <i class= "fas fa-trash"> </i> </button>`;
  taskList.insertAdjacentElement("afterbegin", listItem);
}
