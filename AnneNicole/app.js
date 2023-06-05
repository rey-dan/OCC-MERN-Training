"use strict"

//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')


//Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


//Functions
function addTodo(event){
  //prevent from submitting
  event.preventDefault();
  //Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //CreateLI
  const newToDo = document.createElement('li');
  newToDo.innerText = todoInput.value;
  newToDo.classList.add('todo-item');
  todoDiv.appendChild(newToDo);



  //CHECK MARK BUTTON
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

    //CHECK TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa-regular fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //APPEND TO LIST
    todoList.appendChild(todoDiv);

  //ADD TO DO TO LOCAL STORAGE
  saveLocalTodos(todoInput.value);

    //Clear todo Input value

    todoInput.value = "";
}



function deleteCheck(e){
  const item = e.target;

  //DELETE TODO
  if(item.classList[0] === "trash-btn"){
    const todo = item.parentElement;
    //Animation
    todo.classList.add("fall");
    removeLocalTodos(todo);
    todo.addEventListener('transitioned', function(){
        todo.remove();
    })
  }

  if(item.classList[0] === "complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
};


function filterTodo(e){
  const todos = todoList.childNodes;

  todos.forEach(function(todo){
    switch(e.target.value){
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if(todo.classList.contains('completed')){
          todo.style.display = "flex";
        }else{
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if(!todo.classList.contains('completed')){
          todo.style.display = "flex";
        }else{
          todo.style.display = "none";
        }
        break;


    }
  });
}


function saveLocalTodos(todo){
  //CHECK -- do I already have thing in there

  let todos;

  if(localStorage.getItem('todos') ===null){
    todos = [];
   }else{
    todos = JSON.parse(localStorage.getItem('todos'));
   }

   todos.push(todo);
   localStorage.setItem('todos', JSON.stringify(todos))
}


function getTodos(){
  let todos;

  if(localStorage.getItem('todos') ===null){
    todos = [];
   }else{
    todos = JSON.parse(localStorage.getItem('todos'));
   }

   todos.forEach(function(todo){
      //Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //CreateLI
  const newToDo = document.createElement('li');
  newToDo.innerText = todo;
  newToDo.classList.add('todo-item');
  todoDiv.appendChild(newToDo);



  //CHECK MARK BUTTON
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

    //CHECK TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa-regular fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //APPEND TO LIST
    todoList.appendChild(todoDiv);

   })
}


function removeLocalTodos(todo){
  let todos;

  if(localStorage.getItem('todos') ===null){
    todos = [];
   }else{
    todos = JSON.parse(localStorage.getItem('todos'));
   }

   const todoIndex = todo.children[0].innerText;
   todos.splice(todos.indexOf(todoIndex), 1);
   localStorage.setItem("todos", JSON.stringify(todos))

}