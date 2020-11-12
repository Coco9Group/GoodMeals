import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

    const submitHandler = (e) => {
        e.preventDefault();
        //dispatch(signin(email, password));
    };

    return (
        <div>
            <form className="loginform" onSubmit={submitHandler}>
                <div>
                    <h1>Log In</h1>
                </div>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email"
                        id="email"
                        placeholder="Email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        id="password"
                        placeholder="Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div><label />
                    <button type="submit">
                        Log In
                    </button>
                </div>
                <div>
                    <label />
                    <div>
                        New user? {' '}
                        {/* <Link to={`/signup?redirect=${redirect}`}>
                            Join GoodMeals!
                        </Link> */}
                        <Link to="signup"> Join GoodMeals!</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}