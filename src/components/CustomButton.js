import { StyleSheet, Text, Pressable} from 'react-native'
import React from 'react'


const CustomButton = ({buttonText, setWidth, handleOnpress, buttonColor, pressedButtonColor}) => {
  return (
    <Pressable
          onPress={() => handleOnpress()}
          style={({pressed})=>  [{

            backgroundColor: pressed ? pressedButtonColor : buttonColor, width:setWidth,

          },styles.button]}> 
          <Text style={styles.buttonText}> {buttonText} </Text>
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