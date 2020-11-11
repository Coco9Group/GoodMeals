import React from "react";
import data from "../data";
import "./MealPage.css";
import Rating from "../components/Rating";

export default function MealPage(props) {
  const meal = data.meals.find((x) => x._id === props.match.params.id);
  if (!meal) {
    return <div>Meal not Found</div>;
  }
  return (
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
            <li>
              <Rating rating={meal.rating}></Rating>
            </li>
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
  );
}
