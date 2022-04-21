const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
];

const btn = document.querySelector("button");
gradation_back_ground();

function changeback(){
    gradation_back_ground();
}

btn.addEventListener("click", changeback);


function gradation_back_ground(){
    const first_color = colors[Math.floor(Math.random()*colors.length)];
    const second_color = colors[Math.floor(Math.random()*colors.length)];
    const back_color = document.querySelector("body");

    back_color.style.background = `linear-gradient(90deg, ${first_color}, ${second_color})`;
}


//태그를 먼저 찾고, css요소에 접근할시, "style.속성" 으로 접근.