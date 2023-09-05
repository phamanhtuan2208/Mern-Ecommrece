import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BreadCrumb from '~/Components/BreadCrumb';
import Container from '~/Components/Container';
import { getUsersOrder } from '~/features/User/userSlice';

const Orders = () => {
    const dispatch = useDispatch();
    const orderState = useSelector((state) => state?.auth?.getOrderedProduct);

    useEffect(() => {
        dispatch(getUsersOrder());
    }, [dispatch]);
    return (
        <>
            <BreadCrumb title="My Orders"></BreadCrumb>
            <Container class1="checkout-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12 mt-3">
                        <div className="row">
                            <div className="col-3">
                                <h5>Order Id</h5>
                            </div>
                            <div className="col-3">
                                <h5>Amount</h5>
                            </div>
                            <div className="col-3">
                                <h5>Total Amount after Discount</h5>
                            </div>
                            <div className="col-3">
                                <h5>Status</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        {orderState &&
                            orderState?.map((item, index) => {
                                return (
                                    <div className="row my-3" key={index}>
                                        <div
                                            style={{
                                                marginLeft: '-12px',
                                                backgroundColor: '#fedb69',
                                            }}
                                        >
                                            <div className="row">
                                                <div className="col-3">
                                                    <p>{item?._id}</p>
                                                </div>
                                                <div className="col-3">
                                                    <p>{item?.totalPrice}</p>
                                                </div>
                                                <div className="col-3">
                                                    <p>
                                                        {
                                                            item?.totalPriceAfterDiscount
                                                        }
                                                    </p>
                                                </div>
                                                <div className="col-3">
                                                    <p>{item?.orderStatus}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="row p-3"
                                            style={{
                                                color: 'white',
                                                backgroundColor: '#232f3e',
                                            }}
                                        >
                                            <div className="col-3">
                                                <h6>Product Name</h6>
                                            </div>
                                            <div className="col-3">
                                                <h6>Quantity</h6>
                                            </div>
                                            <div className="col-3">
                                                <h6>Price</h6>
                                            </div>
                                            <div className="col-3">
                                                <h6>Color</h6>
                                            </div>
                                            <div className="col-12">
                                                <div className="row">
                                                    {item?.orderItems?.map(
                                                        (i, index) => {
                                                            return (
                                                                <div
                                                                    key={index}
                                                                    className="row"
                                                                >
                                                                    <div className="col-3">
                                                                        <p>
                                                                            {
                                                                                i
                                                                                    ?.product
                                                                                    ?.title
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    <div className="col-3">
                                                                        <p>
                                                                            {
                                                                                i?.quantity
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    <div className="col-3">
                                                                        <p>
                                                                            {
                                                                                i?.price
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    <div className="col-3">
                                                                        <ul className="colors">
                                                                            <li
                                                                                style={{
                                                                                    backgroundColor:
                                                                                        i
                                                                                            ?.color
                                                                                            ?.title,
                                                                                }}
                                                                            ></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            );
                                                        },
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Orders;
