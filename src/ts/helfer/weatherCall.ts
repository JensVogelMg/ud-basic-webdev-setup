import axios from 'axios';

const API_KEY = '624f03ce5e04773104e5771aefae6604';

/**
 * Ruft die Wetterdaten für die angegebene Stadt ab.
 *
 * @param city Die Stadt, für die die Wetterdaten abgerufen werden sollen.
 * @returns Ein Objekt mit den Wetterdaten.
 */
export function getWeather(city: string) {
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
};