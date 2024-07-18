"use client";

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import React from 'react';

export default function order(){

    const [orders, setOrders] = React.useState([]);


    const getData = async () => {
       const data =  await fetch('/api/display-order').then(res => res.json()).catch(err => console.log(err));
       console.log(data.processedOrders);
       return data.processedOrders;
    }

    React.useEffect(() => {
        getData().then((response) => setOrders(response));
    }, []);

    return (
        <table className={"overflow-scroll"}>
            <thead>
            <tr>


                {/* Add more titles depending on your order properties */}
            </tr>
            </thead>
            <tbody className={"overflow-scroll"}>
            {orders?.map((order) => (
                order.orderItems.map((item, idx) => (
                    <tr key={idx} className={"text-black"}>
                        <td >{item.item}</td>
                        <td>{item.price}</td>
                        {/* Add more cells depending on your order properties */}
                    </tr>
                ))))}
            </tbody>
        </table>
    );
}
