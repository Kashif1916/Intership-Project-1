import { View , Image , Text , TextInput  ,TouchableOpacity } from 'react-native';
import {styles} from './register.style';
import Register from './register';
import { useNavigation } from '@react-navigation/native';
import {Button} from '../components';


export default function Home() {
  const navigation = useNavigation();

  function onPressLoginButton()  {

    navigation.navigate('Data');
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
      style={styles.inputstyle } placeholder="Username"  />
         <View style={{marginTop: 10}}>
          <TextInput 
      style={styles.inputstyle } placeholder="Password" secureTextEntry={true} />
      </View>
          
      </View>
      <View style={{marginTop: 20}} />
      <TouchableOpacity style={[styles.buttonCon, {width: '30%'}]} onPress={onPressLoginButton} >
        <View >
          <Text style={{color: 'white' ,fontSize: 18, }}> Login </Text>
        </View> 
       

        </TouchableOpacity>
      <View style={{marginTop: 10 ,width: '60%'}}  >
        <TouchableOpacity style={styles.buttonCon} onPress={onPressButton}>
        <Text style={{color: 'white' ,fontSize: 18, }}> Create Account </Text> 
      </TouchableOpacity>
      </View>
      <Button title="test me" onPress={onPressButton} /> 
    </View>
     
    
  );}
