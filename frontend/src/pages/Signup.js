import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import "./Signup.css";

export default function Signup(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

    const userSignup = useSelector((state) => state.userSignup);
    const { userInfo, loading, error } = userSignup;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Please check password and confirm password.')
        } else {
            dispatch(signup(name, email, password));
        }
    };

    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);

    return (
        <div>
            <form className="signupform" onSubmit={submitHandler}>
                <div>
                    <h1>Create Account</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text"
                        id="name"
                        placeholder="Name"
                        required
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        id="email"
                        placeholder="Enter Email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        id="password"
                        placeholder="Enter Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password"
                        id="confirmPassword"
                        placeholder="Confirm your Password"
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></input>
                </div>
                <div><label />
                    <button type="submit">
                        Sign Up
                    </button>
                </div>
                <div>
                    <label />
                    <div>
                        Returning Customer? {' '}
                        <Link to={`/login?redirect=${redirect}`}> Login </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}