import {View, Text ,Button ,Image ,TextInput , TouchableOpacity} from 'react-native';
import React ,{useRef} from 'react';
import { styles } from './register.style';
import ConfettiCannon from 'react-native-confetti-cannon';

export default function Register() {
    
    const confettiRef = React.useRef(null);

    function onPressedRegister(){
        if (confettiRef.current) {
            confettiRef.current.start();
        }
    alert("You are Successfully Registered");
    }
    return (

        <View style={styles.container } >
            <Image style={{width: 100, height: 100 , marginTop: 100 ,alignSelf: 'center'}} 
                  source={{ uri: 'https://cdn.pixabay.com/photo/2024/01/08/10/19/ai-generated-8495240_1280.png' }} />
                <Text style={{fontSize: 30 , color: '#030303' , textAlign: 'center'  }}>
                  Create Account
                  </Text>
                  <View style={{width: '100%'}}>
                  <Text style={{fontSize: 20 , color: '#030303' , marginLeft: 30, marginBottom: 4 ,marginTop: 10 }}>
                    Name
                  </Text>
                     
                    <TextInput 
                  style={styles.inputstyle} placeholder="Enter your Name"  />
                      <Text style={{fontSize: 20 , color: '#030303' , marginLeft: 30, marginBottom: 4 ,marginTop: 10 }}>
                        Email
                      </Text>
                      <TextInput 
                  style={styles.inputstyle} placeholder="Enter your Email"  />
                      <Text style={{fontSize: 20 , color: '#030303' , marginLeft: 30, marginBottom: 4 ,marginTop: 10 }}>
                        Password
                      </Text>
                      <TextInput 
                  style={styles.inputstyle} placeholder="Enter your Password" secureTextEntry={true} />
                  
                  </View>
                  <View style={{marginTop: 20}} />
                  <TouchableOpacity style={[styles.buttonCon, {width: '30%'}]} onPress={onPressedRegister} >
                    <View >
                      <Text style={{color: 'white' ,fontSize: 18, }}> Register </Text>
                    </View> 
                   
                    </TouchableOpacity>
                  
            
            
         <ConfettiCannon
          count={200} 
          origin={{x: -10, y: 0} }
          
          ref={confettiRef}
        />

        </View>
    );
}