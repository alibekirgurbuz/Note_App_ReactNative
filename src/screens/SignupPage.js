import { StyleSheet, Text, View, SafeAreaView, Image, Pressable } from 'react-native'
import React from 'react'
import { CustomTextInput, CustomButton, Loading } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../redux/userSlice'


const SignUpPage = ({navigation}) => {

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.user)

  const handleRegister = () => {
    dispatch(register({email, password}))
  }

  if (isLoading) {
    return <Loading/>
  }
  return (
    <SafeAreaView style={styles.container}>
    

      <View style={styles.title}>
        <Image style={styles.image} source={require('../../assets/images/register.png')}/>
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
         handleOnpress={handleRegister}
        />

        <Pressable onPress={()=>navigation.navigate("Login")}>
          <Text style={{fontWeight:'bold', marginBottom:40}}>Already have an account? Login</Text>
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
    marginBottom: -50,
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
    width: 110,
    height: 110,
    marginBottom: 1  
  },

})