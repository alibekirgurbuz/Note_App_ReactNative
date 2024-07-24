import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Image,} from 'react-native';
import React,{useState, useSyncExternalStore} from 'react';
import Loading from '../components/Loading';

const LoginPage= ({navigation}) => {

  const [name, setName] = useState("")
  const [lastname,setLastName] = useState("")
  const [result, setResult] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  return (
    <View style={styles.container}>

        <Image
          source = {require('../../assets/images/loginicon.png')}
          style={styles.image}/>
          

        <Text style={styles.welcome} >Welcome {result}</Text>
        <Text>Email</Text>
        <TextInput
        inputMode='email'
        placeholder='Enter your Email'
        style={styles.textinputstyle}
        onChangeText={setName}
        value={name}
        />
        <Text>Password</Text>
        <TextInput
        secureTextEntry={true}
        placeholder='Enter your Password'
        style={styles.textinputstyle}
        onChangeText={setLastName}
        value={lastname}
        />

        <Pressable
          onPress={() => setIsLoading(true)}
          style={({pressed})=>  [{

            backgroundColor: pressed ? 'gray' : 'blue',

          },styles.button]}> 
          <Text style={styles.buttonText} >Login </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('SignUp')}
          style={({pressed})=>  [{

            backgroundColor: pressed ? 'gray' : 'lightgray',

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
  textinputstyle: {
    borderWidth: 1,
    width:'70%',
    height: 30,
    borderRadius: 10,
    marginVertical: 10,
    textAlign: 'center',
    color: 'Black',
    fontWeight: 'bold',
    
  },
  button: {
    width:'70%',
    height: 34,
    borderRadius: 10,
    marginVertical: 10,
    alignItems:'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    bottom: 14
  },
  welcome: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
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
  }

 
});
