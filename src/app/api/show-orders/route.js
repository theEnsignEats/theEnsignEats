import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    // Fetch all orders from the Orders table, sorted by orderID in ascending  order
    const result = await sql`SELECT * FROM Orders ORDER BY orderID ASC;`;

    // Ensure result.rows exists for map function
    const orders = result.rows || [];

    // Process and return orders
    const processedOrders = orders.map(order => ({
      orderID: order.orderid,
      customerName: order.customername,
      orderItems: order.orderitems,
      orderTotal: order.ordertotal
    }));

    return NextResponse.json({ orders: processedOrders }, { status: 200 });

  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
