/**
 * Imports the Axios and getWeather modules.
 *
 * @param {Object} axios The Axios module.
 * @param {Object} getWeather The getWeather module.
 */
import axios from 'axios';
import { getWeather } from './../ts/helfer/weatherCall';

/**
 * Tests that the getWeather function returns a response for Berlin.
 *
 * @param {Function} done The callback function.
 */
it('should get the weather for Berlin', async done => {
  // Get the weather for Berlin.
  const response = await getWeather('Berlin');

  // Assert that the temperature is greater than 0 degrees Celsius.
  expect(response.data.main.temp).toBeGreaterThan(0);

  // Call the done function to indicate that the test has passed.
  done();
});