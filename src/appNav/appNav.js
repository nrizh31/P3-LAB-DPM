import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/homeScreen';


const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Naufal Rizh Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
