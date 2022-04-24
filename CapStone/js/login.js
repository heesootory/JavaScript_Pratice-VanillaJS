const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

const localStorage_username = localStorage.getItem(USERNAME_KEY);

if(localStorage_username === null){     
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", saveUserLogin);
}else{
    paintGreeting(localStorage_username);
}

function saveUserLogin(event){
    event.preventDefault();
    const USERNAME = loginInput.value;          
    localStorage.setItem(USERNAME_KEY, USERNAME);
    loginForm.classList.add(HIDDEN_CLASS);
    paintGreeting(USERNAME);
}

function paintGreeting(USERNAME){
    greeting.innerText = `Hello! ${USERNAME}`;
    greeting.classList.remove(HIDDEN_CLASS);
}

