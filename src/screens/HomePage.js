import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React,{useState, useEffect} from 'react'
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc, collectionGroup } from "firebase/firestore"; 
import { db } from '../../firebaseConfig';
import CustomButton from '../components/CustomButton';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';



const HomePage = () => {

  const [data, setData] = useState([])
  // console.log("data:", data)
  const [isSaved, setIsSaved] = useState(false)
  const [updateTheData, setUpdateTheData] = useState('')

  const dispatch = useDispatch();


  useEffect(() => {
    getData()
  

  }, [isSaved])
  

  //SEND DATA TO FIREFASE
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





  return (
    <View style={styles.container}>
      <TextInput
        value={updateTheData}
        onChangeText={setUpdateTheData}
        placeholder='enter your name'
        style={{borderWidth: 1, width: '60%', padding: 10, textAlign:'center', marginBottom: 20}}
      />


      <Text>HomePage</Text>
      {data.map((value, index)=> {
        return (
          <Pressable
            
            onPress={()=>[updateData(value.id), setIsSaved(isSaved === false ? true : false)]}
            key={index}>
            <Text>ID: {index}</Text>
            <Text>{value.id}</Text>
            <Text>{value.title}</Text>
            <Text>{value.content}</Text>
            <Text>{value.lesson}</Text>
          </Pressable>
        )
      })}

      <CustomButton
        buttonText= {"Save"}
        setWidth={"40%"}
        buttonColor={"blue"}
        pressedButtonColor={'gray'}
        handleOnpress={()=>{sendData(), setIsSaved(isSaved===false ? true : false )}} 
         />
      <CustomButton
        buttonText= {"Get Data"}
        setWidth={"40%"}
        buttonColor={"blue"}
        pressedButtonColor={'gray'}
        handleOnpress={getData}
         />
      <CustomButton
        buttonText= {"Delete Data"}
        setWidth={"40%"}
        buttonColor={"blue"}
        pressedButtonColor={'gray'}
        handleOnpress={deleteData}
         />
      <CustomButton
        buttonText= {"Update Data"}
        setWidth={"40%"}
        buttonColor={"blue"}
        pressedButtonColor={'gray'}
        handleOnpress={updateData}
         />
      <CustomButton
        buttonText= {"LOGOUT"}
        setWidth={"40%"}
        buttonColor={"red"}
        pressedButtonColor={'gray'}
        handleOnpress={handleLogout}
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