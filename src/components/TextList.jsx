// import { useContext } from "react";
// import { TextContext } from "../context/TextContext";
import { useSelector } from "react-redux";

export default function TextList() {
  //const { texts } = useContext(TextContext);
  const texts = useSelector((state) => state.texts.text)
  console.log(texts)

  return (
    <ul>
      {texts.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
}
