import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/Login/index'
import Home from './pages/Home'
import Leaderboard from './pages/Leaderboard'
import Logout from './pages/Logout'
import Profile from './pages/Profile'
import Type from './pages/Type'
// import Example from './Components/Example';


const routes = () => {
    return (
        
        <BrowserRouter>
            <Routes>
    
                <Route exact path ="/login" element={<Login />}/>
                <Route exact path ="/logout" element={<Logout />}/>
                <Route exact path ="/profile" element={<Profile />}/>
                <Route exact path ="/leaderboard" element={<Leaderboard />}/>
               
                <Route exact path ="/" element={<Home />}/>
                <Route exact path ="/type" element={<Type/>}/>
              
                
            </Routes>
        </BrowserRouter>
    );
    };
    
export default routes
