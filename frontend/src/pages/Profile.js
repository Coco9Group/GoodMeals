import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUserProfile } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';
import "./Signup.css";

export default function Profile() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;
    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const {
        success: successUpdate,
        error: errorUpdate,
        loading: loadingUpdate,
    } = userUpdateProfile;
    const dispatch = useDispatch();
    useEffect(() => {
        if (!user) {
            dispatch({ type: USER_UPDATE_PROFILE_RESET });
            dispatch(detailsUser(userInfo._id));
        } else {
            setName(user.name);
            setEmail(user.email);
        }
    }, [dispatch, userInfo._id, user]);

    const submitHandler = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Please check password and confirm password.');
        } else {
            //dispatch(updateUserProfile({ userId: user._id, name, email, password }));
            dispatch(updateUserProfile({ userId: userInfo._id, name, email, password }));
        }
    };

    return (
        <div>
            <form className="signupform" onSubmit={submitHandler}>
                <div>
                    <h1>Profile</h1>
                </div>
                {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                            <>
                                {loadingUpdate && <LoadingBox></LoadingBox>}
                                {errorUpdate && (
                                    <MessageBox variant="danger">{errorUpdate}</MessageBox>
                                )}
                                {successUpdate && (
                                    <MessageBox variant="success">
                                        Profile Updated Successfully
                                    </MessageBox>
                                )}
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder=""
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    ></input>
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder=""
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    ></input>
                                </div>
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input
                                        id="password"
                                        type="password"
                                        placeholder=""
                                        onChange={(e) => setPassword(e.target.value)}
                                    ></input>
                                </div>
                                <div>
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input
                                        id="confirmPassword"
                                        type="password"
                                        placeholder=""
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    ></input>
                                </div>
                                <div>
                                    <label />
                                    <button type="submit"> Update </button>
                                </div>
                            </>
                        )}
            </form>
        </div>
    );
}