// CurrencyConverter.js

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import CurrencyInput from './CurrencyInput';
import { getExchangeRate } from './CurrencyService';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('1');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      const rate = await getExchangeRate(fromCurrency, toCurrency);
      setExchangeRate(rate);
    };

    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  const handleConversion = () => {
    if (!exchangeRate) return;

    const result = parseFloat(amount) * exchangeRate;
    alert(`${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`);
  };

  return (
    <View style={styles.container}>
      <CurrencyInput
        label="From"
        value={amount}
        currency={fromCurrency}
        onValueChange={setAmount}
        onCurrencyChange={setFromCurrency}
      />
      <CurrencyInput
        label="To"
        value={(parseFloat(amount) * exchangeRate).toFixed(2)}
        currency={toCurrency}
        editable={false}
      />
      <TouchableOpacity onPress={handleConversion} style={styles.button}>
        <Text style={styles.buttonText}>Convert</Text>
      </TouchableOpacity>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CurrencyConverter;
