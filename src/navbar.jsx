import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom';
import App from './App';
import Home from './routes/home';
import Aboutus from './routes/aboutus';

import './main.css';


export default function Navbar() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="home" element={<Home />} />
                    <Route path="aboutus" element={<Aboutus />} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}



