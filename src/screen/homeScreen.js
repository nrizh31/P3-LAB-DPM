import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DeviceControl from '../component/DeviceControl';
import DeviceStatus from '../component/DeviceStatus';
import { toggleSmartDevice, setThermostatTemperature as setThermostatTemperatureInSmartHome } from '../services/smartHome';

export default function HomeScreen() {
  const [lightStatus, setLightStatus] = useState(false);
  const [tvStatus, setTvStatus] = useState(false);
  const [fanStatus, setFanStatus] = useState(false);
  const [thermostatTemperature, setThermostatTemperatureState] = useState(22);

  const toggleLight = async () => {
    const newStatus = !lightStatus;
    setLightStatus(newStatus);
    await toggleSmartDevice('light', newStatus);
  };

  const toggleTV = async () => {
    const newStatus = !tvStatus;
    setTvStatus(newStatus);
    await toggleSmartDevice('tv', newStatus);
  };

  const toggleFan = async () => {
    const newStatus = !fanStatus;
    setFanStatus(newStatus);
    await toggleSmartDevice('fan', newStatus);
  };

  const changeTemperature = async (temp) => {
    setThermostatTemperatureState(temp);
    await setThermostatTemperatureInSmartHome(temp);  // Ganti nama fungsi disini
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Smart Home</Text>
      <DeviceControl
        deviceName="Lampu"
        status={lightStatus}
        onToggle={toggleLight}
      />
      <DeviceControl
        deviceName="TV"
        status={tvStatus}
        onToggle={toggleTV}
      />
      <DeviceControl
        deviceName="Kipas Angin"
        status={fanStatus}
        onToggle={toggleFan}
      />
      <DeviceControl
        deviceName="Thermostat"
        status={thermostatTemperature}
        onToggle={changeTemperature}
        isTemperature={true}
      />
      <DeviceStatus 
        lightStatus={lightStatus} 
        tvStatus={tvStatus} 
        fanStatus={fanStatus} 
        thermostatTemperature={thermostatTemperature} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
