import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Image,} from 'react-native';
import React,{useState, useSyncExternalStore} from 'react';
import {Loading, CustomTextInput} from '../components/';

const LoginPage= ({navigation}) => {

  const [email, setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [result, setResult] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  return (
    <View style={styles.container}>
        <Text style={styles.welcome} >Welcome {result}</Text>
        <Image
          source = {require('../../assets/images/loginicon.png')}
          style={styles.image}/>


        <CustomTextInput
            title="Email"
            isSecureText={false}
            handleOnChangeText={setEmail}
            handleValue={email}
            handlePleaceholder='Enter your Email'/>

        <CustomTextInput
            title="Password"
            isSecureText={true}
            handleOnChangeText={setPassword}
            handleValue={password}
            handlePleaceholder='Enter your Password'/>  


        <Pressable
          onPress={() => setIsLoading(true)}
          style={({pressed})=>  [{

            backgroundColor: pressed ? 'gray' : 'blue',

          },styles.button]}> 
          <Text style={styles.buttonText} >Login </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('Signup')}
          style={({pressed})=>  [{

            backgroundColor: pressed ? 'lightgray' : 'gray',

          },styles.signupbutton]}> 
          <Text style={styles.buttonText} >Sign Up </Text>
        </Pressable>


            {isLoading
              ? <Loading
                changeIsLoading={()=> setIsLoading(false)} />
              : null }

    </View>
  );
}


export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width:'70%',
    height: 34,
    borderRadius: 10,
    marginVertical: 10,
    alignItems:'center',
    justifyContent: 'center',
    marginTop:20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  welcome: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupbutton: {
    width:'40%',
    height: 34,
    borderRadius: 10,
    marginVertical: 10,
    alignItems:'center',
    justifyContent: 'center',
    marginTop: 1,
  },

 
});
