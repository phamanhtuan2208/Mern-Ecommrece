import { Button, Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// react icons
import {
    AiOutlineDashboard,
    AiOutlineShoppingCart,
    AiOutlineUser,
    AiOutlineBgColors,
    AiOutlinePicLeft,
    AiOutlinePicRight,
} from 'react-icons/ai';
import { SiBrandfolder } from 'react-icons/si';
import { BiCategoryAlt } from 'react-icons/bi';
import { FaClipboardList, FaBloggerB } from 'react-icons/fa';
import { ImBlog } from 'react-icons/im';
import { Outlet } from 'react-router-dom';
import { IoIosNotifications } from 'react-icons/io';
import { RiCoupon3Line, RiCouponLine } from 'react-icons/ri';
// avatar
import avatar from '@/Images/Avatar.jpg';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { logOut } from '@/Features/Auth/AuthSlice';
import CustomModel from './customModel';

const { Header, Sider, Content } = Layout;
const MainLayout = () => {
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const hideModal = () => {
        setOpen(false);
    };

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userLocalStore = localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user'))
        : null;

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical">
                    <h2 className="text-white fs-5 text-center py-4 mb-0">
                        <span className="sm-logo">AT</span>
                        <span className="lg-logo">Shop AT Admin</span>
                    </h2>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['']}
                    onClick={({ key }) => {
                        if (key === 'signout') {
                        } else {
                            navigate(key);
                        }
                    }}
                    items={[
                        {
                            key: '',
                            icon: <AiOutlineDashboard className="fs-4" />,
                            label: 'Dashboard',
                        },
                        {
                            key: 'customers',
                            icon: <AiOutlineUser className="fs-4" />,
                            label: 'Customers',
                        },
                        {
                            key: 'catalog',
                            icon: <AiOutlineShoppingCart className="fs-4" />,
                            label: 'Catalog',
                            children: [
                                {
                                    key: 'product',
                                    icon: (
                                        <AiOutlineShoppingCart className="fs-4" />
                                    ),
                                    label: 'Add Product',
                                },
                                {
                                    key: 'product-list',
                                    icon: <AiOutlineUser className="fs-4" />,
                                    label: 'Product List',
                                },
                                {
                                    key: 'brand',
                                    icon: <SiBrandfolder className="fs-4" />,
                                    label: 'Brand',
                                },
                                {
                                    key: 'list-brand',
                                    icon: <SiBrandfolder className="fs-4" />,
                                    label: 'Brand List',
                                },
                                {
                                    key: 'category',
                                    icon: <BiCategoryAlt className="fs-4" />,
                                    label: 'Category',
                                },
                                {
                                    key: 'list-category',
                                    icon: <BiCategoryAlt className="fs-4" />,
                                    label: 'Category List',
                                },
                                {
                                    key: 'color',
                                    icon: (
                                        <AiOutlineBgColors className="fs-4" />
                                    ),
                                    label: 'Color',
                                },
                                {
                                    key: 'list-color',
                                    icon: (
                                        <AiOutlineBgColors className="fs-4" />
                                    ),
                                    label: 'Color List',
                                },
                            ],
                        },
                        {
                            key: 'orders',
                            icon: <FaClipboardList className="fs-4" />,
                            label: 'Orders',
                        },
                        {
                            key: 'marketing',
                            icon: <RiCouponLine className="fs-4" />,
                            label: 'Marketing',
                            children: [
                                {
                                    key: 'coupon-add',
                                    icon: <RiCoupon3Line className="fs-4" />,
                                    label: 'Add Coupon',
                                },
                                {
                                    key: 'coupon-list',
                                    icon: <RiCouponLine className="fs-4" />,
                                    label: 'Coupon List',
                                },
                            ],
                        },
                        {
                            key: 'blog',
                            icon: <FaBloggerB className="fs-4" />,
                            label: 'Blogs',
                            children: [
                                {
                                    key: 'blog-add',
                                    icon: <ImBlog className="fs-4" />,
                                    label: 'Add Blog',
                                },
                                {
                                    key: 'blog-list',
                                    icon: <FaClipboardList className="fs-4" />,
                                    label: 'Blog List',
                                },
                                {
                                    key: 'blog-category',
                                    icon: <ImBlog className="fs-4" />,
                                    label: 'Add Blog Category',
                                },
                                {
                                    key: 'blog-category-list',
                                    icon: <FaClipboardList className="fs-4" />,
                                    label: 'Blog Category List',
                                },
                            ],
                        },
                        {
                            key: 'enquiries',
                            icon: <FaClipboardList className="fs-4" />,
                            label: 'Enquiries',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    className="d-flex justify-content-between ps-1 pd-5"
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={
                            collapsed ? (
                                <AiOutlinePicRight />
                            ) : (
                                <AiOutlinePicLeft />
                            )
                        }
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <div className="d-flex gap-4 align-items-center">
                        <div className="position-relative">
                            <IoIosNotifications className="fs-4"></IoIosNotifications>
                            <span className="badge bg-warning rounded-circle p-1 position-absolute">
                                4
                            </span>
                        </div>
                        <div className="d-flex gap-3 align-items-center dropdown">
                            <div>
                                <img
                                    src={avatar}
                                    alt=""
                                    style={{ width: '32px', height: '32px' }}
                                ></img>
                            </div>
                            <div
                                role="button"
                                id="dropdownMenuLink"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <h5 className="mb-0">
                                    {userLocalStore.firstname
                                        ? userLocalStore.firstname
                                        : 'Admin'}
                                </h5>
                                <p className="mb-0">
                                    {userLocalStore.email
                                        ? userLocalStore.email
                                        : 'Admin'}
                                </p>
                            </div>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuLink"
                            >
                                <li>
                                    <button
                                        className="dropdown-item py-1 mb-1"
                                        style={{
                                            heigh: 'auto',
                                            lineHeight: '20px',
                                        }}
                                        onClick={showModal}
                                    >
                                        More Profile
                                    </button>
                                </li>
                                <CustomModel
                                    title2="Your Information"
                                    open={open}
                                    hideModal={hideModal}
                                    title={`Full Name: ${
                                        userLocalStore.firstname +
                                        ' ' +
                                        userLocalStore.lastname
                                    } Mobile: ${userLocalStore.mobile} `}
                                    performAction={hideModal}
                                ></CustomModel>
                                <li>
                                    <button
                                        className="dropdown-item py-1 mb-1"
                                        style={{
                                            heigh: 'auto',
                                            lineHeight: '20px',
                                        }}
                                        onClick={() => {
                                            dispatch(logOut());
                                            setTimeout(() => {
                                                if (true) {
                                                    localStorage.removeItem(
                                                        'user',
                                                    );
                                                    navigate('/');
                                                }
                                            }, 2000);
                                        }}
                                    >
                                        LogOut
                                    </button>
                                </li>
                            </div>
                        </div>
                    </div>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        theme="light"
                    />
                    <Outlet></Outlet>
                </Content>
            </Layout>
        </Layout>
    );
};
export default MainLayout;
