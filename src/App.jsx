import React, { useState, useEffect } from "react";
import TextInput from "./components/TextInput";
import TextList from "./components/TextList";
import { TextProvider } from "./context/TextContext";

function App() {
  // TODO: texts 를 context api 로 리팩터링 하세요.
  
  return (
    <>
      <TextProvider>
        <h1>Text Input and Listing</h1>
        <TextInput />
        <TextList />
      </TextProvider>
    </>
  );
}

export default App;
