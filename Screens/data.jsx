import {View, Text, TextInput, TouchableOpacity, FlatList, Image} from 'react-native'
import { styles } from './register.style';

 const DATA = [
    { id: '1', name: 'Ali' },
    { id: '2', name: 'Mian' },
    { id: '3', name: 'Zulqarnaain' },
    { id: '4', name: 'kashif' },
  ];
export default function Data() {

return (
    <View style={styles.dataCon} >
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <View >
            <Image style={styles.imagestyle} source={{ uri: 'https://img.magnific.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?semt=ais_hybrid&w=740&q=80' }} />
              <Text>{item.name}</Text>
            </View>
          )}
          
        />
    </View>
);

}