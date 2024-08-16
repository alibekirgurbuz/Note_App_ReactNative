import { Pressable, StyleSheet, Text, TextInput, View, FlatList} from 'react-native'
import React,{useState, useEffect} from 'react'
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc} from "firebase/firestore"; 
import { db } from '../../firebaseConfig';
import CustomButton from '../components/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/userSlice';

import Animated, {LightSpeedInLeft,FlipInEasyX } from 'react-native-reanimated';

import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';




const HomePage = () => {

  const {data} = useSelector(state=> state.data )


  // console.log("data:", data)
  const [isSaved, setIsSaved] = useState(false)
  const [updateTheData, setUpdateTheData] = useState('')

  const dispatch = useDispatch();

  //SEND DATA TO FIREFASE
  const saveData = async () => {
    try {
      const docRef = await addDoc(collection(db, "todoList"), {
        title: "Zero the Hero",
        content: "React Native tutorial",
        lesson: 18
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  // GET DATA FROM FIREBASE
  const getData = async () => {
      const allData = []
      try {
        const querySnapshot = await getDocs(collection(db, "reactNativeLesson"));
      querySnapshot.forEach((doc) => {

        allData.push({...doc.data(), id: doc.id})
        // console.log(`${doc.id} => ${doc.data()}`);
      });
        setData(allData) 
      } catch (error) {
        console.log(error);
      }
  }
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
  const updateData = async (value) => {
    try {
      const lessonData = doc(db, "reactNativeLesson", value);
      // Set the "capital" field of the city 'DC'
      await updateDoc(lessonData, {
        content: updateTheData
      });
    } catch (error) {
      console.log(error);
    }
  };
  // Kulllanıcı çıkış işlemleri
  const handleLogout = () => {
    dispatch(logout())
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
      <CustomButton
        buttonText= {"Get Data"}
        setWidth={"40%"}
        buttonColor={"blue"}
        pressedButtonColor={'gray'}
        handleOnpress={getData}
         />
      <TextInput
        value={updateTheData}
        onChangeText={setUpdateTheData}
        placeholder='enter your name'
        style={{borderWidth: 1, width: '60%', padding: 10, textAlign:'center', marginBottom: 20, marginTop: 80}}
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
  },
  flatlistContainer: {
    borderBottomWidth: 0.3,
    marginVertical: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 10,
    flexDirection:'row', justifyContent:'space-between'
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
  }
  

})