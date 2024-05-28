import TextInput from "./components/TextInput";
import TextList from "./components/TextList";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";

function App() {
  // TODO: texts 를 context api 로 리팩터링 하세요.
  
  return (
    <>
      <Provider store={store}>
        <h1>Text Input and Listing</h1>
        <TextInput />
        <TextList />
      </Provider>
    </>
  );
}

export default App;
