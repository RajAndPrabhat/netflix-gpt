import { Provider } from "react-redux";
import Body from "./componants/Body";
import React from "react";
import appStore from "./utils/appStore";

function App() {
  return (
    <>
    <Provider store={appStore}>
    <Body />
    </Provider>
    </>
  );
}

export default App;
