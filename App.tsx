import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppTabs from './src/routes/AppTabs';
import AuthStack from './src/routes/AuthStack';
//import { AppLoading } from 'expo';

export default function App() {
  return (
    <>
      <AuthStack />
      <StatusBar style="auto" />
    </>
  );
}