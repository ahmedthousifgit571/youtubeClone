import { configureStore } from "@reduxjs/toolkit"
import appReducer from "./appSlice";
import searchSlice from "./appSlice"

const store = configureStore({
   reducer:{
    app: appReducer,
   //  search: searchSlice
   }

})

export default store