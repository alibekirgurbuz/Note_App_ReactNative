import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const CustomTextInput = ({title, isSecureText, handleOnChangeText, handleValue, handlePleaceholder}) => {
  return (
    <View style={styles.inputContainer}>
          <Text styele={styles.inputBoxText}>{title}</Text>
          <TextInput
            secureTextEntry={isSecureText}
            placeholder={handlePleaceholder}
            style={styles.textinputstyle}
            onChangeText={handleOnChangeText}
            value={handleValue}
           />
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
  inputContainer: {
    width: '70%',
  },

  inputBoxText: {
    fontWeight: 'bold',
  },
  textinputstyle: {
    borderBottomWidth: 0.5,
    width:'100%',
    height: 30,
    borderRadius: 10,
    marginVertical: 10,
    textAlign: 'center',
    color: 'Black',
    fontWeight: 'bold',
    
  },



})