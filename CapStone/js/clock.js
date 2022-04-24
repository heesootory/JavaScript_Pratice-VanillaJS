const clock = document.querySelector(".clock");

getTime();
setInterval(getTime, 1000);

function getTime(){
    const date = new Date()
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    clock.innerText = `${hour}:${minute}`;
}