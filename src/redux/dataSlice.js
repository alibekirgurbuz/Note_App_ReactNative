import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc} from "firebase/firestore"; 
import { db } from '../../firebaseConfig';

export const getAllData = createAsyncThunk('data/getData', async () => {
    const allData = []
    try {
      const querySnapshot = await getDocs(collection(db, "todoList"));
      querySnapshot.forEach((doc) => {
      allData.push({...doc.data(), id: doc.id})
      // console.log(`${doc.id} => ${doc.data()}`);
    });
    return allData;

    } catch (error) {
      console.log(error);
      throw error;
    }

})


const initialState = {
    data:[],
    isLoading: false,
    error: null,
}
export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(getAllData.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(getAllData.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(getAllData.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default dataSlice.reducer;