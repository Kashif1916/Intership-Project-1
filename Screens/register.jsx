import {View, Text ,Button ,Image ,TextInput , TouchableOpacity} from 'react-native';
import React ,{useRef} from 'react';
import { styles } from './register.style';
import ConfettiCannon from 'react-native-confetti-cannon';
import { useState } from 'react';

export default function Register() {
    
    const confettiRef = useRef(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    function onPressedRegister(){
      {/* name must be alphabets only and should not be empty */}

      if (!/^[A-Za-z\s]+$/.test(name)) {
        alert("Name must contain only alphabets and spaces. Please try again.");
        return;
      }

      
      if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
        alert("Please fill in all fields.");
        return;
      }
      if (!email.includes('@') || !email.includes('.')) {
        alert("Please enter a valid email address.");
        return;
      }
      if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
      }
      if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
      }
        

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
                  style={styles.inputstyle} placeholder="Enter your Name" onChangeText={setName} />
                      <Text style={{fontSize: 20 , color: '#030303' , marginLeft: 30, marginBottom: 4 ,marginTop: 10 }}>
                        Email
                      </Text>
                      <TextInput 
                  style={styles.inputstyle} placeholder="Enter your Email"  onChangeText={setEmail} />
                      <Text style={{fontSize: 20 , color: '#030303' , marginLeft: 30, marginBottom: 4 ,marginTop: 10 }}>
                        Password
                      </Text>
                      <TextInput 
                  style={styles.inputstyle}
                   placeholder="Enter your Password" secureTextEntry={true} 
                    onChangeText={setPassword} />
                  <Text style={{fontSize: 20 , color: '#030303' , marginLeft: 30, marginBottom: 4 ,marginTop: 10 }}>
                        Confirm Password
                      </Text>
                      <TextInput 
                  style={styles.inputstyle} placeholder="Confirm your Password" secureTextEntry={true}
                  onChangeText={setConfirmPassword} />
                  
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