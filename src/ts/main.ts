import { getWeather } from './helfer/weatherCall';

const weather = getWeather('Berlin,de').then(response => response.data);

console.log(weather);