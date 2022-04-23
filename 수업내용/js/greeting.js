const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDE_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();     
    const username = loginInput.value;
    loginForm.classList.add(HIDDE_CLASSNAME);   //html의 변수에서 class를 삭제, 추가 할 수 있다.
    localStorage.setItem(USERNAME_KEY, username);   
    paintGreetings(username);
}

//페이지가 열였을때, (새로고침시) 언제나 실행.
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDE_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
}else{
    //greeting
    paintGreetings(savedUsername);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDE_CLASSNAME);
}
// localStorage : 검사창 application에서 확인 가능한 메모리
// setItem -> 값 저장
// getItem -> 값 가져오기
// preventDefault -> 웹의 기본동작을 막는 역할.
//(이함수는 submit이 일어날때 동작하는데, 
//submit의 기본동작은 새로고침이 포홤되어 있기 때문에 멈춰줘야함.)