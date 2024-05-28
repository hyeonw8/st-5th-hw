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
      state.texts.push(nextText);
    }
  }
})

export const { onAddText } = textsSlice.actions
export default textsSlice.reducer;


