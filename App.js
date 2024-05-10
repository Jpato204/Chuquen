import React from 'react';
import { StyleSheet, View } from 'react-native';
import CurrencyConverter from './CurrencyConverter';

export default function App() {
  return (
    <View style={styles.container}>
      <CurrencyConverter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});
