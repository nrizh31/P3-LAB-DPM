import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { updateThermostatBasedOnWeather } from './weatherControl';

const SmartThermostat = () => {
  const [temperature, setTemperature] = useState(null);

  const handleUpdateThermostat = async () => {
    const entityId = 'climate.living_room'; // Ganti dengan ID termostat Anda
    const temp = await updateThermostatBasedOnWeather(entityId); // Perbarui termostat berdasarkan cuaca
    setTemperature(temp);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Smart Thermostat</Text>
      <Text>
        Current Temperature: {temperature !== null ? `${temperature}°C` : 'Loading...'}
      </Text>
      <Button title="Update Thermostat" onPress={handleUpdateThermostat} />
    </View>
  );
};

export default SmartThermostat;
