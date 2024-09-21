import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/es/integration/react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Provider } from "react-redux";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ChakraProvider>
          <RouterProvider router={router} />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
