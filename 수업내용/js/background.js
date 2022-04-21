const images = ["0.jpg","1.jpg","2.jpg","3.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
// createElement 는 없는 태그를 만들 수 있다.(일반적으로 있는 태그를 찾는것과 달리)
bgImage.src = `img/${chosenImage}`;
//img태그를 만들었고, img는 애초에 src를 넣어줘야 하기때문에, 속성으로 사용할 수 있다.
console.log(bgImage);

document.body.appendChild(bgImage);
//appendChild는 태그의 뒤단에 붙히기. prependChild는 앞단에 붙힐 수 있다.

