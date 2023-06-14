import React from 'react';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs';

import NewLetter from '../images/newsletter.png';

const Footer = () => {
    return (
        <>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className='"footer-top-data d-flex gap-30 align-items-center'>
                                <img src={NewLetter} alt="newsletter"></img>
                                <h2 className="mb-0 text-white">
                                    Sign Up for News Letter
                                </h2>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="input-group py-1">
                                <input
                                    type="text"
                                    className="form-control py-1"
                                    placeholder="Your Email Address"
                                    aria-label="Your Email Address"
                                    aria-describedby="basic-addon2"
                                />
                                <span
                                    className="input-group-text p-2"
                                    id="basic-addon2"
                                >
                                    Subscribe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <h4 className="text-white mb-4">Contact Us</h4>
                            <div>
                                <address className="text-white fs-6">
                                    Hno: 277 Near Vill chopal,
                                    <br /> Soipat, Haryana <br />
                                    PinCode: 131103
                                </address>
                                <a
                                    href="tel: +91 9264099243"
                                    className="mt-3 d-block mb-1 text-white"
                                >
                                    +91 9264099243
                                </a>
                                <a
                                    href="mailto: AT@gmail.com"
                                    className="mt-2 d-block mb-0 text-white"
                                >
                                    AT@gmail.com
                                </a>
                                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                                    <a className="text-white" to="#">
                                        <BsLinkedin className="text-white fs-4"></BsLinkedin>
                                    </a>
                                    <a className="text-white" to="#">
                                        <BsInstagram className="text-white fs-4"></BsInstagram>
                                    </a>
                                    <a className="text-white" to="#">
                                        <BsGithub className="text-white fs-4"></BsGithub>
                                    </a>
                                    <a className="text-white" to="#">
                                        <BsYoutube className="text-white fs-4"></BsYoutube>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Information</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link
                                    className="text-white py-3 mb-1"
                                    to={'/privacy-policy'}
                                >
                                    Privacy Policy
                                </Link>
                                <Link
                                    className="text-white py-3 mb-1"
                                    to={'/refund-policy'}
                                >
                                    Refund Policy
                                </Link>
                                <Link
                                    className="text-white py-3 mb-1"
                                    to={'/shipping-policy'}
                                >
                                    Shipping Policy
                                </Link>
                                <Link
                                    className="text-white py-3 mb-1"
                                    to={'/term-conditions'}
                                >
                                    Terms & Conditions
                                </Link>
                                <Link
                                    className="text-white py-3 mb-1"
                                    to={'/blog'}
                                >
                                    Blogs
                                </Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Account</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-3 mb-1">
                                    About Us
                                </Link>
                                <Link className="text-white py-3 mb-1">
                                    Faq
                                </Link>
                                <Link className="text-white py-3 mb-1">
                                    Contact
                                </Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <h4 className="text-white mb-4">Quick Links</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-3 mb-1">
                                    Laptop
                                </Link>
                                <Link className="text-white py-3 mb-1">
                                    Headphones
                                </Link>
                                <Link className="text-white py-3 mb-1">
                                    Tablet
                                </Link>
                                <Link className="text-white py-3 mb-1">
                                    Watch
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center mb-0 text-white">
                                &copy; {new Date().getFullYear()}; Powered by AT
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
