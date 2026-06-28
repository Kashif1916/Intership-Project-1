import { View , Image , Text , TextInput  ,TouchableOpacity } from 'react-native';
import {styles} from './register.style';
import Register from './register';
import { useNavigation } from '@react-navigation/native';
import {Button} from '../components';
import {Ionicons} from '@expo/vector-icons';
import React from 'react';


export default function Home() {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function onPressLoginButton()  {

    navigation.navigate('Data',{username});
  }

  function onPressButton()  {

    navigation.navigate('Register');
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#fdfdfd' ,
       justifyContent: 'Top' , alignItems: 'center' , }} >
      <Image style={{width: 100, height: 100 , marginTop: 100 ,alignSelf: 'center'}} 
      source={{ uri: 'https://cdn.pixabay.com/photo/2024/01/08/10/19/ai-generated-8495240_1280.png' }} />
     <Text style={{fontSize: 40 , color: '#030303' , textAlign: 'center'  }}>
      Login
      </Text>
      
      <View style={{width: '100%' , marginTop: 20}}>
     
        <TextInput 
      style={styles.inputstyle } placeholder="Username"  onChangeText={setUsername} />
         <View style={{marginTop: 10}}>
           <TextInput 
             style={styles.inputstyle } placeholder="Password" secureTextEntry={true} onChangeText={setPassword} />
         </View>
        </View>  
      
        <Button title="login" onPress={onPressLoginButton} iconName="heart" iconSize={30} iconColor="red" iconFamily="Ionicons" />
        <Button title="Create Account" onPress={onPressButton} iconName="heart" iconSize={30} iconColor="red" iconFamily="Ionicons" />
       
      
    </View>
     
    
  );}
