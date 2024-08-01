import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../firebaseConfig';
import CustomButton from '../components/CustomButton';


const HomePage = () => {

  const sendData = async () => {
    try {
      const docRef = await addDoc(collection(db, "reactNativeLesson"), {
        title: "Zero the Hero",
        content: "React Native tutorial",
        lesson: 18
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }



  return (
    <View style={styles.container}>
      <Text>HomePage</Text>
      <CustomButton
        buttonText= {"Save"}
        setWidth={"40%"}
        buttonColor={"blue"}
        pressedButtonColor={'gray'}
        handleOnpress={sendData}
         />
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

})