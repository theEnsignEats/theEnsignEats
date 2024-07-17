"use client";
import React, { useState, useEffect } from "react";
import Layout from "../pageLayout";

const OrderSummary = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch("/api/get-orders");
                if (!response.ok) {
                    throw new Error("Failed to fetch orders");
                }
                const data = await response.json();
                setOrders(data.orders); // Assuming the API returns an array of orders
            } catch (error) {
                console.error("Error fetching orders:", error);
                // Handle error scenario (e.g., display error message)
            }
        };

        fetchOrders();
    }, []); // Empty dependency array ensures useEffect runs once on component mount

    return (
        <div>
            <h1>Order</h1>
            <ul>
                {orders.map((order, index) => (
                    <li key={index} className="my-12">
                        <h2>Order ID: {order.orderID}</h2>
                        <p>Customer Name: {order.customerName}</p>
                        <ul>
                            {order.orderItems.map((item, idx) => (
                                <li key={idx}>
                                    <p>
                                        {item.item} - Quantity: {item.quantity}
                                    </p>
                                    <p>Price per item: ${item.price}</p>
                                </li>
                            ))}
                        </ul>
                        <p>Total: ${order.orderTotal}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderSummary;
