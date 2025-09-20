import axios from "axios";

export interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  uvIndex?: number;
}

export async function fetchWeather(lat: number, lon: number): Promise<WeatherData> {
  try {
    const B_URL = import.meta.env.VITE_APP_BACKEND_URL;
    const response = await axios.get(`${B_URL}/api/weather`, {
      params: { lat, lon },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return {
      temperature: 0,
      humidity: 0,
      windSpeed: 0,
      uvIndex: 0,
    };
  }
}

export async function getUserLocation(): Promise<{ lat: number; lon: number }> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation not supported'));
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
      (err) => reject(err)
    );
  });
}
