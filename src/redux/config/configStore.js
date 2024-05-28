import { configureStore } from "@reduxjs/toolkit";
import  textSlice  from "../slices/textSlice"

const store = configureStore({
  reducer: {
    texts: textSlice
  }
})

export default store;