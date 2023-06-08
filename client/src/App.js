import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import OurStore from './Pages/OurStore';
import Blog from './Pages/Blog';
import CompareProduct from './Pages/CompareProduct';
import Wishlist from './Pages/Wishlist';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout></Layout>}>
                        <Route index element={<Home></Home>}></Route>
                        <Route path="about" element={<About></About>}></Route>
                        <Route
                            path="contact"
                            element={<Contact></Contact>}
                        ></Route>
                        <Route
                            path="store"
                            element={<OurStore></OurStore>}
                        ></Route>
                        <Route path="blog" element={<Blog></Blog>}></Route>
                        <Route
                            path="compare-product"
                            element={<CompareProduct></CompareProduct>}
                        ></Route>
                        <Route
                            path="wishlist"
                            element={<Wishlist></Wishlist>}
                        ></Route>
                        <Route path="login" element={<Login></Login>}></Route>
                        <Route
                            path="signup"
                            element={<Signup></Signup>}
                        ></Route>
                        <Route
                            path="forgot-password"
                            element={<ForgotPassword></ForgotPassword>}
                        ></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
