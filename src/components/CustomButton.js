import { StyleSheet, Text, Pressable} from 'react-native'
import React from 'react'


const CustomButton = ({buttonText, flexValue, handleOnpress, buttonColor, pressedButtonColor}) => {
  return (
    <Pressable
          onPress={() => handleOnpress()}
          style={({pressed})=>  [{

            backgroundColor: pressed ? pressedButtonColor : buttonColor,
            flex:flexValue,

          },styles.button]}> 

          <Text style={styles.buttonText}> {buttonText} </Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {        
        height: 50,
        borderRadius: 10,
        alignItems:'center',
        justifyContent: 'center',

      },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
      },
})