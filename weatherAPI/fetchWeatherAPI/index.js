"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var dotenv = require("dotenv");
dotenv.config({ path: __dirname + '/.env' });
var apiKey = process.env.WEATHER_API_KEY;
var apiUrl = process.env.WEATHER_API_URL;
var city = "atlanta";
var weatherUrl = apiUrl + city + "&units=metric&appid=" + apiKey;
axios_1["default"].get(weatherUrl).then(function (response) {
    var weather = response.data;
    var coordinates = weather.coord;
    var lon = coordinates.lon;
    var lat = coordinates.lat;
    var weatherData = weather.weather[0];
    var id = weatherData.id;
    var main = weatherData.main;
    var description = weatherData.description;
    var icon = weatherData.icon;
    var base = weather.base;
    var mainData = weather.main;
    var temp = mainData.temp;
    var pressure = mainData.pressure;
    var humidity = mainData.humidity;
    var temp_min = mainData.temp_min;
    var temp_max = mainData.temp_max;
    var feel_like = mainData.feel_like;
    var visibility = weather.visibility;
    var wind = weather.wind;
    var speed = wind.speed;
    var deg = wind.deg;
    var clouds = weather.clouds;
    var all = clouds.all;
    var dt = weather.dt;
    var sys = weather.sys;
    var type = sys.type;
    var sysId = sys.id;
    var country = sys.country;
    var sunrise = sys.sunrise;
    var sunset = sys.sunset;
    var timezone = weather.timezone;
    var weatherId = weather.id;
    var name = weather.name;
    var cod = weather.cod;
    logTemprature(temp);
    logWeatherDescriptionAndVisibility(description, visibility);
    logHumidity(humidity);
    // logFeelsLike(feel_like);
    logSunsetAndSunrise(sunrise, sunset);
    logTimezone(timezone);
    logWind(speed, deg);
    logClouds(all);
    logCoordinates(lon, lat);
    // logWeather(weather);
});
var logCoordinates = function (lon, lat) {
    console.log("lon: ".concat(lon, " lat: ").concat(lat));
};
var logSunsetAndSunrise = function (sunrise, sunset) {
    console.log("sunrise: ".concat(sunrise, " sunset: ").concat(sunset));
};
// const logWeather = (weather: Weather) => {
// 	console.log(weather);
// }
var logFeelsLike = function (feel_like) {
    console.log("feel_like: ".concat(feel_like));
};
var logTemprature = function (temp) {
    console.log("temp: ".concat(temp));
};
var logHumidity = function (humidity) {
    console.log("humidity: ".concat(humidity));
};
var logWeatherDescriptionAndVisibility = function (description, visibility) {
    console.log("description: ".concat(description, " visibility: ").concat(visibility));
};
var logTimezone = function (timezone) {
    console.log("timezone: ".concat(timezone));
};
var logWind = function (speed, deg) {
    console.log("speed: ".concat(speed, " deg: ").concat(deg));
};
var logClouds = function (all) {
    console.log("all: ".concat(all));
};
