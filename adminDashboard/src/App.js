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
import AddBlogcat from './Pages/AddBlogcat';
import AddColor from './Pages/AddColor';
import AddCat from './Pages/AddCat';
import AddBrand from './Pages/AddBrand';
import AddProduct from './Pages/AddProduct';
import CouponList from './Pages/CouponList';
import AddCoupon from './Pages/AddCoupon';

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
                            path="blog-add/:id"
                            element={<AddBlog></AddBlog>}
                        ></Route>
                        <Route
                            path="coupon-add"
                            element={<AddCoupon></AddCoupon>}
                        ></Route>
                        <Route
                            path="coupon-add/:id"
                            element={<AddCoupon></AddCoupon>}
                        ></Route>
                        <Route
                            path="coupon-list"
                            element={<CouponList></CouponList>}
                        ></Route>
                        <Route
                            path="blog-category-list"
                            element={<BlogCartList></BlogCartList>}
                        ></Route>
                        <Route
                            path="blog-category-list/:id"
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
                            path="brand"
                            element={<AddBrand></AddBrand>}
                        ></Route>
                        <Route
                            path="brand/:id"
                            element={<AddBrand></AddBrand>}
                        ></Route>
                        <Route
                            path="list-brand"
                            element={<BrandList></BrandList>}
                        ></Route>
                        <Route
                            path="blog-category"
                            element={<AddBlogcat></AddBlogcat>}
                        ></Route>
                        <Route
                            path="blog-category/:id"
                            element={<AddBlogcat></AddBlogcat>}
                        ></Route>
                        <Route
                            path="color"
                            element={<AddColor></AddColor>}
                        ></Route>
                        <Route
                            path="color/:id"
                            element={<AddColor></AddColor>}
                        ></Route>
                        <Route
                            path="category"
                            element={<AddCat></AddCat>}
                        ></Route>
                        <Route
                            path="category/:id"
                            element={<AddCat></AddCat>}
                        ></Route>
                        <Route
                            path="product-list"
                            element={<ProductList></ProductList>}
                        ></Route>
                        <Route
                            path="product"
                            element={<AddProduct></AddProduct>}
                        ></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
