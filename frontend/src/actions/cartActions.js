import Axios from 'axios';
import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    //   CART_SAVE_SHIPPING_ADDRESS,
    //   CART_SAVE_PAYMENT_METHOD,
} from '../constants/cartConstants';

export const addToCart = (mealId, qty) => async (dispatch, getState) => {
    const { data } = await Axios.get(`/api/meals/${mealId}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name: data.name,
            image: data.image,
            price: data.price,
            meal: data._id,
            qty,
        },
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (mealId) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: mealId });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

