import React, { useEffect, useState } from 'react';
import "./MealPage.css";
import Meal from '../components/Meal';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listMeals } from '../actions/mealActions';

export default function Meals() {
    const dispatch = useDispatch();
    const mealList = useSelector(state => state.mealList);

    const { loading, error, meals } = mealList;

    useEffect(() => {

        dispatch(listMeals());

    }, [dispatch]);
    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                        <div className="row center">
                            {meals.map(meal => (
                                <Meal key={meal._id} meal={meal}></Meal>
                            ))}
                        </div>
                    )}
        </div>
    );
}







