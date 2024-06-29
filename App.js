import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable
} from 'react-native';
import React,{useState} from 'react';

export default function App() {

  const [name, setName] = useState("")
  const [lastname,setLastName] = useState("")
  const [result, setResult] = useState('')

  return (
    <View style={styles.container}>

        <Text>Welcome {result}</Text>
        <Text>Name</Text>
        <TextInput
        placeholder='Enter your name'
        style={styles.textinputstyle}
        onChangeText={setName}
        value={name}
        />
        <Text>LastName</Text>
        <TextInput
        placeholder='Enter your last name'
        style={styles.textinputstyle}
        onChangeText={setLastName}
        value={lastname}
        />

        <Pressable
          onPress={()=> setResult(name +" "+ lastname)}
          style={({pressed})=>  [{
          backgroundColor: pressed ? 'gray' : 'blue',
          },styles.button]}>
          <Text style={styles.buttonText} >Save </Text>
        </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    fontWeight: 'bold'
  },
  button: {
    width:'70%',
    height: 30,
    borderRadius: 10,
    marginVertical: 10,
    alignItems:'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
 
});
