import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listOrderMine } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function OrderHistory(props) {
    const orderMineList = useSelector((state) => state.orderMineList);
    const { loading, error, orders } = orderMineList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listOrderMine());
    }, [dispatch]);
    return (
        <div
        style={{
            backgroundImage: "url(/images/orderimg.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            paddingTop: "3%",
            marginTop: "-2%",
            paddingBottom: "3%",
            height: "100%",
            paddingLeft:"2em"
        }}>
            <h1>Order History</h1>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                        <table>
                            <thead>
                                <tr>
                                    <th>Order Number</th>
                                    <th>Order Date</th>
                                    <th>Total Price</th>
                                    <th>Order Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order._id}>
                                        <td>{order._id}</td>
                                        <td>{order.createdAt.substring(0, 10)}</td>
                                        <td>{order.totalPrice.toFixed(2)}</td>
                                        <td>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    props.history.push(`/order/${order._id}`);
                                                }}
                                            >
                                                Details
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
        </div>
    );
}
