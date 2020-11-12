import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';

export default function Cart(props) {
    const mealId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split('=')[1])
        : 1;

    const dispatch = useDispatch();
    useEffect(() => {
        if (mealId) {
            dispatch(addToCart(mealId, qty));
        }
    }, [dispatch, mealId, qty]);

    return (
        <div>
            <h1>Cart</h1>
            <p>
                ADD TO CART : Meal: {mealId} Qty: {qty}
            </p>

        </div>
    );
}