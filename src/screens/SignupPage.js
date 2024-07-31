import { StyleSheet, Text, View, SafeAreaView, Image, Pressable } from 'react-native'
import React from 'react'
import { CustomTextInput, CustomButton } from '../components'

const SignUpPage = ({navigation}) => {

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')



  return (
    <SafeAreaView style={styles.container}>
    

      <View style={styles.title}>
        <Image style={styles.image} source={require('../../assets/images/signupIcon.png')}/>
        <Text style={styles.signUp} >Sign Up</Text>
        

      </View>

      <View style={styles.textInputContainer}>
          <CustomTextInput
          title="Name"
          isSecureText={false}
          handleOnChangeText={setName}
          handleValue={name}
          handlePleaceholder="Enter Your Name"
        />

        <CustomTextInput
          title="Email"
          isSecureText={false}
          handleOnChangeText={setEmail}
          handleValue={email}
          handlePleaceholder="Enter Your Email"
        />

        <CustomTextInput
          title="Password"
          isSecureText={true}
          handleOnChangeText={setPassword}
          handleValue={password}
          handlePleaceholder="Create Your Password"
        />
      </View>

      <View style={styles.signUpOptions}>

        <CustomButton
         buttonText="Sign Up"
         setWidth="80%" 
         buttonColor="blue"
         pressedButtonColor="lightgray"
         handleOnpress={() => console.log(name," ", email," ", password)}
        />

        <Pressable onPress={()=>navigation.navigate("Login")}>
          <Text style={{fontWeight:'bold'}}>Already have an account? Login</Text>
        </Pressable>

      </View>

    </SafeAreaView>
  )
  
}

export default SignUpPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUp: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex:2,
    paddingTop: 40,
    width:"100%",
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  textInputContainer: {
    flex:2,
    paddingVertical:20,
    width:"100%",
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  signUpOptions: {
    flex:3,
    width:"100%",
    alignItems:'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
    marginLeft: 20,
  },

})