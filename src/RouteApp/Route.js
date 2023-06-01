import React , {useState} from 'react';
import Main from '../components/Pages/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import About from '../components/Pages/About';
import Footer from '../components/Footer';
import Vlab from '../components/Pages/Vlab';


const RouteApp = () => {

    return (
        <BrowserRouter>
            <Header  />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/About" element={<About />} />
                <Route path="/Vlab" element={<Vlab />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default RouteApp