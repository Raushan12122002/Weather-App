const inputbox = document.querySelector(".inpute-box");
const searchbtn = document.querySelector("#searchbtn");
const wheather_img = document.querySelector(".wheather-img");
const temperature = document.querySelector(".temperature");
const descriiption = document.querySelector(".descriiption");
const Humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind-speed");
const deg = document.getElementById("deg");

/*const api = https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key};*/

async function checkweather(city) {
  const api_key = "9f45ebd0650e31f05f592bf562ae7934";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  const weather_data = await fetch(`${url}`).then((response) =>
    response.json()
  );

  Humidity.innerHTML = weather_data.main.humidity;
  temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}0°C`;
  wind.innerHTML = `${weather_data.wind.speed}`;
  deg.innerHTML = `${weather_data.wind.deg}`;
  descriiption.innerHTML = `${weather_data.weather[0].description}`;


switch(weather_data.weather[0].main){
case 'Clouds':
wheather_img.src = "cloud-fog-mist-photo-32.png";
break;
case 'Clear':
wheather_img.src = "67-679074_sun-png-transparent.png";
break;
case 'Mist':
wheather_img.src = "459-4596881_download-sun-png-transparent-background-clipart-clip-diwali.png";
break;
case 'Rain':
wheather_img.src = "kissclipart-rain-cloud-transparent-background-clipart-rain-clo-2fd3bc38b7d12aae.png";
break;
case 'Snow':
wheather_img.src = "Snow-PNG-Image-File.png";
break;
}





  console.log(weather_data);
}

searchbtn.addEventListener("click", () => {
    if(inputbox.value <= 0){
        alert("Please inter your city&contry name")
        }else{
            checkweather(inputbox.value);
        }
        
        inputbox.value = '';

});
