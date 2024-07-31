import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    email: null,
    password: null,
    isLoading: false,
    isAuth: false,
    users:{
        userEmail: "t",
        userPassword: "1",
    }
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
        setLogin: (state) => {
            console.log('Current Email:', state.email);
            console.log('Current Password:', state.password);
            console.log('Stored Email:', state.users.userEmail);
            console.log('Stored Password:', state.users.userPassword);



            if(state.email === state.users.userEmail && state.password === state.users.userPassword){
                state.isAuth = true
                console.log('Login Success')
                
            }else{
                state.isAuth = false
                console.log('Login Failed')
            }
        }
    }
})

export const { setEmail,setPassword, setIsLoading, setLogin } = userSlice.actions;
export default userSlice.reducer;