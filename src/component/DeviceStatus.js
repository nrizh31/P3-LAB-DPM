import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DeviceStatus({ lightStatus, tvStatus, fanStatus, thermostatTemperature }) {
  return (
    <View style={styles.statusContainer}>
      <Text style={styles.status}>Lampu is {lightStatus ? 'On' : 'Off'}</Text>
      <Text style={styles.status}>TV is {tvStatus ? 'On' : 'Off'}</Text>
      <Text style={styles.status}>Kipas Angin is {fanStatus ? 'On' : 'Off'}</Text>
      <Text style={styles.status}>Thermostat is set to {thermostatTemperature}°C</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  statusContainer: {
    marginTop: 20,
  },
  status: {
    fontSize: 16,
  },
});
