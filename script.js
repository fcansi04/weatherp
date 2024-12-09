const searhInput = document.querySelector(".input");

const weather_temp = document.querySelector(".weather_temp");
const weather_description = document.querySelector(".weather_description");

const API_KEY = "4f4d66bdd5fe48a5b81151917240912";
const getWeather = async (city) => {
  const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}`;

  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    weather_description.innerText = data?.current?.condition?.text;
    weather_temp.innerText = data?.current?.temp_c;
  } catch (error) {
    console.log(error);
  }
};

searhInput.addEventListener("keyup", (e) => {
  const cityName = searhInput.value.trim();
  if (e.key == "Enter" && cityName) {
    getWeather(cityName);
  }
});
