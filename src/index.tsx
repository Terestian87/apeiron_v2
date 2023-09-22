import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
// import { store } from "./app/store";
// import { Provider } from "react-redux";
// import { AuthContextProvider } from "./context/AuthContext";
ReactDOM.render(
  // <Provider store={store}>
    // <AuthContextProvider>
      <App />
    // </AuthContextProvider>
  // </Provider>,
  ,document.getElementById("root")
);
