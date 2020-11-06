import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login_Screen from './screens/login'
import {AppTabNavigator  }from "./components/apptabnavi"
export default function App() {
  return (
   <Login_Screen />





   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
