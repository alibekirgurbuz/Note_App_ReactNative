import { StyleSheet, Text, View } from 'react-native'
import React,{useState, useEffect} from 'react'
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc, collectionGroup } from "firebase/firestore"; 
import { db } from '../../firebaseConfig';
import CustomButton from '../components/CustomButton';



const HomePage = () => {

  const [data, setData] = useState([])
  // console.log("data:", data)
  const [isSaved, setIsSaved] = useState(false)


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

        allData.push(doc.data())
        // console.log(`${doc.id} => ${doc.data()}`);
      });
        setData(allData) 
      } catch (error) {
        console.log(error);
      }
      
  }

  // DELETE DATA FROM FIREBASE
  const deleteData = async () => {
    
      await deleteDoc(doc(db, "reactNativeLesson", ""));
  }
  // UPDATE DATA FROM FIREBASE
  const updateData = async () => {
    try {
      const lessonData = doc(db, "reactNativeLesson", "t1lQ62E0k1nilc5rTVhF");
      // Set the "capital" field of the city 'DC'
      await updateDoc(lessonData, {
        lesson: 14
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text>HomePage</Text>
      {data.map((value, index)=> {
        return (
          <View key={index}>
            <Text>ID: {index}</Text>
            <Text>{value.title}</Text>
            <Text>{value.content}</Text>
            <Text>{value.lesson}</Text>
          </View>
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