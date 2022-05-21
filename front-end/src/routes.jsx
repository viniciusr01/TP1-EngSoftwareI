import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/Login/index'
import Home from './pages/Home'


const routes = () => {
    return (
        <BrowserRouter>
            <Routes>
    
                <Route exact path ="/login" element={<Login />}/>
                <Route exact path ="/" element={<Home />}/>
    
            </Routes>
        </BrowserRouter>
    );
    };
    
export default routes;