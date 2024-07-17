import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
    try {
        // Fetch all orders from the database
        const orders = await sql`SELECT * FROM Orders;`;

        // Process and format the orders for response
        const processedOrders = orders.rows.map(order => ({
            orderID: order.orderid,
            customerName: order.customername,
            orderItems: order.orderitems.map(item => ({
                item: item.item,
                quantity: item.quantity,
                itemPrice: item.itemprice // Adjust field name as per your database schema
            })),
            orderTotal: order.ordertotal
        }));

        // Return the formatted orders as JSON response
        return NextResponse.json({ orders: processedOrders }, { status: 200 });

    } catch (error) {
        console.error("Error fetching orders:", error);
        return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 });
    }
}
