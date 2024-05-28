import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  texts: localStorage.getItem("texts")
    ? JSON.parse(localStorage.getItem("texts"))
    : []
};

const textsSlice = createSlice({
  name: 'texts',
  initialState,
  reducers: {
    onAddText: (state, action) => {
      const nextText = action.payload;
      localStorage.setItem("texts", JSON.stringify([...state.texts, action.payload]));
      // 😲 mutable 하게 상태 변경해보기
      state.texts.push(nextText);

    // immutable way
    // const nextText = [...state.texts, action.payload];
    // localStorage.setItem("texts", JSON.stringify(nextText));
    // return {...state, texts: nextText};  
    }
    
      
  }
})

export const { onAddText } = textsSlice.actions
export default textsSlice.reducer;


