import {View, Text, Button ,TouchableOpacity} from 'react-native';
import React from 'react';
import { useState } from 'react';
import { styles } from './counter.style';

export default function Counter() {
    const [count, setCount] = useState(0);
    
    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        setCount(count - 1);
    }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.buttonCon } onPress={increment}>
        <Text style={styles.buttonText}>  +  </Text>
            
        </TouchableOpacity>
        <Text style={styles.itemText}>  {count}  </Text>
        <TouchableOpacity style={styles.buttonCon } onPress={decrement}>
             <Text style={styles.buttonText}>  -  </Text>
        </TouchableOpacity>
      
      </View>
  );
}