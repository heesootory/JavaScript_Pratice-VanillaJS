const FORM = document.querySelector("form");
const END_NUM = document.querySelector("form h3 input");
const GUESS_NUM = document.querySelector("form span input");
const YOU_CHOSE = document.querySelector("#chose");
const RAN_NUM = document.querySelector("#random");
const ANS = document.querySelector("#ans");

function handleNumber(event){
    const guess = GUESS_NUM.value;
    console.log(typeof(END_NUM.value));     //string
    const random = Math.floor(Math.random()*END_NUM.value);
    console.log(random);
    event.preventDefault();
    YOU_CHOSE.classList.remove("hidden");
    YOU_CHOSE.innerText = `You chose: ${guess}`;
    RAN_NUM.classList.remove("hidden");
    RAN_NUM.innerText = `,the machine chose: ${random}`;
    console.log(typeof(guess));     //string    
    console.log(typeof(random));    //number
    if(parseInt(guess) === parseInt(random)){
        ANS.classList.remove("hidden");
        ANS.innerText = "You Won!";
        console.log("won");
    }else{
        ANS.classList.remove("hidden");
        ANS.innerText = "You lost!";
        console.log("lost");
    }
}


FORM.addEventListener("submit", handleNumber);


// document에서 뽑아온 value값은 string이므로, 항상 타입을 확인하고 사용.
