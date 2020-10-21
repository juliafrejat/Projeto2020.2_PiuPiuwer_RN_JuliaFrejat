import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';
//import AppTabs from './src/routes/AppTabs';
//import AuthStack from './src/routes/AuthStack';

import AppProvider from './src/hooks';
//import { AppLoading } from 'expo';

export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        <StatusBar style="auto" />
        <Routes />
      </AppProvider>
    </NavigationContainer>
    
  );
}