import { View, Text, Switch, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

export default function DeviceControl({ deviceName, status, onToggle, isTemperature }) {
  return (
    <View style={styles.control}>
      <Text style={styles.deviceName}>{deviceName}</Text>
      {isTemperature ? (
        <View style={styles.temperatureControl}>
          <Text style={styles.label}>Pekanbaru</Text>
          <Slider
            style={styles.slider}
            minimumValue={16}
            maximumValue={30}
            step={1}
            value={status}
            onValueChange={onToggle}
            minimumTrackTintColor="#1E90FF"
            maximumTrackTintColor="#D3D3D3"
            thumbTintColor="#1E90FF"
          />
          <Text style={styles.temperatureValue}>{status}°C</Text>
        </View>
      ) : (
        <Switch
          value={status}
          onValueChange={onToggle}
          thumbColor={status ? "#1E90FF" : "#D3D3D3"}
          trackColor={{ true: "#87CEFA", false: "#D3D3D3" }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  control: {
    marginBottom: 20,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  deviceName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  temperatureControl: {
    width: '100%',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  slider: {
    width: '80%',
    height: 40,
  },
  temperatureValue: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
});
