import { Button, Layout, Menu, theme } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
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
// avatar
import avatar from '@/Images/Avatar.jpg';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { Header, Sider, Content } = Layout;
const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const navigate = useNavigate();

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
                            key: 'blog',
                            icon: <FaBloggerB className="fs-4" />,
                            label: 'Blogs',
                            children: [
                                {
                                    key: 'blog-add',
                                    icon: <ImBlog className="fs-4" />,
                                    label: 'Add List',
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
                                <h5 className="mb-0">AT</h5>
                                <p className="mb-0">
                                    anhtuanpham2208@gmail.com
                                </p>
                            </div>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuLink"
                            >
                                <li>
                                    <Link
                                        className="dropdown-item py-1 mb-1"
                                        style={{
                                            heigh: 'auto',
                                            lineHeight: '20px',
                                        }}
                                        to="#"
                                    >
                                        View Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="dropdown-item py-1 mb-1"
                                        style={{
                                            heigh: 'auto',
                                            lineHeight: '20px',
                                        }}
                                        to="#"
                                    >
                                        Signout
                                    </Link>
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
