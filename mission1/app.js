const title = document.querySelector("div.hello:first-child h1");

const colors = ["Orange", "Green", "Blue", "Purple"];

function superEventHandler(event){
    if(event.type == "contextmenu"){
        title.style.color = colors[0];
        title.innerText = "You just a right click!";
    }
    else if(event.type == "mouseenter"){
        title.style.color = colors[1];
        title.innerText = "The mouse is here!";
    }
    else if(event.type == "mouseleave"){
        title.style.color = colors[2];
        title.innerText = "The mouse is gone!";
    }
    else if(event.type == "resize"){
        title.style.color = colors[3];
        title.innerText = "You just resized!";
    }
}

window.addEventListener("contextmenu", superEventHandler);
window.addEventListener("resize", superEventHandler)
title.addEventListener("mouseenter", superEventHandler);
title.addEventListener("mouseleave", superEventHandler);

// addEventListener 함수는 콜백함수로서, 발생한 이벤트를 설명하는 
// event 객체를 유일하게 생성한다.!!!