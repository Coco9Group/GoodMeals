import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import MealPage from "./pages/MealPage";
import Navbar from "./components/navBar/Navbar";
import AboutUs from "./pages/AboutUs";
import Faq from "./pages/Faq";
import Review from "./pages/Review";
import Keto from "./pages/Keto";
import Footer from "./components/footer/footer.js";
import Diets from "./pages/Diets";
import Paleo from "./pages/Paleo";
import Vegan from "./pages/Vegan";
import Vegetarian from "./pages/Vegetarian";
import Meals from "./pages/Meals";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Order from "./pages/Order";
import OrderHistory from "./pages/OrderHistory";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/faq" exact component={Faq} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/review" exact component={Review} />
        <Route path="/diets" exact component={Diets} />
        <Route path="/keto" exact component={Keto} />
        <Route path="/vegan" exact component={Vegan} />
        <Route path="/paleo" exact component={Paleo} />
        <Route path="/vegetarian" exact component={Vegetarian} />
        <Route path="/meals" exact component={Meals} />
        <Route path="/meals/:id" component={MealPage} />
        <Route path="/log-in" exact component={Login} />
        <Route path="/sign-up" exact component={Signup} />
        <Route path="/order" exact component={Order} />
        <Route path="/orderhistory" exact component={OrderHistory} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
