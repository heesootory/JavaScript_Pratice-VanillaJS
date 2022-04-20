const clockTitle = document.querySelector(".js-clock");

function D_dayCounter(){
    const Dday = new Date("12 25, 2022 00:00:00");
    const now = new Date();

    let left_seconds = (Dday - now)/1000;
    const left_day = Math.floor(left_seconds/(60*60*24));
    left_seconds %= (60*60*24);
    const left_hours = Math.floor(left_seconds/(60*60));
    left_seconds %= (60*60);
    const left_minutes = Math.floor(left_seconds/60);
    left_seconds %= (60);
    left_seconds = Math.floor(left_seconds);
    clockTitle.innerText = `${left_day}d ${left_hours}h ${left_minutes}m ${left_seconds}s`
}

setInterval(D_dayCounter, 1000);


















