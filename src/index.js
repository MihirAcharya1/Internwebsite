import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Services from './Services';
import Plan from './Plan';
import App from './App';
import SignInSignUp from './SignInSignUp';
import About from './About';

export default function IndexApp(){
  return(
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}></Route>
          <Route index element = {<Home/>}></Route>
          <Route path='Services' element={<Services/>}></Route>
          <Route path='Plan' element={<Plan/>}></Route>
          <Route path='About' element={<About/>}></Route>
          <Route path='SignInSignUp' element={<SignInSignUp/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IndexApp />
  </React.StrictMode>
);
