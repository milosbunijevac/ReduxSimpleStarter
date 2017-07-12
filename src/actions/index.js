import axios from 'axios';

const API_KEY = '7c9489c275c2ae169fdb6e91120a9104';
//http://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=b1b15e88fa797225412429c1c50c122a1


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(ZIP_CODE) {
  const ROOT_URL = `api.openweathermap.org/data/2.5/weather?zip=${ZIP_CODE},us&appid=${API_KEY}`;
  const request = axios.get(ROOT_URL);
  return {
    type: FETCH_WEATHER,
    payload: request
  }

}