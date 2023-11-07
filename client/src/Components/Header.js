/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { getProdCart } from '~/features/User/userSlice';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { getAProduct } from '~/features/Product/productSlice';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            dispatch(getProdCart());
        }, 300);
    }, [dispatch]);

    const [total, setTotal] = useState(null);
    const [productOpt, setProductOpt] = useState([]);
    const [paginate, setPaginate] = useState(true);

    const cartState = useSelector((state) => state?.auth?.getCartProduct);
    const authState = useSelector((state) => state?.auth);
    const productState = useSelector((state) => state?.product?.ProductData);

    const userLocalStore = localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user'))
        : null;

    useEffect(() => {
        let sum = 0;
        for (let index = 0; index < cartState?.length; index++) {
            sum =
                sum +
                Number(cartState[index].quantity) * cartState[index].price;
            setTotal(sum);
        }
    }, [cartState]);

    useEffect(() => {
        let data = [];
        for (let index = 0; index < productState?.length; index++) {
            const element = productState[index];
            data.push({ id: index, prod: element?._id, name: element?.title });
        }
        setProductOpt(data);
    }, [productState]);

    const handleLogOut = () => {
        localStorage.clear();
        window.location.reload();
    };

    return (
        <>
            <header className="header-top-strip py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p className="text-white mb-0">
                                Free shipping Over $100 & Free Return
                            </p>
                        </div>
                        <div className="col-6">
                            <p className="text-end text-white mb-0">
                                Hotline:{' '}
                                <a
                                    href="Tel: +91 826495434"
                                    className="text-white"
                                >
                                    +91 826495234
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-upper py-3">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h1>
                                <Link className="text-white" to={'/'}>
                                    AT
                                </Link>
                            </h1>
                        </div>
                        <div className="col-5">
                            <div className="input-group input-group-search">
                                <Typeahead
                                    id="pagination-example"
                                    onPaginate={() =>
                                        console.log('Results paginated')
                                    }
                                    onChange={(selected) => {
                                        navigate(
                                            `/store/product/${selected[0]?.prod}`,
                                        );
                                        dispatch(
                                            getAProduct(selected[0]?.prod),
                                        );
                                    }}
                                    options={productOpt}
                                    paginate={paginate}
                                    minLength={2}
                                    labelKey={'name'}
                                    placeholder="Search for Products here..."
                                />
                                <span
                                    className="input-group-text p-3"
                                    id="basic-addon2"
                                >
                                    <BsSearch className="fs-6"></BsSearch>
                                </span>
                            </div>
                        </div>
                        <div className="col-5">
                            <header className="header-upper-links d-flex align-items-center justify-content-between">
                                <div>
                                    <Link
                                        to={'/compare-product'}
                                        className="d-flex align-items-center gap-10 text-white"
                                    >
                                        <img
                                            src="images/compare.svg"
                                            alt="compare"
                                        ></img>
                                        <p>
                                            Compare <br />
                                            Products
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        to={'/wishlist'}
                                        className="d-flex align-items-center gap-10 text-white"
                                    >
                                        <img
                                            src="images/wishlist.svg"
                                            alt="wishlist"
                                        ></img>
                                        <p>
                                            Favourite <br />
                                            Wishlist
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    {authState?.auth === '' ||
                                    userLocalStore?.lastname === undefined ? (
                                        <Link
                                            to={'/login'}
                                            className="d-flex align-items-center gap-10 text-white"
                                        >
                                            <img
                                                src="images/user.svg"
                                                alt="user"
                                            ></img>
                                            <p>
                                                Login <br />
                                                Login
                                            </p>
                                        </Link>
                                    ) : (
                                        <div
                                            className="d-flex align-items-center gap-10 text-white dropdown"
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <div
                                                className="dropdown-toggle d-flex align-items-center gap-15 "
                                                id="dropdownMenuButton"
                                                data-bs-toggle="dropdown"
                                            >
                                                <img
                                                    src="images/user.svg"
                                                    alt="user"
                                                ></img>
                                                welcome <br />
                                                {userLocalStore?.lastname}
                                            </div>
                                            <ul
                                                className="dropdown-menu header-bottom"
                                                aria-labelledby="dropdownMenuButton1"
                                                style={{
                                                    backgroundColor: '#000000',
                                                }}
                                            >
                                                <li>
                                                    <Link
                                                        className="dropdown-item text-white"
                                                        to={'/profile'}
                                                    >
                                                        Profile
                                                    </Link>
                                                </li>
                                                <li>
                                                    <div className="dropdown-item text-white">
                                                        Reset Password
                                                    </div>
                                                </li>
                                                <li onClick={handleLogOut}>
                                                    <div className="dropdown-item text-white">
                                                        Log Out
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <Link
                                        to={'/cart'}
                                        className="d-flex align-items-center gap-10 text-white"
                                    >
                                        <img
                                            src="images/cart.svg"
                                            alt="cart"
                                        ></img>
                                        <div className="d-flex flex-column gap-10">
                                            <span className="badge bg-white text-dark">
                                                {cartState?.length
                                                    ? cartState?.length
                                                    : '0'}
                                            </span>
                                            <p className="mb-0">
                                                ${total ? total : '0'}
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </header>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-bottom py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-bottom d-flex align-items-center gap-30">
                                <div>
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                                            type="button"
                                            id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <img src="images/menu.svg"></img>
                                            <span className="me-5 d-inline-block">
                                                {' '}
                                                Shop Categories
                                            </span>
                                        </button>
                                        <ul
                                            className="dropdown-menu"
                                            aria-labelledby="dropdownMenuButton1"
                                        >
                                            <li>
                                                <Link
                                                    className="dropdown-item text-white"
                                                    to={''}
                                                >
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item text-white"
                                                    to={''}
                                                >
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item text-white"
                                                    to={''}
                                                >
                                                    Action
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="menu-links">
                                    <div className="d-flex align-items-center gap-15">
                                        <NavLink to={''}>Home</NavLink>
                                        <NavLink to={'/store'}>
                                            Our Store
                                        </NavLink>
                                        <NavLink to={'/my-order'}>
                                            My Orders
                                        </NavLink>
                                        <NavLink to={'/blog'}>Blogs</NavLink>
                                        <NavLink to={'/contact'}>
                                            Contact
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
