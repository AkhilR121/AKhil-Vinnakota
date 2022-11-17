

/*Creating Div's */
//1. Search Div
let searchCity = async () => {
	let cityInput = document.getElementById('city-input').value

	let data = await getWeatherData(cityInput)		//without async/await thisline will execute as last(executes 2nd)
	showWeatherData(data)		//executes 1st, So JS don't no what (data) is incoming to showWeatherData(data) function

}


//To get the City Weather Data
let getWeatherData = (cityInput) => {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '285fdfa235mshf7d17017b58702cp19e0dbjsncd8b1b13b014',
			'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
		}
	};

	return fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${cityInput}`, options)
	.then(response => response.json())		//Comming Response will be in JSON format
	.then(data => data)		//Here we return the data
	.catch(err => console.error(err));

}


let showWeatherData= (weatherData) => {
	let temp = document.getElementById('temp')
	let weatherType = document.getElementById('weather-type')
	let Humidity = document.getElementById('humidity')
	let Pressure = document.getElementById('pressure')
	let cityName = document.getElementById('city-name')

	cityName.innerText = `${weatherData.location.city}`
	temp.innerText = `${weatherData.current_observation.condition.temperature}`
	weatherType.innerText = `${weatherData.current_observation.condition.text}`
	Humidity.innerText = `${weatherData.current_observation.atmosphere.humidity}`
	Pressure.innerText = `${weatherData.current_observation.atmosphere.pressure}`
}
/*
Data We want to fetch(** mandatory)
1.City  **
2.Temperature **
3.Humidity
4.Pressure
5.Conditions {Text: Sunny}  **
*/