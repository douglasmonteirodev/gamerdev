import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ToastContainer
          theme='dark'
          position='top-right'
          autoClose={3000}
          closeOnClick
          pauseOnHover={false}
        />

        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
