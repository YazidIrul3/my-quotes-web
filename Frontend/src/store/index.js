import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistAuthConfig = {
  key: "auth",
  storage,
};

const persistedAuth = persistReducer(persistAuthConfig, authSlice);

export const store = configureStore({
  reducer: {
    auth: persistedAuth,
  },

  devTools: true,
});

export const persistor = persistStore(store);
