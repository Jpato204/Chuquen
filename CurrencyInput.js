// CurrencyInput.js

import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';

const CurrencyInput = ({ label, value, currency, onValueChange, onCurrencyChange, editable = true }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value.toString()}
          onChangeText={onValueChange}
          keyboardType="numeric" // Teclado numérico solo para el campo de entrada de cantidad
          editable={editable}
        />
        <TextInput
          style={styles.currency}
          value={currency}
          onChangeText={onCurrencyChange}
          editable={false}
        />
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: windowWidth * 0.9, // Ajusta el ancho al 90% del ancho de la ventana
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  currency: {
    width: 70,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
  },
});

export default CurrencyInput;
