import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsOrder } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';
import "./Order.css";

export default function Order(props) {
    //redux part
    const orderId = props.match.params.id;
    const [sdkReady, setSdkReady] = useState(false);
    const orderDetails = useSelector((state) => state.orderDetails);
    const { order, loading, error } = orderDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        const addPayPalScript = async () => {
            const { data } = await Axios.get('/api/config/paypal');
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
            script.async = true;
            script.onload = () => {
                setSdkReady(true);
            };
            document.body.appendChild(script);
        };

        if (!order) {
            dispatch(detailsOrder(orderId));
        } else {
            if (order.paymentMethod === "PayPal") {
                if (!window.paypal) {
                    addPayPalScript();
                } else {
                    setSdkReady(true);
                }
            }
        }
    }, [dispatch, order, orderId, sdkReady]);

    const successPaymentHandler = (paymentResult) => {
        //dispatch(payOrder(order, paymentResult));
    };

    //react part
    return loading ? (
        <LoadingBox></LoadingBox>
    ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
    ) : (
        <div>
            <h1>Ordered Successfully! Your Order Details</h1>
            <h2>Order Number: {order._id}</h2>
            <div className="porow top">
                <div className="pocol-2">
                    <ul>
                        <li>
                            <div className="pocard pocard-body">
                                <h2>Delivery Information</h2>
                                {order.deliveryMethod === 'Ship' ? (
                                    <div><p>
                                    <strong>Name:</strong> {order.shippingAddress.fullName} <br />
                                    <strong>Address: </strong> {order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.postalCode}<br />
                                    <strong>Phone:</strong> {order.shippingAddress.phone}
                                    </p></div>
                                    ) : (
                                        <div>
                                            Pickup location
                
                                            GoodMeals
                                            345 Oxford Street, London N56B3C
                                        </div>
                                    )
                                }
                            </div>
                        </li>
                        <li>
                            <div className="pocard pocard-body">
                                <h2>Payment</h2>
                                <p>
                                    <strong>{order.paymentMethod}</strong>

                                    {order.paymentMethod === 'CreditCard' ? (
                                        <div><strong>Card Holder:</strong> {order.creditCardInfo.holderName} <br />
                                        <strong>Card Number: </strong> {order.creditCardInfo.cardNumber.substring(0, 7)} *******<br />
                                        <strong>Expiry Date: </strong> {order.creditCardInfo.expiryDate}<br /></div>
                                        ) : (
                                        <div></div>
                                    )
                                }  
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="pocard pocard-body">
                                <h2>Order Items</h2>
                                <ul>
                                    {order.orderItems.map((item) => (
                                        <li key={item.meal}>
                                            <div className="porow">
                                                <div>
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                    ></img>
                                                </div>
                                                <div className="pomin-30">
                                                    <Link to={`/meal/${item.meal}`}>
                                                        {item.name}
                                                    </Link>
                                                </div>
                                                <div>
                                                    {item.qty} x ${item.price} = ${item.qty * item.price}
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>

                        <li>
                            <div className="pocard pocard-body">
                                <h2>Order Summary</h2>
                                <p>
                                    <strong>Items:</strong> ${order.itemsPrice.toFixed(2)} <br />
                                    <strong>Tax: </strong> ${order.taxPrice.toFixed(2)}<br />
                                    <strong>Total:</strong> <strong>${order.totalPrice.toFixed(2)}</strong>
                                </p>
                            </div>
                        </li>
                        {order.paymentMethod === "PayPal" && (
                            <li>
                                {!sdkReady ? (
                                    <LoadingBox></LoadingBox>
                                ) : (
                                        <>
                                            <PayPalButton
                                                amount={order.totalPrice}
                                                onSuccess={successPaymentHandler}
                                            ></PayPalButton>
                                        </>
                                    )}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
