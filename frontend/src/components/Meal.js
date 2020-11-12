import React from "react";
// import Rating from "./Rating";

export default function Meal(props) {
  const { meal } = props;
  return (
    <div>
      <div key={meal._id} className="card">
        <a href={`/meals/${meal._id}`}>
          <img className="medium" src={meal.image} alt={meal.name} />
        </a>
        <div className="card-body">
          <a href={`/meals/${meal._id}`}>
            <h2>{meal.name}</h2>
          </a>
          {/* <Rating rating={meal.rating}></Rating> */}
          <div className="price">${meal.price}</div>
        </div>
      </div>
    </div>
  );
}
