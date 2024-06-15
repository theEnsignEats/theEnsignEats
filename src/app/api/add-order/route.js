import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const customerName = searchParams.get('customerName');
  const orderItems = searchParams.get('orderItems');
  const orderTotal = searchParams.get('orderTotal');

  try {
    // Validate parameters
    if (!customerName || !orderItems || !orderTotal) {
      throw new Error('Customer name, order items, and order total are required');
    }

    // Parse orderItems JSON
    const parsedOrderItems = JSON.parse(orderItems);
    if (!Array.isArray(parsedOrderItems)) {
      throw new Error('Order items should be an array');
    }

    console.log(`Received parameters: customerName=${customerName}, orderItems=${JSON.stringify(parsedOrderItems)}, orderTotal=${orderTotal}`);

    // Insert the new order
    await sql`
      INSERT INTO Orders (customerName, orderItems, orderTotal) 
      VALUES (${customerName}, ${JSON.stringify(parsedOrderItems)}::jsonb, ${orderTotal}::numeric);
    `;
    console.log(`Order for customer: ${customerName} has been added to the database.`);

    // Fetch and return all orders
    const orders = await sql`SELECT * FROM Orders;`;
    
    // Process and return orders
    const processedOrders = orders.rows.map(order => ({
      orderID: order.orderid,
      customerName: order.customername,
      orderItems: order.orderitems.map(item => ({
        item: item.item,
        quantity: item.quantity,
        itemPrice: item.itemPrice // Ensure this field is correctly referenced
      })),
      orderTotal: order.ordertotal
    }));

    return NextResponse.json({ orders: processedOrders }, { status: 200 });

  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
