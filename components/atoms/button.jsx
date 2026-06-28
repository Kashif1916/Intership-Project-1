import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';


/**
 * 
 * properties for button
 * title
 * onPress
 * icon name
 * icon size
 * icon color
 * icon family
 * 
 */
export  function Button({
    title,
    onPress,
    showIcon = false,
    iconName="",
    iconSize = 20,
    iconColor="white",
    iconFamily="Ionicons",

}) {

    return (
       <View  >
             <TouchableOpacity style={styles.buttonCon} onPress={onPress} >
               
                 <Ionicons name={iconName} size={iconSize} color={iconColor}  />
                 <Text style={styles.buttonText}> {title} </Text>
               
               </TouchableOpacity>
               </View>
    )};

const styles = StyleSheet.create({
buttonCon: {
            marginTop: 10,
            padding: 10,
            backgroundColor: '#000000',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            
            flexDirection: 'row',
            height: 50,
            
        },
buttonText: {
    
    color: 'white',
    fontSize: 18,
},



});