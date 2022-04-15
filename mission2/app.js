const bd = document.querySelector("body");


function windowColorChange(){
    let winSize = window.innerWidth;
    if(winSize < 400) {
        bd.className = "tooSmall";
    }
    else if(winSize >=400 && winSize < 600){
        bd.className ="normal";
    }
    else{
        bd.className = "tooBig";
    }
}

window.addEventListener("resize", windowColorChange);
