import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: localStorage.getItem("texts")
    ? JSON.parse(localStorage.getItem("texts"))
    : []
};

const textSlice = createSlice({
  name: 'texts',
  initialState,
  reducers: {
    onAddText: (state, action) => {
      const nextText = [...state.text, action.payload];
      localStorage.setItem("texts", JSON.stringify(nextText));
      return {...state, text: nextText}; 
    }
  }
})

export const { onAddText } = textSlice.actions
export default textSlice.reducer;


