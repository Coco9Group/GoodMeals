import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import { saveCreditCardInfo } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function PaymentMethod(props) {
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
    const { creditCardInfo } = cart;
    if (!shippingAddress.address && cart.deliveryMethod === "Ship") {
        props.history.push('/shipping');
    }

    const [holderName, setHolderName] = useState(creditCardInfo.holderName);
    const [cardNumber, setCardNumber] = useState(creditCardInfo.cardNumber);
    const [expiryDate, setExpiryDate] = useState(creditCardInfo.expiryDate);
    const [securityCode, setSecurityCode] = useState(creditCardInfo.securityCode);

    const [paymentMethod, setPaymentMethod] = useState('CreditCard');
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        dispatch(saveCreditCardInfo({ holderName, cardNumber, expiryDate, securityCode }));
        props.history.push('/placeorder');
    };
    return (
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <form onSubmit={submitHandler}>
                <div>
                    <h1>Payment</h1>
                </div>
                <div>
                    <div>
                        <input
                            type="radio"
                            id="creditcard"
                            value="CreditCard"
                            name="paymentMethod"
                            //required
                            checked={paymentMethod === "CreditCard"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        ></input>
                        <label htmlFor="creditcard">Credit Card</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input
                            type="radio"
                            id="paypal"
                            value="PayPal"
                            name="paymentMethod"
                            //required
                            checked={paymentMethod === "PayPal"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        ></input>
                        <label htmlFor="paypal">PayPal</label>
                    </div>
                </div>

                {paymentMethod === 'CreditCard' ? (
                    <div>
                        <div>
                            <h2>Credit Card Information </h2>
                        </div>
                        <div>
                            <label htmlFor="holderName">Card Holder</label>
                            <input
                                type="text"
                                id="holderName"
                                placeholder="Enter Holder Name"
                                value={holderName}
                                onChange={(e) => setHolderName(e.target.value)}
                                required
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="cardNumber">Card Number</label>
                            <input
                                type="text"
                                id="cardNumber"
                                placeholder="Enter Card Number"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                required
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="expiryDate">Expiry Date</label>
                            <input
                                type="text"
                                id="expiryDate"
                                placeholder="Enter Expiry Date"
                                value={expiryDate}
                                onChange={(e) => setExpiryDate(e.target.value)}
                                required
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="securityCode">Security Code</label>
                            <input
                                type="text"
                                id="securityCode"
                                placeholder="Enter Security Code"
                                value={securityCode}
                                onChange={(e) => setSecurityCode(e.target.value)}
                                required
                            ></input>
                        </div>
                    </div>
                ) : (
                        <div>After clicking “Place order”, you will see PayPal button to complete your purchase securely.</div>
                    )
                }

                <div>
                    <label />
                    <button type="submit">
                        Continue to Order
                    </button>
                </div>
            </form>
        </div>
    );
}
