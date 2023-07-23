import { getWeather } from './helfer/weatherCall'

const weather = getWeather('Berlin,de').then(response => response.data);

console.log(weather);

getWeather('Berlin').then((response) => {
    console.log(response.data);
  });

  const response = await getWeather('Berlin');
  console.log("responseData", response.data);