import React, { useEffect } from "react";
import "../App.css";
import MealType from "../components/MealType";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listMeals } from "../actions/mealActions";
import { Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

export default function Paleo() {
  const dispatch = useDispatch();
  const mealList = useSelector((state) => state.mealList);

  const { loading, error, meals } = mealList;

  useEffect(() => {
    dispatch(listMeals());
  }, [dispatch]);

  return (
    <div>
      <div>
        <img
          src={"images/paleo/PaleoBanner.jpg"}
          alt="PaleoBanner"
          style={{
            marginLeft: "17.5%",
            marginTop: "1.5%",
            width: "65%",
            height: "auto",
          }}
        />
      </div>
      <Divider
        variant="middle"
        style={{
          marginLeft: "25%",
          width: "50%",
          marginTop: "1%",
          paddingBottom: "0.2%",
        }}
      />
      <div>
        <Grid
          style={{ paddingLeft: "3%", margin: "0px" }}
          lg={12}
          item
          container
          spacing={3}
        >
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <div className="row">
              {meals
                .filter((type) => type.dietplanName === "paleo")
                .map((filteredMeals) => (
                  <Grid
                    style={{ padding: "2%" }}
                    key={filteredMeals._id}
                    item
                    lg={3}
                  >
                    <MealType meal={filteredMeals}></MealType>
                  </Grid>
                ))}
            </div>
          )}
        </Grid>
      </div>
    </div>
  );
}
