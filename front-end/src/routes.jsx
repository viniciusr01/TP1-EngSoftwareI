import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import TypeBoard from "./Components/Typeboard"
import Navbar from './Components/Navbar';
const routes = () => {
    return (
        
        <BrowserRouter>
            <Routes>
    
                <Route exact path ="/login" element={<Login />}/>
                <Route exact path ="/" element={<Home />}/>
               
                
                <Route exact path ="/practice" element={<div><Navbar></Navbar><TypeBoard />
                    
                    </div>}/>
                
                
               
                
            </Routes>
        </BrowserRouter>
    );
    };
    
export default routes