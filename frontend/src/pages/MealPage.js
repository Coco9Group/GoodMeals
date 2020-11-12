import React, { useEffect, useState } from "react";
import "./MealPage.css";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
//import Rating from "../components/Rating";
import { useDispatch, useSelector } from "react-redux";
import { detailsMeal } from "../actions/mealActions";

export default function MealPage(props) {
  const dispatch = useDispatch();
  const mealId = props.match.params.id;
  const mealDetails = useSelector((state) => state.mealDetails);
  const { loading, error, meal } = mealDetails;

  useEffect(() => {
    dispatch(detailsMeal(mealId));
  }, [dispatch, mealId]);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <div className="row">
            <div className="col-2">
              <img className="large" src={meal.image} alt={meal.name}></img>
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{meal.name}</h1>
                </li>
                {/* <li>
                      <Rating rating={meal.rating}></Rating>
                    </li> */}
                <li>Price: ${meal.price}</li>
                <li>
                  Description:
                  <p>{meal.description}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <button className="primary block">Add to Cart</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
