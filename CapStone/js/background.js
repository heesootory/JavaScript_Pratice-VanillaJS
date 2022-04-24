const imgs = ["trip1.jpg","trip2.jpg","trip3.jpg","trip4.jpg","trip5.jpg",
"trip6.jpg","trip7.jpg","trip8.jpg","trip9.jpg","trip10.jpg","trip11.jpg",
"trip12.jpg","trip13.jpg","trip14.jpg","trip15.jpg","trip16.jpg","trip17.jpg",
];

const random_image = imgs[Math.floor(Math.random()*(imgs.length))];

const backgroundImage = document.createElement("img");
backgroundImage.id = "backImage";
backgroundImage.src = `img/${random_image}`;
document.body.appendChild(backgroundImage);
