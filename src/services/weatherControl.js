import { setThermostatTemperature } from './smartHome';
import { getCurrentTemperature } from './smartHome'; // Pastikan fungsi diimpor dengan benar

// Fungsi untuk mengupdate suhu termostat berdasarkan data cuaca
export const updateThermostatBasedOnWeather = async (entityId) => {
  try {
    const temperature = await getCurrentTemperature(); // Dapatkan suhu terkini
    if (temperature !== null) {
      await setThermostatTemperature(entityId, temperature); // Set suhu termostat
      console.log(`Thermostat set to ${temperature}°C based on Pekanbaru weather.`);
    } else {
      console.error('Failed to update thermostat: no valid temperature.');
    }
  } catch (error) {
    console.error('Error updating thermostat:', error.message);
  }
};
