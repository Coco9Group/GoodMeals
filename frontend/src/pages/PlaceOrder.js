import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import "./Order.css";

import { createOrder } from '../actions/orderActions';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';

export default function PlaceOrder(props) {
    const cart = useSelector((state) => state.cart);
    if (!cart.paymentMethod) {
        props.history.push('/payment');
    }

    //from redux store
    const orderCreate = useSelector((state) => state.orderCreate);
    const { loading, success, error, order } = orderCreate;

    const toPrice = (num) => Number(num.toFixed(2)); // 1.173 => "1.17" => 1.17
    cart.itemsPrice = toPrice(cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0));
    cart.taxPrice = toPrice(0.13 * cart.itemsPrice);
    cart.totalPrice = cart.itemsPrice + cart.taxPrice;
    const dispatch = useDispatch();
    const placeOrderHandler = () => {
        //replace cartItems to orderItems.
        dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
    };

    useEffect(() => {
        if (success) {  //order created successfully
            props.history.push(`/order/${order._id}`);
            dispatch({ type: ORDER_CREATE_RESET });
        }
    }, [dispatch, order, props.history, success]);

    return (
        <div
        style={{
            backgroundImage: "url(/images/paymentimg2.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            paddingTop: "3%",
            marginTop: "-2%",
            paddingBottom: "3%",
            height: "100%",
            paddingLeft:"2em"
        }}>
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
            <div className="porow top">
                <div className="pocol-2">
                    <ul >
                        <li>
                            <div className="pocard pocard-body">
                                <h2>Delivery Information</h2>

                                {cart.deliveryMethod === 'Ship' ? (
                                    <div><p>
                                        <strong>Name:</strong> {cart.shippingAddress.fullName} <br />
                                        <strong>Address: </strong> {cart.shippingAddress.address}, {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}<br />
                                        <strong>Phone:</strong> {cart.shippingAddress.phone}
                                    </p></div>
                                ) : (
                                        <div>
                                            Pickup
                                            - pickup location
                                            GoodMeals
                                            345 Oxford Street, London N56B3C
                                            phone: 519)555-6686
                                        </div>
                                    )
                                }
                            </div>
                        </li>
                        <li>
                            <div className="pocard pocard-body">
                                <h2>Payment</h2>
                                <p>
                                    <strong>{cart.paymentMethod}</strong>

                                    {cart.paymentMethod === 'CreditCard' ? (
                                        <div><strong>Card Holder:</strong> {cart.creditCardInfo.holderName} <br />
                                            <strong>Card Number: </strong> {cart.creditCardInfo.cardNumber.substring(0, 7)} *******<br />
                                            <strong>Expiry Date: </strong> {cart.creditCardInfo.expiryDate}<br /></div>
                                    ) : (
                                            <div>After clicking “Place order”, you will see PayPal button to complete your purchase securely.</div>
                                        )
                                    }
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="pocard pocard-body">
                                <h2>Order Items</h2>
                                <ul>
                                    {cart.cartItems.map((item) => (
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
                                    <strong>Items:</strong> ${cart.itemsPrice.toFixed(2)} <br />
                                    <strong>Tax: </strong> ${cart.taxPrice.toFixed(2)}<br />
                                    <strong>Total:</strong> <strong>${cart.totalPrice.toFixed(2)}</strong>
                                </p>
                                <button
                                    type="button"
                                    onClick={placeOrderHandler}
                                    disabled={cart.cartItems.length === 0}
                                >
                                    Place Order
                                </button>
                            </div>
                        </li>
                        {loading && <LoadingBox></LoadingBox>}
                        {error && <MessageBox variant="danger">{error}</MessageBox>}
                    </ul>
                </div>
            </div>
        </div>
    );
}
