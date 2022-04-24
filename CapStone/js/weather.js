const API_KEY = "03c418d0c0b47d6a9d0852c39381cec9";
const city = document.querySelector("#city");
const weather = document.querySelector("#weather");
const temp = document.querySelector("#temp");


function possible(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

    fetch(url).then(response => response.json()).then(data =>{


        const name = data.name;
        const weather_des = data.weather[0].description;
        const temperature = data.main.temp;

        weather.innerText = weather_des;
        city.innerText = name;
        temp.innerText = `${temperature}°`;
    });
}

function impossible(){
    alert("날씨 정보를 불러올 수 없습니다.");
}




navigator.geolocation.getCurrentPosition(possible, impossible);
// getCurrentPosition(성공시, 실패시)