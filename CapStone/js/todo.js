const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-form input")
const toDoList = document.querySelector("#todo-list");

const TODOKEY = "todos";
let todos = [];

function handleToDoList(event){
    event.preventDefault();
    const newToDoObj = {
        text: toDoInput.value,
        id: Date.now(),
    };
    toDoInput.value = "";
    console.log(newToDoObj.text);
    todos.push(newToDoObj);
    saveToDo();
    paintList(newToDoObj);
}

toDoForm.addEventListener("submit", handleToDoList);

function saveToDo(){
    localStorage.setItem(TODOKEY, JSON.stringify(todos));
}

function paintList(newToDoObj){
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.addEventListener("click", deleteList);
    span.innerText = newToDoObj.text;
    button.innerText = "완료! / 삭제";
    toDoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);
    
}

function deleteList(event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveToDo();
}

const savedList = localStorage.getItem(TODOKEY);

if(savedList !== null){
    const parseList = JSON.parse(savedList);
    todos = parseList;
    parseList.forEach(paintList);

}

