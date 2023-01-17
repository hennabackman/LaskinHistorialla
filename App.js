import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [calculations, setCalculations] = useState([]);

  const handleAddition = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
    setCalculations([...calculations, { calculation: `${num1} + ${num2} = ${sum}` }]);
  }

  const handleSubtraction = () => {
    const difference = parseFloat(num1) - parseFloat(num2);
    setResult(difference);
    setCalculations([...calculations, { calculation: `${num1} - ${num2} = ${difference}` }]);
  }
  const HistoryHeader = () => {
    return (
        <Text style={styles.headerText}>History</Text>
    );
  }

  return (
    <View>
      <View style={styles.resultContainer}>
        <Text 
        style={[styles.resultText, {marginTop: 200}]}>{"Result: "+result}
        </Text>
      </View>
      <TextInput
        keyboardType='numeric'
        value={num1}
        onChangeText={text => setNum1(text)}
        placeholder="Enter first number"
        style={styles.input}
      />
      <TextInput
        keyboardType='numeric'
        value={num2}
        onChangeText={text => setNum2(text)}
        placeholder="Enter second number"
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
      <Button
      title='+'
      onPress={handleAddition}
      style={styles.button}
      />
      <Button
      title='-'
      onPress={handleSubtraction}
      style={styles.button}
      />
      </View>
      <FlatList
      ListHeaderComponent={<HistoryHeader />}
      data={calculations}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
      <Text style={styles.calculationText}>{item.calculation}</Text>
  )}
/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    alignSelf: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10
  },
  button: {
    margin: 10,
    width: '50%',
    alignSelf: 'center'
  },
  resultContainer: {
    alignSelf: 'center',
    marginTop: 20
  },
  resultText: {
    fontSize: 20,
    alignSelf: 'center'
  },
  calculationText: {
    fontSize: 16,
    alignSelf: 'center'
  },
  headerText: {
    margin: 20,
    fontSize: 16,
    alignSelf: 'center'
  },


});

export default Calculator;
