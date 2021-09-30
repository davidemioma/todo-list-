"use strict";

//Selectors
const todoInput = document.querySelector(".todo_input");
const todoBtn = document.querySelector(".todo_btn");
const todoList = document.querySelector(".todo_list");
const filterOption = document.querySelector(".filter_todo");

//Event Listener
todoBtn.addEventListener("click", function (e) {
  addTodo(e);
});

todoList.addEventListener("click", deleteAndCheck);

filterOption.addEventListener("click", filterTodo);

//Functions
function addTodo(e) {
  e.preventDefault();

  if (todoInput.value !== "") {
    //Create todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Create Li inside todoDiv
    const todoLI = document.createElement("li");
    todoLI.classList.add("todo_item");
    todoLI.innerText = todoInput.value;
    todoDiv.appendChild(todoLI);

    //Create Check Mark Button inside todoDiv
    const completedBtn = document.createElement("button");
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedBtn.classList.add("complete_btn");
    todoDiv.appendChild(completedBtn);

    //Create Delete Button inside todoDiv
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.classList.add("delete_btn");
    todoDiv.appendChild(deleteBtn);

    //Append totoDiv to toddList
    todoList.appendChild(todoDiv);
  }
  //Clear todo Input
  todoInput.value = "";
}

function deleteAndCheck(e) {
  const item = e.target;

  //Delete item
  if (item.classList.contains("delete_btn")) {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  //Check item
  if (item.classList.contains("complete_btn")) {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const allTodo = todoList.childNodes;

  allTodo.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;

      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;

      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
