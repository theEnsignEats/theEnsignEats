import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function PUT(request) {
  const body = await request.json();
  const { customerName, orderItems, orderTotal } = body;

  try {
    // Validate parameters
    if (!customerName || !orderItems || !orderTotal) {
      throw new Error('Customer name, order items, and order total are required');
    }

    // Parse orderItems JSON
    const parsedOrderItems = orderItems;
    if (!Array.isArray(parsedOrderItems)) {
      throw new Error('Order items should be an array');
    }

    console.log(`Received parameters for PUT request: customerName=${customerName}, orderItems=${JSON.stringify(parsedOrderItems)}, orderTotal=${orderTotal}`);

    // Update existing order with PUT request
    await sql`
      UPDATE Orders
      SET orderItems = ${JSON.stringify(parsedOrderItems)}::jsonb,
          orderTotal = ${orderTotal}::numeric
      WHERE customerName = ${customerName};
    `;

    console.log(`Order for customer: ${customerName} has been updated with PUT request.`);

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
    console.error("Error updating order:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
