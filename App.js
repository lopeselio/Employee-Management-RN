import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import Home from './screens/Home'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateEmployee from './screens/CreateEmployee'
import Profile from './screens/Profile'

export default function App() {
  return (
    <View style={styles.container}>
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    marginTop: Constants.statusBarHeight
  },
});
