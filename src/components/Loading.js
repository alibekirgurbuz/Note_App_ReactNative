import { StyleSheet, Text, View, ActivityIndicator, Pressable } from 'react-native'
import React from 'react'

const Loading = ({name, changeIsLoading}) => {
  return (
    <View style={styles.container}>
        <Pressable
            onPress={()=> changeIsLoading()}
            style={[{},styles.closeButtonContainer]} 
        >
            <Text style={styles.closeButton}>X</Text>
        </Pressable>
        <ActivityIndicator size={"large"} color={"#0000ff"} />
        <Text style={styles.LoginText}>Loading...</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({

    container: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'tomato'

    },

    LoginText: {
        fontSize:16,
        fontWeight:'bold',
        color:'white',
        marginTop:20
    },
    closeButton: {
        color: 'white',
        fontWeight:'bold',
        fontSize:16
    },
    closeButtonContainer: {
        backgroundColor: 'black',
        width:50,
        height:50,
        borderRadius:50,
        alignItems: 'center',
        justifyContent:'center',
        position: 'absolute',
        top:45,
        right:20    
    }
 
})