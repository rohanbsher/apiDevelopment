import axios from 'axios';

const city = "atlanta"
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=633548baa1a70c5a65f44788038b589e"

interface Weather {
	coord: {
		lon: number;
		lat: number;
	}
	weather: {
		id: number;
		description: string;
		main: string;
		icon: string;
	}[]
	base: string;
	main: {
		temp: number;
		pressure: number;
		humidity: number;
		temp_min: number;
		temp_max: number;
		feel_like: number;
	}
	visibility: number;
	wind: {
		speed: number;
		deg: number;
	}
	clouds: {
		all: number;
	}
	dt: number;
	sys: {
		type: number;
		id: number;
		country: string;
		sunrise: number;
		sunset: number;
	}
	timezone: number;
	id: number;
	name: string;
	cod: number;
}

axios.get(weatherUrl).then(response => {
	const weather = response.data as Weather;

	const coordinates = weather.coord;
	const lon = coordinates.lon;
	const lat = coordinates.lat;
	const weatherData = weather.weather[0];
	const id = weatherData.id;
	const main = weatherData.main;
	const description = weatherData.description;
	const icon = weatherData.icon;
	const base = weather.base;
	const mainData = weather.main;
	const temp = mainData.temp;
	const pressure = mainData.pressure;
	const humidity = mainData.humidity;
	const temp_min = mainData.temp_min;
	const temp_max = mainData.temp_max;
	const feel_like = mainData.feel_like;
	const visibility = weather.visibility;
	const wind = weather.wind;
	const speed = wind.speed;
	const deg = wind.deg;
	const clouds = weather.clouds;
	const all = clouds.all;
	const dt = weather.dt;
	const sys = weather.sys;
	const type = sys.type;
	const sysId = sys.id;
	const country = sys.country;
	const sunrise = sys.sunrise;
	const sunset = sys.sunset;
	const timezone = weather.timezone;
	const weatherId = weather.id;
	const name = weather.name;
	const cod = weather.cod;

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

const logCoordinates = (lon: number, lat: number) => {
	console.log(`lon: ${lon} lat: ${lat}`);
};

const logSunsetAndSunrise = (sunrise: number, sunset: number) => {
	console.log(`sunrise: ${sunrise} sunset: ${sunset}`);
};

// const logWeather = (weather: Weather) => {
// 	console.log(weather);
// }

const logFeelsLike = (feel_like: number) => {
	console.log(`feel_like: ${feel_like}`);
}

const logTemprature = (temp: number) => {
	console.log(`temp: ${temp}`);
}

const logHumidity = (humidity: number) => {
	console.log(`humidity: ${humidity}`);
}

const logWeatherDescriptionAndVisibility = (description: string, visibility: number) => {
	console.log(`description: ${description} visibility: ${visibility}`);
}

const logTimezone = (timezone: number) => {
	console.log(`timezone: ${timezone}`);
}

const logWind = (speed: number, deg: number) => {
	console.log(`speed: ${speed} deg: ${deg}`);
}

const logClouds = (all: number) => {
	console.log(`all: ${all}`);
}


