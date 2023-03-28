import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Services from './Services';
import Plan from './Plan';
// import About from './About';
import App from './App';
import Geoloc from './components/Geo';

export default function IndexApp(){
  return(
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}></Route>
          <Route index element = {<Home/>}></Route>
          <Route path='Services' element={<Services/>}></Route>
          <Route path='Plan' element={<Plan/>}></Route>
          <Route path='About' element={<Geoloc/>}></Route>
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
