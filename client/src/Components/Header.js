import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
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
                                <Link className="text-white">AT</Link>
                            </h1>
                        </div>
                        <div className="col-5">
                            <div className="input-group input-group-search">
                                <input
                                    type="text"
                                    className="form-control py-2"
                                    placeholder="Search Product Here..."
                                    aria-label="Search Product Here..."
                                    aria-describedby="basic-addon2"
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
                                    <Link className="d-flex align-items-center gap-10 text-white">
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
                                    <Link className="d-flex align-items-center gap-10 text-white">
                                        <img
                                            src="images/wishlist.svg"
                                            alt="wishlist"
                                        ></img>
                                        <p>
                                            Wishlist <br />
                                            Wishlist
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className="d-flex align-items-center gap-10 text-white">
                                        <img
                                            src="images/user.svg"
                                            alt="user"
                                        ></img>
                                        <p>
                                            Login <br />
                                            Login
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className="d-flex align-items-center gap-10 text-white">
                                        <img
                                            src="images/cart.svg"
                                            alt="cart"
                                        ></img>
                                        <div className="d-flex flex-column gap-10">
                                            <span className="badge bg-white text-dark">
                                                0
                                            </span>
                                            <p className="mb-0">$500</p>
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
                                        <NavLink to={''}>Blogs</NavLink>
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
