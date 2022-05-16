import { useState } from 'react';

function Weather() {
	async function handleWeatherSubmit(zip) {
		const weather = await fetch(
			`http://api.weatherapi.com/v1/current.json?key=eafc1019a81b4f6799933335221305&q=${zip}&aqi=no`
		);
		const weatherData = await weather.json();

		console.log(weatherData);
		setWeather(weatherData);
	}

	const [useWeatherZip, setWeatherZip] = useState('90210');
	const [useWeather, setWeather] = useState({
		location: {
			name: '',
			region: '',
		},
		current: {
			temp_f: 999,
			condition: {
				text: '',
				icon: '',
				code: 1000,
			},
			wind_mph: 0,
			wind_dir: '',
			humidity: 0,
		},
	});

	return (
		<div>
			<h1>Daily Info</h1>
			<form onSubmit={(e) => e.preventDefault()}>
				<label htmlFor="zipInput">Enter zip code or city for weather:</label>
				<input
					type="text"
					name="zipInput"
					id="weatherTextInput"
					onChange={(e) => setWeatherZip(e.target.value)}
				></input>
				<input
					type="submit"
					value="Get Weather"
					id="weatherSubmitInput"
					onClick={() => handleWeatherSubmit(useWeatherZip)}
				></input>
			</form>
			<div id="weatherBlock">
				<h5>{useWeather?.current?.condition?.text}</h5>
				<img src={useWeather?.current?.condition?.icon} alt=""></img>
				<h5>
					{useWeather?.current.temp_f === 999
						? ''
						: `${useWeather?.current.temp_f}°F`}
				</h5>
				<br />
				<h2>
					{useWeather?.location?.name}
					<br />
					{useWeather?.location?.region}
					<br />
					Wind: {useWeather?.current?.wind_mph} mph
				</h2>
			</div>
		</div>
	);
}

export default Weather;
