const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// document에서 찾는거는 html파일 전체에서 찾는거지만,
// 특정 태그나 id를 찾아논것 안에서 빠르게 찾을 수 있다.
// = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];
// localstorage에 저장할 todo 배열

function saveToDos(){           //toDos배열을 Local에 집어넣는 함수.
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));       //key, value
    // JSON.stringify 로 들어가는 toDos를 문자열로 만들어준다
    // toDos의 요소가 object여도 string으로 변환해줌.
}

function deleteToDo(event){             //어떤 것을 삭제할지 만들기!
    //event에는 이 함수가 eventListener로 부착된 button의 내용이온다.
    //console.dir(event);             // 속성들을 보면 parentNode나 parentElement가 뭔지 볼수 있다!
    console.log(event.target.parentElement);        //target은 html파일의 element다!
    //parentElement는 그 target element의 부모 엘리먼트를 뜻함!
    //event.target = button
    //event.target.parentElement = li
    const li = event.target.parentElement;
    li.remove();                    //html의 태그 삭제
    //console.log(typeof li.id);    -> li.id 의 타입은 string
    //todo.id는 int
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));      //삭제할 id와 다른것들 남겨
    saveToDos();        //filter로 새로운 함수를 만들어 준것이므로, 새로운 배열은 localStorage에 저장
}

function paintToDo(newToDo){        //저장한 내용 html에 그리기!
    const li = document.createElement("li")     //html li요소 만들기
    li.id = newToDo.id;                     //html li 태그의 id 부여가능!
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.addEventListener("click", deleteToDo);
    button.innerText = "x";
    li.appendChild(span);       //li에 span을 자식태그로 가지게 만듬
    li.appendChild(button);
    span.innerText = newToDo.text;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();     //submit 의 자동새로고침 방지
    const newToDo = toDoInput.value;   //html에서 기입한, todo내용 저장
    toDoInput.value = "";           //input에 있는 내용 비워주기
    const newToDoObj = {            //newToDo를 text가 아닌 객체로 만들어주기
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);            // 배열에 객체를 저장
    paintToDo(newToDoObj);         //html에 그리기
    saveToDos();                //
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item){         //forEach에 함수를 사용해도됨.
//     console.log("this is " + item);
//}

const savedToDos = localStorage.getItem(TODOS_KEY); //아무 메모도 안들어있으면, null이다.
//console.log(savedToDos);
if(savedToDos !== null){     //리스트가 내용이 있을때
    const parsedToDos = JSON.parse(savedToDos);
    // JSON.parse는 문자열이었던 리스트를, javascript object로 살아나게 한다.
    //console.log(parsedToDos);
    toDos = parsedToDos;        // 항상 내용이 있을때, 이벤트와 상관없이 toDos배열에 집어넣어서 초기화 시킨다.
    parsedToDos.forEach(paintToDo);  // 우린 그냥 리스트에 있는걸 바로 그려주면됨.
     //parsedToDos.forEach((i) => console.log("this is the turn of" + i));       람다식 가능
    //parsedToDos.forEach(sayHello);       함수사용 - 매개변수 필요없음
} 









// localStrage는 오직 텍스트만 저장 가능!
//forEach는 자동으로 배열의 원소들을 함수로 하나씩 넣어준다.(람다식도 가능)
// js에서는 "arrow function"이라하고 -대신=으로 화살표 만듬.