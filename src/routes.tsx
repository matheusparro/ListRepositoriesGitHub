import { Navigate } from "react-router-dom";
import {BrowserRouter, Routes, Route,}  from "react-router-dom";
import Home from "./Pages/Home";
import Repos from "./Pages/Repos";



export const AppRouter = () => {

  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/repos" element={<Repos/>} />
        <Route path="/" element={<Navigate replace to="/home" />} />
      
      </Routes>
    
    </BrowserRouter>
  );
};