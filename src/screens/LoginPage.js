import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Image,} from 'react-native';
import React,{useState, useSyncExternalStore} from 'react';

import {Loading, CustomTextInput, CustomButton} from '../components/';


const LoginPage= ({navigation}) => {

  const [email, setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  return (
    <View style={styles.container}>
        <Text style={styles.welcome} >Welcome </Text>
        <Image
          source = {require('../../assets/images/loginicon.png')}
          style={styles.image}/>


        <CustomTextInput
            title="Email"
            isSecureText={false}
            handleOnChangeText={setEmail}
            handleValue={email}
            handlePleaceholder='Enter Your Email'/>

        <CustomTextInput
            title="Password"
            isSecureText={true}
            handleOnChangeText={setPassword}
            handleValue={password}
            handlePleaceholder='Enter Your Password'/>  

        <CustomButton
            buttonText="Login"
            setWidth="70%"
            handleOnpress={() => setIsLoading(true)}
            buttonColor="blue"
            pressedButtonColor="gray"
        />

        <CustomButton
            buttonText="Sign Up"
            setWidth="40%"
            handleOnpress={() => navigation.navigate('Signup')}
            buttonColor="gray"
            pressedButtonColor="lightgray"
        />

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
