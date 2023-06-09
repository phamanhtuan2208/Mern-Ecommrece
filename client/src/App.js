import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//page
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
import Resetpassword from './Pages/Resetpassword';
import SingleBlog from './Pages/SingleBlog';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import RefundPolicy from './Pages/RefundPolicy';
import ShippingPolicy from './Pages/ShippingPolicy';
import TermAndCondition from './Pages/TermAndCondition';
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';

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
                        <Route
                            path="store/product/:id"
                            element={<SingleProduct></SingleProduct>}
                        ></Route>
                        <Route path="blog" element={<Blog></Blog>}></Route>
                        <Route
                            path="blog/:id"
                            element={<SingleBlog></SingleBlog>}
                        ></Route>
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
                        <Route
                            path="reset-password"
                            element={<Resetpassword></Resetpassword>}
                        ></Route>{' '}
                        <Route
                            path="privacy-policy"
                            element={<PrivacyPolicy></PrivacyPolicy>}
                        ></Route>
                        <Route
                            path="refund-policy"
                            element={<RefundPolicy></RefundPolicy>}
                        ></Route>{' '}
                        <Route
                            path="shipping-policy"
                            element={<ShippingPolicy></ShippingPolicy>}
                        ></Route>{' '}
                        <Route
                            path="term-conditions"
                            element={<TermAndCondition></TermAndCondition>}
                        ></Route>
                        <Route path="cart" element={<Cart></Cart>}></Route>
                        <Route
                            path="checkout"
                            element={<Checkout></Checkout>}
                        ></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
