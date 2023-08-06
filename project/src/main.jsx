import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { store, persistor } from "./components/Features/Store/Store.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SocketProvider } from "./components/Features/Context/SocketProvider.jsx";
import Cookies from "js-cookie";

const userId = Cookies.get("UserId");
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          {userId ? (
            <SocketProvider>
              <App />
            </SocketProvider>
          ) : (
            <App />
          )}
        </PersistGate>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
