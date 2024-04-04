import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Codeeditor from "./components/Codeeditor.jsx";
import Languagemenu from "./components/Menubar.jsx";
import { CookiesProvider } from "react-cookie";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
      <CookiesProvider>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/signup" Component={Signup}></Route>

          <Route path="/language" Component={Languagemenu}></Route>
          <Route path="/code/:lang/:id" Component={Codeeditor}></Route>
        </Routes>
      </CookiesProvider>
    </Router>
  </React.StrictMode>
);
