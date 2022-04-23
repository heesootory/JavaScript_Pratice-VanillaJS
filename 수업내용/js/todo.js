const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// document에서 찾는거는 html파일 전체에서 찾는거지만,
// 특정 태그나 id를 찾아논것 안에서 빠르게 찾을 수 있다.
// = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

const toDos = [];
// localstorage에 저장할 todo 배열

function saveToDos(){           //toDos배열을 Local에 집어넣는 함수.
    localStorage.setItem("todos", toDos);       //key, value
}


function deleteToDo(event){             //어떤 것을 삭제할지 만들기!
    //console.dir(event);             // 속성들을 보면 parentNode나 parentElement가 뭔지 볼수 있다!
    console.log(event.target.parentElement);        //target은 html파일의 element다!
    //parentElement는 그 target element의 부모 엘리먼트를 뜻함!
    //event.target = button
    //event.target.parentElement = li
    const li = event.target.parentElement;
    li.remove();

}

function paintToDo(newToDo){        //저장한 내용 html에 그리기!
    const li = document.createElement("li")     //html 요소 만들기
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.addEventListener("click", deleteToDo);
    button.innerText = "X";
    li.appendChild(span);       //li에 span을 자식태그로 가지게 만듬
    li.appendChild(button);
    span.innerText = newToDo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();     //submit 의 자동새로고침 방지
    const newToDo = toDoInput.value;   //html에서 기입한, todo내용 저장
    toDoInput.value = "";
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);



// localStrage는 오직 텍스트만 저장 가능!