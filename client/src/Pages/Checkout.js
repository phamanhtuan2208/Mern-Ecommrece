import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import Watch from '~/images/watch.jpg';
import Container from '~/Components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { createAnOrder, getProdCart } from '~/features/User/userSlice';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { config } from '~/Utils/axiosConfig';

const Checkout = () => {
    const dispatch = useDispatch();
    const cartState = useSelector((state) => state?.auth?.getCartProduct);
    const [total, setTotal] = useState(0);
    const [shippingInfo, setShippingInfo] = useState(null);
    const [paymentInfo, setPaymentInfo] = useState({
        razorPayPaymentId: '',
        razorPayOrderId: '',
    });
    const [cartProductState, setCartProductState] = useState([]);

    useEffect(() => {
        dispatch(getProdCart());
    }, [dispatch]);

    const ShippingSchema = yup.object({
        firstName: yup.string().required('First Name is required'),
        lastName: yup.string().required('Last Name is required'),
        address: yup.string().required('address is required'),
        state: yup.string().required('State is required'),
        city: yup.string().required('City is required'),
        other: yup.string(),
        country: yup.string().required('Country is required'),
        pinCode: yup.string().required('PinCode is required'),
    });

    console.log(cartProductState);

    useEffect(() => {
        let sumTotal = 0;
        for (let index = 0; index < cartState?.length; index++) {
            sumTotal =
                sumTotal + cartState[index].price * cartState[index].quantity;
        }
        setTotal(sumTotal);
    }, [cartState]);

    useEffect(() => {
        let items = [];
        for (let index = 0; index < cartState?.length; index++) {
            items.push({
                product: cartState[index].productId._id,
                quantity: cartState[index].quantity,
                color: cartState[index].color._id,
                price: cartState[index].price,
            });
        }
        setCartProductState(items);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    const checkOutHandler = async () => {
        const res = await loadScript(
            'https://checkout.razorpay.com/v1/checkout.js',
        );
        if (!res) {
            alert('Razor pay SDK failed to Load');
            return;
        }
        const result = await axios.post(
            'http://localhost:5000/api/user/order/checkout',
            { amount: total + 5 },
            config,
        );
        if (!result) {
            alert('Something went Wrong');
            return;
        }
        const { amount, id: order_id, currency } = result.data.order;
        const options = {
            key: process.env.REACT_APP_RAZORPAY_ID, // Enter the Key ID generated from the Dashboard
            amount: amount,
            currency: currency,
            name: 'AT',
            description: 'Test Transaction',

            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                };

                const result = await axios.post(
                    'http://localhost:5000/api/user/order/paymentVerification',
                    data,
                    config,
                );
                setPaymentInfo({
                    razorPayPaymentId: response.razorpay_payment_id,
                    razorPayOrderId: response.razorpay_order_id,
                });
            },
            prefill: {
                name: 'AT',
                email: 'tuantonychannel@example.com',
                contact: '9999999999',
            },
            notes: {
                address: 'ABC',
            },
            theme: {
                color: '#61dafb',
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    useEffect(() => {
        if (
            total &&
            cartProductState &&
            paymentInfo.razorPayOrderId !== '' &&
            paymentInfo.razorPayPaymentId !== '' &&
            shippingInfo
        ) {
            setTimeout(() => {
                dispatch(
                    createAnOrder({
                        totalPrice: total + 5,
                        totalPriceAfterDiscount: total,
                        orderItems: cartProductState,
                        paymentInfo: paymentInfo,
                        shippingInfo: shippingInfo,
                    }),
                );
            }, 200);
        }
    }, [cartProductState, dispatch, paymentInfo, shippingInfo, total]);

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            address: '',
            state: '',
            city: '',
            country: '',
            pinCode: '',
        },
        validationSchema: ShippingSchema,
        onSubmit: (values) => {
            checkOutHandler();
            setShippingInfo(values);
        },
    });

    return (
        <>
            <Container class1="checkout-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-7">
                            <div className="checkout-left-data">
                                <h3 className="website-name">AT</h3>
                                <nav
                                    style={{ '--bs-breadcrumb-divider': '>' }}
                                    aria-label="breadcrumb"
                                >
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link
                                                className="text-dark total-price"
                                                to="/cart"
                                            >
                                                Cart
                                            </Link>
                                        </li>
                                        &nbsp; /
                                        <li
                                            className="breadcrumb-item total-price active"
                                            aria-current="page"
                                        >
                                            Information
                                        </li>
                                        &nbsp; / &nbsp;
                                        <li className="breadcrumb-item total-price active">
                                            Shipping
                                        </li>
                                        &nbsp; /
                                        <li
                                            className="breadcrumb-item total-price active"
                                            aria-current="page"
                                        >
                                            Payment
                                        </li>
                                    </ol>
                                </nav>
                                <h4 className="title total">
                                    Contact Information
                                </h4>
                                <p className="user-details total">
                                    PhamAnhTuan (anhtuanpham2208@gmail.com)
                                </p>
                                <h4 className="mb-3">Shipping Address</h4>
                                <form
                                    onSubmit={formik.handleSubmit}
                                    className="d-flex gap-15 flex-wrap justify-content-between"
                                >
                                    <div className="w-100">
                                        <select
                                            onChange={formik.handleChange(
                                                'country',
                                            )}
                                            onBlur={formik.handleBlur(
                                                'country',
                                            )}
                                            value={formik.values.country}
                                            className="form-control form-select"
                                        >
                                            <option value={''}>
                                                Select Country
                                            </option>
                                            <option value={'Vietnam'}>
                                                Vietnam
                                            </option>
                                        </select>
                                        <div className="error ms-2 my-1">
                                            {formik.touched.country &&
                                                formik.errors.country}
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <input
                                            className="form-control"
                                            type={'text'}
                                            placeholder="First Name"
                                            onChange={formik.handleChange(
                                                'firstName',
                                            )}
                                            onBlur={formik.handleBlur(
                                                'firstName',
                                            )}
                                            value={formik.values.firstName}
                                        ></input>
                                        <div className="error ms-2 my-1">
                                            {formik.touched.firstName &&
                                                formik.errors.firstName}
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <input
                                            className="form-control"
                                            placeholder="Last Name"
                                            type={'text'}
                                            onChange={formik.handleChange(
                                                'lastName',
                                            )}
                                            onBlur={formik.handleBlur(
                                                'lastName',
                                            )}
                                            value={formik.values.lastName}
                                        ></input>
                                        <div className="error ms-2 my-1">
                                            {formik.touched.lastName &&
                                                formik.errors.lastName}
                                        </div>
                                    </div>
                                    <div className="w-100">
                                        <input
                                            className="form-control"
                                            placeholder="Apartment, Suite, ETC"
                                            type={'text'}
                                            onChange={formik.handleChange(
                                                'address',
                                            )}
                                            onBlur={formik.handleBlur(
                                                'address',
                                            )}
                                            value={formik.values.address}
                                        ></input>
                                        <div className="error ms-2 my-1">
                                            {formik.touched.address &&
                                                formik.errors.address}
                                        </div>
                                    </div>
                                    <div className="w-100">
                                        <input
                                            placeholder="Apartment, Suite, ETC (other)"
                                            className="form-control"
                                            type={'text'}
                                            onChange={formik.handleChange(
                                                'other',
                                            )}
                                            onBlur={formik.handleBlur('other')}
                                            value={formik.values.other}
                                        ></input>
                                        <div className="error ms-2 my-1">
                                            {formik.touched.other &&
                                                formik.errors.other}
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <input
                                            placeholder="City"
                                            className="form-control"
                                            type={'text'}
                                            onChange={formik.handleChange(
                                                'city',
                                            )}
                                            onBlur={formik.handleBlur('city')}
                                            value={formik.values.city}
                                        ></input>
                                        <div className="error ms-2 my-1">
                                            {formik.touched.city &&
                                                formik.errors.city}
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <select
                                            className="form-control form-select"
                                            name=""
                                            onChange={formik.handleChange(
                                                'state',
                                            )}
                                            onBlur={formik.handleBlur('state')}
                                            value={formik.values.state}
                                        >
                                            <option value={''}>
                                                Select State
                                            </option>
                                            <option value={'Vietnam'}>
                                                Vietnam
                                            </option>
                                        </select>
                                        <div className="error ms-2 my-1">
                                            {formik.touched.state &&
                                                formik.errors.state}
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <input
                                            placeholder="Zipcode"
                                            className="form-control"
                                            type={'text'}
                                            onChange={formik.handleChange(
                                                'pinCode',
                                            )}
                                            onBlur={formik.handleBlur(
                                                'pinCode',
                                            )}
                                            value={formik.values.pinCode}
                                        ></input>
                                        <div className="error ms-2 my-1">
                                            {formik.touched.pinCode &&
                                                formik.errors.pinCode}
                                        </div>
                                    </div>
                                    <div className="w-100">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Link
                                                to="/cart"
                                                className="text-dark"
                                            >
                                                <BiArrowBack className="me-2"></BiArrowBack>
                                                &nbsp; Return to Cart
                                            </Link>
                                            <Link to="/cart" className="button">
                                                Continue to Shipping
                                            </Link>
                                            <button
                                                className="button"
                                                type="submit"
                                            >
                                                Place Order
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="border-bottom py-4">
                                {cartState &&
                                    cartState?.map((items, index) => {
                                        return (
                                            <div
                                                className="d-flex gap-10 mb-2 align-items-center"
                                                key={index}
                                            >
                                                <div className="w-75 d-flex gap-10">
                                                    <div className="w-25 position-relative">
                                                        <span
                                                            style={{
                                                                top: '-10px',
                                                                right: '2px',
                                                            }}
                                                            className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                                                        >
                                                            {items?.quantity}
                                                        </span>
                                                        <img
                                                            src={
                                                                items?.productId
                                                                    .images[0]
                                                                    ?.url
                                                                    ? items
                                                                          ?.productId
                                                                          .images[0]
                                                                          ?.url
                                                                    : Watch
                                                            }
                                                            alt=""
                                                            className="img-fluid"
                                                        ></img>
                                                    </div>
                                                    <div>
                                                        <h5 className="total-price">
                                                            {
                                                                items?.productId
                                                                    ?.title
                                                            }
                                                        </h5>
                                                        <p className="total-price">
                                                            <ul className="colors ps-0">
                                                                <li
                                                                    style={{
                                                                        backgroundColor: `${
                                                                            items
                                                                                ?.color
                                                                                ?.title
                                                                                ? items
                                                                                      ?.color
                                                                                      ?.title
                                                                                : 'red'
                                                                        }`,
                                                                    }}
                                                                ></li>
                                                            </ul>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5>
                                                        $
                                                        {Number(
                                                            items?.quantity,
                                                        ) *
                                                            Number(
                                                                items?.price,
                                                            )}
                                                    </h5>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>

                            <div className="border-bottom py-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="total">Subtotal</p>
                                    <p className="total-price">
                                        $ {total ? total : '0'}
                                    </p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="mb-0 total">Shipping</p>
                                    <p className="mb-0 total-price">$ 5</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                                <h4 className="total">Total</h4>
                                <h5 className="total-price">
                                    $ {total ? total + 5 : '5'}
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Checkout;
