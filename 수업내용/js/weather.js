const API_KEY = "03c418d0c0b47d6a9d0852c39381cec9";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    //console.log(url);       //url잘 가는지 확인.
    fetch(url).then(response => response.json()).then(data =>{
        //console.log(data.name, data.weather[0].description)
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        const name = data.name;
        const weather_des = data.weather[0].description;
        const temp = data.main.temp;

        weather.innerText = `${weather_des} / ${temp}`;
        city.innerText = name;
    });

    //fetch로 js가 url요청,
    //response 데이터를 json형식으로 바꿔주고,
    // data를 가지고 이용
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}





navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// getCurrentPosition(성공시, 실패시)