import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout></Layout>}>
                        <Route index element={<Home></Home>}></Route>
                        <Route path="about" element={<About></About>}></Route>
                        <Route path="contact" element={<Contact></Contact>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
 