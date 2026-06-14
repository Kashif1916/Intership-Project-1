import {View, Text, TextInput, TouchableOpacity, FlatList, Image} from 'react-native'
import { styles } from './register.style';
import React from 'react';

 
export default function Data() {

const [onlineData, setOnlineData] = React.useState([]);

React.useEffect(() => {
    fetch('https://api.github.com/users')
      .then((response) => response.json())
      .then((data) => setOnlineData(data))
      .catch((error) => console.error(error));
  }, []);
  
return (
    <View  >
        
        <FlatList 
          data={onlineData}
          renderItem={({ item }) => (
            <View style={styles.dataCon} >
            <Text style={styles.itemText}> Data using API </Text>
            <Image style={styles.imagestyle} source={{ uri: item.avatar_url }} />
              <Text style={styles.itemText}>{item.login}</Text>
            </View>
          )}
          
        />
    </View>
);

}