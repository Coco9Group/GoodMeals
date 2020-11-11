import Axios from 'axios';
import {
    MEAL_LIST_FAIL,
    MEAL_LIST_REQUEST,
    MEAL_LIST_SUCCESS,
} from '../constants/mealConstants';

export const listMeals = () => async (dispatch) => {
    dispatch({
        type: MEAL_LIST_REQUEST
    });
    try {
        const { data } = await Axios.get('/api/meals');
        dispatch({ type: MEAL_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: MEAL_LIST_FAIL, payload: error.message });
    }
};