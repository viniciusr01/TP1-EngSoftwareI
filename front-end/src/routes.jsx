import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'


const routes = () => {
    return (
        <BrowserRouter>
            <Routes>
    
                <Route exact path ="/" element={<Home />}/>
    
            </Routes>
        </BrowserRouter>
    );
    };
    
export default routes;