import React, { useEffect, useState } from 'react';
import "../App.css";
// import axios from 'axios';
import Meal from '../components/Meal';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import ImgCarouselComponent from "../components/ImgCarousel";
import { useDispatch, useSelector } from 'react-redux';
import { listMeals } from '../actions/mealActions';


export default function Home() {
    // const [meals, setMeals] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);

    const dispatch = useDispatch();
    const mealList = useSelector(state => state.mealList);

    const { loading, error, meals } = mealList;

    useEffect(() => {
        // const fetchData = async () => {
        //     try {
        //         setLoading(true);
        //         const { data } = await axios.get('/api/meals');
        //         setLoading(false);
        //         setMeals(data);
        //     } catch (err) {
        //         setError(err.message);
        //         setLoading(false);
        //     }
        // };
        // fetchData();

        dispatch(listMeals());

    }, [dispatch]);
    return (
        <div>
            <div>
                <ImgCarouselComponent></ImgCarouselComponent>
            </div>
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