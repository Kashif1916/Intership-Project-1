import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';


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
       <View style={{marginTop: 20}} >
             <TouchableOpacity style={styles.buttonCon} onPress={onPress} >
               <View >
                 <Text style={styles.buttonText}> {title} </Text>
               </View> 
               </TouchableOpacity>
               </View>
    )};

const styles = StyleSheet.create({
buttonCon: {
            backgroundColor: '#000000',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            width: '30%',
            
            height: 50,
        },
buttonText: {
    paddingHorizontal: 20,
    color: 'white',
    fontSize: 18,
},



});