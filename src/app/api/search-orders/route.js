import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const customerName = searchParams.get('customerName');

    // Build the query based on provided search parameters
    let query = sql`SELECT * FROM Orders`;
    if (customerName) {
      query = sql`SELECT * FROM Orders WHERE customerName ILIKE ${'%' + customerName + '%'}`;
    }

    // Execute the query
    const result = await query;

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
    console.error("Error searching for orders:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
