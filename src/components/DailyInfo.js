import Weather from './Weather';

function DailyInfo({ useWeather, setWeather, useWeatherZip, setWeatherZip }) {
	return (
		<div className="dailyInfo">
			<Weather
				useWeather={useWeather}
				setWeather={setWeather}
				useWeatherZip={useWeatherZip}
				setWeatherZip={setWeatherZip}
			/>
		</div>
	);
}

//TODO: Update to fetch weather information from given location
//TODO: Update to fetch quote of the day(?)

export default DailyInfo;
