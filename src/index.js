import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import {Provider} from 'react-redux'

import './styles/index.css'
import Landing from "./pages/Landing";
import Authentication from "./pages/Authentication";
import Main from "./pages/Main";
import store from "./redux/store";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/accounts/:section" element={<Authentication />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

