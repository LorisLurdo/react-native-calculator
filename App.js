import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [Num, setNum] = useState('');

  const click = (clickBtn) => {
    if (clickBtn === '=') {
      try {
        setNum(eval(Num));
      } catch (error) {
        setNum('Errore');
      }
    } else if (clickBtn === 'C') {
      setNum('');
    } else if (clickBtn === '%') {
      setNum(Num / 100);
    } else if (clickBtn === 'pm') {
      setNum(Num * -1);
    } else {
      setNum(Num + clickBtn);
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.result}>{Num}</Text>
      <View style={styles.buttoncontainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonAC} onPress={() => click('C')}>
            <Text style={styles.buttonTextAC}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAC} onPress={() => click('pm')}>
            <Text style={styles.buttonTextAC}>±</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAC} onPress={() => click('%')}>
            <Text style={styles.buttonTextAC}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOps} onPress={() => click('/')}>
            <Text style={styles.buttonText}>÷</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => click('7')}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => click('8')}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => click('9')}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOps} onPress={() => click('*')}>
            <Text style={styles.buttonText}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => click('4')}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => click('5')}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => click('6')}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOps} onPress={() => click('–')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => click('1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => click('2')}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => click('3')}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOps} onPress={() => click('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonZero} onPress={() => click('0')}>
            <Text style={styles.buttonTextZero}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => click('.')}>
            <Text style={styles.buttonText}>,</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonOps} onPress={() => click('=')}>
        <Text style={styles.buttonText}>=</Text>
      </TouchableOpacity>
    </View>
  </View>
</View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010101',
    justifyContent: 'flex-end',
  },
  buttoncontainer: {
    backgroundColor: '#000',
    marginBottom: 20,
  },
  result: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonZero: {
    width: 185,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOps: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e39424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonAC: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#A6A6A6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
 },
 buttonTextZero: {
  fontSize: 40,
  fontWeight: 'bold',
  marginRight: 80,
  color: '#fff',
},
buttonTextAC: {
  fontSize: 40,
  fontWeight: 'bold',
  color: '#000',
},
});

export default App;