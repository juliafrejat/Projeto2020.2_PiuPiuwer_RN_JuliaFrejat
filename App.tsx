import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppTabs from './src/routes/AppTabs';
//import { AppLoading } from 'expo';

export default function App() {
  return (
    <>
      <AppTabs />
      <StatusBar style="auto" />
    </>
  );
}