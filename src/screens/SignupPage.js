import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SignUpPage = () => {
  return (
    <View style={styles.container}>
      <Text>SignUpPage</Text>
    </View>
  )
}

export default SignUpPage

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 200,
  }

})