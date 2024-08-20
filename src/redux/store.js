import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import dataReducer from "./dataSlice";
import userReducer from "./userSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        data: dataReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(thunk),
});
  
  export default store;