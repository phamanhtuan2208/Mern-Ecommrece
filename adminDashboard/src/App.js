import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './Components/MainLayout';
import Login from './Pages/Login';
import ResetPassword from './Pages/ResetPassword';
import ForgotPassword from './Pages/ForgotPassword';
import DashBoard from './Pages/DashBoard';
import Enquiries from './Pages/Enquiries';
import BlogList from './Pages/BlogList';
import BlogCartList from './Pages/BlogCartList';
import Orders from './Pages/Orders';
import Customers from './Pages/Customers';
import ColorList from './Pages/ColorList';
import CategoryList from './Pages/CategoryList';
import BrandList from './Pages/BrandList';
import ProductList from './Pages/ProductList';
import AddBlog from './Pages/AddBlog';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login></Login>}></Route>
                    <Route
                        path="/reset-password"
                        element={<ResetPassword></ResetPassword>}
                    ></Route>
                    <Route
                        path="/forgot-password"
                        element={<ForgotPassword></ForgotPassword>}
                    ></Route>
                    <Route path="/admin" element={<MainLayout></MainLayout>}>
                        <Route index element={<DashBoard></DashBoard>}></Route>
                        <Route
                            path="enquiries"
                            element={<Enquiries></Enquiries>}
                        ></Route>
                        <Route
                            path="blog-list"
                            element={<BlogList></BlogList>}
                        ></Route>
                        <Route
                            path="blog-add"
                            element={<AddBlog></AddBlog>}
                        ></Route>
                        <Route
                            path="blog-category-list"
                            element={<BlogCartList></BlogCartList>}
                        ></Route>
                        <Route
                            path="orders"
                            element={<Orders></Orders>}
                        ></Route>
                        <Route
                            path="customers"
                            element={<Customers></Customers>}
                        ></Route>
                        <Route
                            path="list-color"
                            element={<ColorList></ColorList>}
                        ></Route>
                        <Route
                            path="list-category"
                            element={<CategoryList></CategoryList>}
                        ></Route>
                        <Route
                            path="list-brand"
                            element={<BrandList></BrandList>}
                        ></Route>
                        <Route
                            path="product-list"
                            element={<ProductList></ProductList>}
                        ></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
