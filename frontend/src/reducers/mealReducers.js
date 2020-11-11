const {
    MEAL_LIST_REQUEST,
    MEAL_LIST_SUCCESS,
    MEAL_LIST_FAIL,
} = require('../constants/mealConstants');

export const mealListReducer = (state = { loading: true, meals: [] }, action) => {
    switch (action.type) {
        case MEAL_LIST_REQUEST:
            return { loading: true };
        case MEAL_LIST_SUCCESS:
            return { loading: false, meals: action.payload };
        case MEAL_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
