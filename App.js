import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Componentes
import Card from './src/components/Card.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>Open up App.js to start working on your app!</Text>
      <Card />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(80, 80, 80)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
