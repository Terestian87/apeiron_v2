import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
// import { store } from "./app/store";
// import { Provider } from "react-redux";
// import { AuthContextProvider } from "./context/AuthContext";

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
root.render(
  //   // <Provider store={store}>
  //     // <AuthContextProvider>
  <App />
  //     // </AuthContextProvider>
  //   // </Provider>,
);
