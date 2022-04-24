const imgs = ["trip1.jpg","trip3.jpg","trip4.jpg","trip5.jpg",
"trip7.jpg","trip8.jpg","trip11.jpg",
"trip12.jpg","trip15.jpg","trip16.jpg","trip17.jpg",
];

const random_image = imgs[Math.floor(Math.random()*(imgs.length))];
console.log(random_image);
const backgroundImage = document.createElement("img");
backgroundImage.id = "backImage";
backgroundImage.src = `img/${random_image}`;
document.body.appendChild(backgroundImage);
