import React, { useEffect, useState } from "react";
import Meal from "../components/Meal";
import MealType from "../components/MealType";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listMeals } from "../actions/mealActions";
import { Grid } from "@material-ui/core";

export default function Paleo() {
  const dispatch = useDispatch();
  const mealList = useSelector((state) => state.mealList);

  const { loading, error, meals } = mealList;

  useEffect(() => {
    dispatch(listMeals());
  }, [dispatch]);

  return (
    <div>
      <Grid style={{ marginTop: "0.5%" }} lg={10} item container spacing={3}>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="row center">
            {meals
              .filter((type) => type.dietplanName === "paleo")
              .map((filteredMeals) => (
                <Grid item lg={4}>
                  <h1>{filteredMeals.name}</h1>
                  <MealType
                    key={filteredMeals._id}
                    meal={filteredMeals}
                  ></MealType>
                </Grid>
              ))}
          </div>
        )}
      </Grid>
    </div>
  );
}
