import {    StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fdfdfd' ,
       justifyContent: 'top' , alignItems: 'center'
    },
    
    inputstyle: {
        fontSize: 20 ,
        fontcolor: '#030303' ,
        color: 'black' ,
        textAlign: 'left' ,
         borderWidth: 1 ,
         borderColor: 'black' ,
         borderRadius: 30,
         marginHorizontal: 20 , 
          
         paddingLeft: 20 ,

        },
        buttonCon: {
            backgroundColor: '#000000',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            
            height: 50,
        },
        imagestyle: {
            width: 200,
            height: 200,
            borderRadius: 100,
        },
        dataCon: {
            backgroundColor: '#fdfdfd',
            justifyContent: 'center',
            alignItems: 'center',
            
          },
            itemText: {
                fontSize: 40,
                color: 'black',
            },

});