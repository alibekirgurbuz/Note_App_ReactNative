import { StyleSheet, Text, Pressable} from 'react-native'
import React from 'react'

const CustomButton = () => {
  return (
    <Pressable
          onPress={() => setIsLoading(true)}
          style={({pressed})=>  [{

            backgroundColor: pressed ? 'gray' : 'blue', width:'70%',

          },styles.button]}> 
          <Text style={styles.buttonText} >Login </Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        
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
})