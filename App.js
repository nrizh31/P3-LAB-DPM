import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/appNav/appNav';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
