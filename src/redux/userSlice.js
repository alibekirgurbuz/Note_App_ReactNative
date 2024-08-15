import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
     getAuth,
     signOut, 
     signInWithEmailAndPassword,
     createUserWithEmailAndPassword,
     sendEmailVerification} 
     from 'firebase/auth'
import AsyncStorage from "@react-native-async-storage/async-storage";

export const login = createAsyncThunk('user/login', async({email, password}) => {
    console.log('username: ', email)
    console.log('password: ', password)
    try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, email, password)

        const user = userCredential.user;
        const token = user.stsTokenManager.accessToken;

        console.log(user)

        const userData = {
            token,
            user: user,
        }
        await AsyncStorage.setItem("userToken", token)
        return userData

    } catch (error) {
        console.log("user slice 21 line: ",error)
        throw error
    }
})

// Kullanıcı otomatik giriş işlemleri
export const autoLogin = createAsyncThunk('user/autoLogin', async() => {
    try {
        const token = await AsyncStorage.getItem("userToken")
        if (token){

            return token
        }else{
            throw new Error("User not found")
        }
        
    } catch (error) {
        throw error
    }
})

// Kullanıcı çıkış işlemleri

export const logout = createAsyncThunk('user/logout', async() => {
    try {
        const auth = getAuth()
        await signOut(auth)
        await AsyncStorage.removeItem("userToken")
        return null;
    } catch (error) {
        throw error
    }
})

// Kullanıcı kayıt işlemleri
export const register = createAsyncThunk('user/register', async({email, password}) => {
    try {
        const auth = getAuth()
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)

        const user = userCredential.user;
        const token = user.stsTokenManager.accessToken;

        await sendEmailVerification(user)
        await AsyncStorage.setItem("userToken", token)

        return token;
    } catch (error) {
        throw error
        
    }

});


const initialState = {
    isLoading: false,
    isAuth: false,
    token: null,
    user: null,
    error: null,
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setEmail: (state, action) => {
            const lowerCaseEmail = action.payload.toLowerCase()
            state.email = lowerCaseEmail
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state)=>{
                state.isLoading = true;
                state.isAuth = false;
            })
            .addCase(login.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.isAuth = true;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(login.rejected, (state)=>{
                state.isLoading = false;
                state.isAuth = false;
                state.error = action.error.message;
            })

            .addCase(autoLogin.pending, (state, action)=>{
                state.isLoading = true;
                state.isAuth = false;
            })
            .addCase(autoLogin.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.isAuth = true;
                state.token = action.payload;
            })
            .addCase(autoLogin.rejected, (state, action)=>{
                state.isLoading = false;
                state.isAuth = false;
                state.token = null;
            })

            .addCase(logout.pending, (state, action)=>{
                state.isLoading = true;
                
            })
            .addCase(logout.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.isAuth = false;
                state.user = null;
                state.token = null;
            })
            .addCase(logout.rejected, (state, action)=>{
                state.isLoading = false;
                
                state.error = action.payload;
            })

            .addCase(register.pending, (state)=>{
                state.isLoading = true;
                state.isAuth = false;
            })
            .addCase(register.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.isAuth = true;    
                state.token = action.payload;            
            })
            .addCase(register.rejected, (state, action)=>{
                state.isLoading = false;
                state.isAuth = false;
                state.error = "Invaild Email or Password"
            })
    }
})

export const { setEmail,setPassword, setIsLoading } = userSlice.actions;
export default userSlice.reducer;