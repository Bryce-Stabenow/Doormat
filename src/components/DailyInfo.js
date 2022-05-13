import Weather from './Weather';

function DailyInfo() {
	return (
		<div className="dailyInfo">
			<h1>Daily Info</h1>
			<Weather />
		</div>
	);
}

//TODO: Update to fetch weather information from given location
//TODO: Update to fetch quote of the day(?)

export default DailyInfo;
