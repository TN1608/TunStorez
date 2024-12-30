import Header from "./fragment/_header.jsx";
import Footer from "./fragment/_footer.jsx";
import './App.css';
import Products from "./model/Products";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

import {useState} from "react";
import {Route, Routes} from "react-router";

function App() {
  return (
      <div className="App">
          <Header/>
            <Routes>
                <Route path={"/home"} element={<HomePage/>}/>
                <Route path={"/account/login"} element={<LoginPage/>}/>
                <Route path={"/account/sign-up"} element={<SignUpPage/>}/>
            </Routes>
          <Footer/>
      </div>
  );
}

export default App;
