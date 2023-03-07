const enterButton = document.querySelector("#enter");
const todoList = document.querySelector("#list");
const newToDoInput = document.querySelector("#new-todo");
const showDateButton = document.getElementById('show-date');
const completedList = document.querySelector("#completed-list");


enterButton.addEventListener('click', (event) => {
    const newToDo = document.createElement("li");
    newToDo.textContent = newToDoInput.value;
    const deleteButton = createDeleteButton(newToDo);
    todoList.appendChild(newToDo);
    const completeButton = createcompleteButton(newToDo);
    newToDo.appendChild(completeButton);
    newToDo.appendChild(deleteButton);
    newToDoInput.value = '';
});

showDateButton.addEventListener('click', (event) =>{
    const currentDate = new Date().toLocaleDateString();
    alert(currentDate);
});


const createDeleteButton = (toDoItem) => {
  const deleteButton = document.createElement("button");
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click',(event) => {
      toDoItem.remove();
  });
  return deleteButton;
}

const createcompleteButton = (toDoItem) => {
    const completeButton = document.createElement("button");
    completeButton.innerText ='complete';
    completeButton.addEventListener('click', (event) => {
        markAsComplete(toDoItem);
    })
    return completeButton;
}

const markAsComplete = (toDoItem) => {
  const completedItem = document.createElement('li');
  completedItem.textContent = toDoItem.textContent;
  toDoItem.setAttribute("style", "text-decoration: line-through");
  completedList.appendChild(completedItem);
  todoList.remove(toDoItem);
  
}

