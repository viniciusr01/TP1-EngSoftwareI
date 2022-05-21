import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import TypeBoard from "./components/Typeboard"

const routes = () => {
    return (
        <BrowserRouter>
            <Routes>
    
                <Route exact path ="/login" element={<Login />}/>
                <Route exact path ="/" element={<Home />}/>
                <Route exact path ="/type" element={<TypeBoard />}/>
            </Routes>
        </BrowserRouter>
    );
    };
    
export default routes