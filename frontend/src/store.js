import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { mealDetailsReducer, mealListReducer } from './reducers/mealReducers';

const initialState = {};

const reducer = combineReducers({
  mealList: mealListReducer,
  mealDetails: mealDetailsReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
