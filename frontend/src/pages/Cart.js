import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { Link } from 'react-router-dom';
import MessageBox from '../components/MessageBox';
import "./Cart.css";

export default function Cart(props) {
    const mealId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split('=')[1])
        : 1;

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();
    useEffect(() => {
        if (mealId) {
            dispatch(addToCart(mealId, qty));
        }
    }, [dispatch, mealId, qty]);

    const removeFromCartHandler = (id) => {
        //dispatch(removeFromCart(id));
    };

    return (
        <div className="rowcart">
            <div className="colcart">
                <h1>Meal Cart</h1>
                {cartItems.length === 0 ? (
                    <MessageBox>
                        Cart is empty. <Link to="/">Go Home</Link>
                    </MessageBox>
                ) : (
                        <ul>
                            {cartItems.map((item) => (
                                <li key={item.meal}>
                                    <div className="rowdisplay">
                                        <div>
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="imgcart"
                                            ></img>
                                        </div>
                                        <div className="min-30">
                                            <Link to={`/meals/${item.meal}`}>{item.name}</Link>
                                        </div>
                                        <div>
                                            <select
                                                value={item.qty}
                                                onChange={(e) =>
                                                    dispatch(
                                                        addToCart(item.meal, Number(e.target.value))
                                                    )
                                                }
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
                                        <div>${item.price}</div>
                                        <div>
                                            <button
                                                type="button"
                                                onClick={() => removeFromCartHandler(item.product)}
                                            >
                                                Delete
                        </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
            </div>
        </div>
    );
}