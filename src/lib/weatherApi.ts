import axios from 'axios';

const BASE_URL = 'https://api.open-meteo.com/v1/forecast';

export interface WeatherData {
  temperature: number; // in Celsius
  humidity: number; // in percentage
  windSpeed: number; // in km/h
  uvIndex?: number; // optional, can be fetched from another API if needed
}

export async function fetchWeather(locationOrLat: string | number, lon?: number): Promise<WeatherData> {
  try {
    let coordinates: { lat: number; lon: number };

    if (typeof locationOrLat === 'string') {
      // For Indian cities, we'll use coordinates
      coordinates = getIndianCityCoordinates(locationOrLat);
    } else if (typeof locationOrLat === 'number' && lon !== undefined) {
      coordinates = { lat: locationOrLat, lon };
    } else {
      throw new Error('Invalid location parameters');
    }

    const response = await axios.get(BASE_URL, {
      params: {
        latitude: coordinates.lat,
        longitude: coordinates.lon,
        current_weather: true,
        hourly: 'relative_humidity_2m',
        timezone: 'auto',
      },
    });

    const data = response.data;
    const currentWeather = data.current_weather;
    const hourlyHumidity = data.hourly.relative_humidity_2m[0]; // First hour

    return {
      temperature: currentWeather.temperature,
      humidity: hourlyHumidity,
      windSpeed: currentWeather.windspeed,
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    // Fallback to mock data
    return {
      temperature: 24,
      humidity: 68,
      windSpeed: 12,
    };
  }
}

export async function getUserLocation(): Promise<{ lat: number; lon: number }> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by this browser'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        console.error('Error getting user location:', error);
        // Fallback to Delhi coordinates
        resolve({ lat: 28.6139, lon: 77.2090 });
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000, // 5 minutes
      }
    );
  });
}

function getIndianCityCoordinates(city: string): { lat: number; lon: number } {
  const cities: Record<string, { lat: number; lon: number }> = {
    'delhi': { lat: 28.6139, lon: 77.2090 },
    'mumbai': { lat: 19.0760, lon: 72.8777 },
    'bangalore': { lat: 12.9716, lon: 77.5946 },
    'chennai': { lat: 13.0827, lon: 80.2707 },
    'kolkata': { lat: 22.5726, lon: 88.3639 },
    'hyderabad': { lat: 17.3850, lon: 78.4867 },
    'pune': { lat: 18.5204, lon: 73.8567 },
    'ahmedabad': { lat: 23.0225, lon: 72.5714 },
    'jaipur': { lat: 26.9124, lon: 75.7873 },
    'lucknow': { lat: 26.8467, lon: 80.9462 },
  };

  const normalizedCity = city.toLowerCase();
  return cities[normalizedCity] || cities['delhi']; // Default to Delhi
}
