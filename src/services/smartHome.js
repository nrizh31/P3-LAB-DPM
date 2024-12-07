export const getCurrentTemperature = async () => {
  try {
    const response = await axios.get(`${OPENWEATHER_API_URL}/weather`, {
      params: {
        q: 'Pekanbaru',
        units: 'metric', // Gunakan Celsius
        appid: OPENWEATHER_API_KEY, // Gunakan API Key dari constants
      },
    });

    const temperature = response.data.main.temp; // Suhu dalam Celsius
    console.log(`Current temperature in Pekanbaru: ${temperature}°C`); // Log untuk memverifikasi
    return temperature;
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    return null;
  }
};
