import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Myorder() {
    const [orderData, setOrderData] = useState([]);

    const fetchMyOrder = async () => {
        try {
            const res = await fetch("http://localhost:3001/api/myOrderData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: localStorage.getItem('userEmail')
                })
            });
            const response = await res.json();
            // response.orderData can be null if no orders
            // If you want to show all orders, make sure to handle array or null
            setOrderData(response.orderData ? (Array.isArray(response.orderData) ? response.orderData : [response.orderData]) : []);
        } catch (error) {
            console.error("Failed to fetch order data:", error);
        }
    };

    useEffect(() => {
        fetchMyOrder();
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <div>
                <Navbar />
                <div className="container">
                    {orderData && orderData.length > 0 ? (
                        orderData.slice(0).reverse().map((order, idx) => (
                            <div key={idx}>
                                <div className='m-auto mt-5'>
                                    <strong>Order Date:</strong> {order.order_date}
                                    <hr />
                                </div>
                                <div className="row">
                                    {order.order_data && order.order_data.map((item, i) => (
                                        <div className='col-12 col-md-6 col-lg-3' key={i}>
                                            <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                                <img src={item.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.name}</h5>
                                                    <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                        <span className='m-1'>Qty: {item.qty}</span>
                                                        <span className='m-1'>Size: {item.size}</span>
                                                        <span className='m-1'>Date: {item.date}</span>
                                                        <div className='d-inline ms-2 h-100 w-20 fs-5'>
                                                            ₹{item.price}/-
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center fs-4 mt-5">No Orders Found</div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    )
}