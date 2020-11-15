import Axios from 'axios';
import {
    //   USER_DETAILS_FAIL,
    //   USER_DETAILS_REQUEST,
    //   USER_DETAILS_SUCCESS,
    USER_SIGNUP_FAIL,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    //   USER_UPDATE_PROFILE_FAIL,
    //   USER_UPDATE_PROFILE_REQUEST,
    //   USER_UPDATE_PROFILE_SUCCESS,
} from '../constants/userConstants';

export const login = (email, password) => async (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST, payload: { email, password } });
    try {
        const { data } = await Axios.post('/api/users/login', { email, password });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('cartItems');
    // localStorage.removeItem('shippingAddress');
    dispatch({ type: USER_LOGOUT });
};

export const signup = (name, email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNUP_REQUEST, payload: { email, password } });
    try {
        const { data } = await Axios.post('/api/users/signup', { name, email, password });
        dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_SIGNUP_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};


