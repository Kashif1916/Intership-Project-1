import {View, Text, TextInput, TouchableOpacity, FlatList, Image} from 'react-native'
import { styles } from './register.style';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import { MotiView } from 'moti';
 
export default function Data() {
    const route = useRoute();
    const {username} = route.params;

const [onlineData, setOnlineData] = React.useState([]);


React.useEffect(() => {
    fetch('https://api.github.com/users')
      .then((response) => response.json())
      .then((data) => setOnlineData(data))
      .catch((error) => console.error(error));
  }, []);
  

return (
    <View  >
      <MotiView
      from={{
        scale: 0,
      }} 
      animate={{
        scale: 1,
      }}
      duration={1000}
      >
        
        <Text style={{fontSize: 40 , color: '#030303' , textAlign: 'center'  }}>Hi, welcome {username}</Text>
        </MotiView>
        
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