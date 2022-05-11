import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import TypeBoard from "./components/Typeboard"

const routes = () => {
    return (
        <BrowserRouter>
            <Routes>
    
                <Route exact path ="/" element={<Home />}/>
                <Route exact path ="/type" element={<TypeBoard />}/>
            </Routes>
        </BrowserRouter>
    );
    };
    
export default routes