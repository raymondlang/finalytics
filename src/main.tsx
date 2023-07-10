import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { api } from "@/state/api";

const store = configureStore({
  reducer: { [api.reducerPath]: api.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
setupListeners(store.dispatch);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
