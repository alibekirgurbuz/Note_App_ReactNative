import { Pressable, StyleSheet, Text, TextInput, View, FlatList} from 'react-native'
import React,{useState, useEffect} from 'react'
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc} from "firebase/firestore"; 
import { db } from '../../firebaseConfig';
import CustomButton from '../components/CustomButton';

import { useDispatch, useSelector } from 'react-redux';
import Animated, {LightSpeedInLeft,FlipInEasyX } from 'react-native-reanimated';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {setUserInput, saveData} from '../redux/dataSlice';
import { logout } from '../redux/userSlice';


const HomePage = () => {

  const {data, userInput} = useSelector(state=> state.data )
  const dispatch = useDispatch();


  console.log("user input", userInput)
  
  // DELETE DATA FROM FIREBASE
  const deleteData = async (value) => {
      try {
        await deleteDoc(doc(db, "reactNativeLesson", value));
        console.log("Document deleted successfully!");
      } catch (error) {
        console.log(error);
      }
  }
  // UPDATE DATA FROM FIREBASE
  // const updateData = async (value) => {
  //   try {
  //     const lessonData = doc(db, "reactNativeLesson", value);
  //     // Set the "capital" field of the city 'DC'
  //     await updateDoc(lessonData, {
  //       content: updateTheData
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // Kulllanıcı çıkış işlemleri
  const handleLogout = () => {
    dispatch(logout())
  }

  const handleTextInput =(text) => {
    dispatch(setUserInput(text))
  }
  const renderItem = ({item, index}) => {
    return (
      <Animated.View 
        entering={FlipInEasyX.delay(100 * (index+1))}
        style={styles.flatlistContainer} >

        <Pressable
          style = {styles.iconContainer}
          onPress={() => deleteData(item.id)}>
          <Ionicons name="checkmark-circle" size={24} color="black" />
          <MaterialIcons name="radio-button-unchecked" size={24} color="black" />
        </Pressable>
        
            <View style={styles.itemContainer}>
              <Text style={styles.itemTitle} >{item.title}</Text>
              <Text>{item.content}</Text>
            </View>            
            <Text>{item.lesson}</Text>
      </Animated.View>
    )
  }
  return (
  
    <View style={styles.container}>

      <Text style={styles.title}>TODO List</Text>

      <Animated.FlatList
       entering={LightSpeedInLeft.duration(500).delay(100)}
        data= {data}
        style={styles.flatlist}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      <View style={styles.userInputContainer} >

        <TextInput
        value={userInput}
        onChangeText={handleTextInput}
        placeholder='Add To Do'
        style={styles.textInput}
        placeholderTextColor={'darkblue'}
        /> 
        <CustomButton
        buttonText= {"Save"}
        flexValue={1}
        buttonColor={"blue"}
        pressedButtonColor={'gray'}
        handleOnpress={() => dispatch(saveData(userInput))}
        />
      
      </View>
 

        
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
  },
  flatlistContainer: {
    borderBottomWidth: 0.3,
    marginVertical: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 10,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  flatlist: {
    width: '90%',
    padding: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    color: 'purple'
  },
  itemContainer: {
    width: '80%',
    padding: 10,
    marginLeft: 10,
    flex: 3,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '10%',
    padding: 10,
    flex: 1,
  },
  userInputContainer: { 
    width: '90%',
    flexDirection: 'row',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  textInput: {
    flex: 3,
    borderWidth: 0.2,
    BorderRadius: 10,
    borderWidth: 1,
    paddingVertical: 5,
    textAlign: 'center',
    marginRight: 5,
    borderRadius: 10,
  },

})