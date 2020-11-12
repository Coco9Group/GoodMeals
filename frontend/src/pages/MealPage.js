import React, { useEffect, useState } from "react";
import "./MealPage.css";
import { Link } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
//import Rating from "../components/Rating";
import { useDispatch, useSelector } from "react-redux";
import { detailsMeal } from "../actions/mealActions";

export default function MealPage(props) {
  const dispatch = useDispatch();
  const mealId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const mealDetails = useSelector((state) => state.mealDetails);
  const { loading, error, meal } = mealDetails;

  useEffect(() => {
    dispatch(detailsMeal(mealId));
  }, [dispatch, mealId]);

  const addToCartHandler = () => {
    props.history.push(`/cart/${mealId}?qty=${qty}`);
  };

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
                    <li>Price: ${meal.price}</li>
                    <li>
                      Description:
                      <p>{meal.description}</p>
                    </li>
                    <li>
                      <div className="row">
                        <div>Qty</div>
                        <div>
                          <select
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            <option key="1" value="1">1</option>
                            <option key="2" value="2">2</option>
                            <option key="3" value="3">3</option>
                            <option key="4" value="4">4</option>
                            <option key="5" value="5">5</option>
                            <option key="6" value="6">6</option>
                            <option key="7" value="7">7</option>
                            <option key="8" value="8">8</option>
                            <option key="9" value="9">9</option>
                            <option key="10" value="10">10</option>
                          </select>
                        </div>
                      </div>
                    </li>
                    <li>
                      <button onClick={addToCartHandler} className="primary block">Add to Cart</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
    </div>
  );
}
