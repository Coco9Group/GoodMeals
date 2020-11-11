import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "white",
          paddingTop: "2%",
          paddingBottom: "2%",
          paddingLeft: "30%",
        }}
      >
        <div className="row pt-5">
          {/* Col 1 */}
          <div className="col-sm-3 col-xs-12">
            <h3>Menu</h3>
            <ul className="list-inline mx-auto justify-content-center">
              <Link to="/">
                <li>Menu</li>
              </Link>
            </ul>
            <ul className="list-inline mx-auto justify-content-center">
              <Link to="/">
                <li>Meal Plans</li>
              </Link>
            </ul>
            <ul className="list-inline mx-auto justify-content-center">
              <Link to="/">
                <li>Recipes</li>
              </Link>
            </ul>
          </div>
          {/* Col 2 */}
          <div className="col-sm-3 col-xs-12">
            <h3>Support</h3>
            <ul className="list-inline mx-auto justify-content-center">
              <Link to="/">
                <li>FAQ</li>
              </Link>
            </ul>
            <ul className="list-inline mx-auto justify-content-center">
              <Link to="/">
                <li>About Us</li>
              </Link>
            </ul>
            <ul className="list-inline mx-auto justify-content-center">
              <Link to="/">
                <li>Privacy Policy</li>
              </Link>
            </ul>
          </div>
          {/* Col 3 */}
          <div className="col-sm-3 col-xs-12">
            <h3>Company</h3>
            <ul className="list-inline mx-auto justify-content-center">
              <Link to="/">
                <li>Forum</li>
              </Link>
            </ul>
            <ul className="list-inline mx-auto justify-content-center">
              <Link to="/">
                <li>Reviews</li>
              </Link>
            </ul>
            <ul className="list-inline mx-auto justify-content-center">
              <Link to="/">
                <li>Gift Card</li>
              </Link>
            </ul>
            <ul className="list-inline mx-auto justify-content-center">
              <Link to="/">
                <li>Referral Program</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
