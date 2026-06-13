import { View , Image , Text , TextInput , Button } from 'react-native';
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' ,
       justifyContent: 'center' , alignItems: 'center' }} >
      <Image style={{width: 100, height: 100 , marginTop: 100 ,alignSelf: 'center'}} 
      source={{ uri: 'https://cdn.pixabay.com/photo/2024/01/08/10/19/ai-generated-8495240_1280.png' }} />
    <Text style={{fontSize: 40 , color: '#524f4f' , textAlign: 'center'  }}>
      Login
      </Text>
      <View style={{width: '100%'}}>

        <TextInput 
      style={{
        fontSize: 20 ,
        color: 'grey' ,
        textAlign: 'left' ,
         borderWidth: 1 ,
         borderColor: 'black' ,
         borderRadius: 50,
         marginHorizontal: 20 , 
         marginTop: 20}} placeholder=" Username" icon={{ name: 'user', color: 'black' }} />
          <TextInput 
      style={{
        fontSize: 20 ,
        color: 'grey' ,
        textAlign: 'left' ,
         borderWidth: 1 ,
         borderColor: 'black' ,
         borderRadius: 50,
         marginHorizontal: 20 , 
         marginTop: 20}} placeholder="Password" secureTextEntry={true} />
      
      </View>
      
      <Button   title="Login" />
    </View>
  );
}

 
