import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request) {




  try {
    const body = await request.json();
    const  customerName  = body.customerName;
    const orderItems = body.orderItems;
    const orderTotal = body.orderTotal;
    console.log(customerName, orderItems, orderTotal);


    // Validate parameters
    if (!customerName || !orderItems) {
      return NextResponse.json({ error: 'Customer name and order items are required' }, { status: 400 });
    }

    // Parse orderItems JSON

    const parsedOrderItems = orderItems;
    if (!Array.isArray(parsedOrderItems)) {
      throw new Error('Order items should be an array');

    }

    // Calculate the order total
    const totalPrice = orderItems.reduce((total, item) => {
      if (typeof item.price !== 'number' || typeof item.quantity !== 'number') {
        throw new Error('Each order item must have a numeric price and quantity');
      }
      return total + item.price * item.quantity;
    }, 0);

    console.log(`Received parameters: customerName=${customerName}, orderItems=${JSON.stringify(orderItems)}, totalPrice=${totalPrice}`);

    // Insert the new order
    await sql`
      INSERT INTO Orders (customerName, orderItems, orderTotal) 
      VALUES (${customerName}, ${JSON.stringify(orderItems)}::jsonb, ${totalPrice}::numeric);
    `;

    console.log(`Order for customer: ${customerName} has been added to the database.`);

    // Fetch and return all orders
    const {rows, fields} = await sql`SELECT * FROM Orders;`;
  console.log(rows, fields);
    // Ensure result.rows exists for map function

    // Process and return orders
    const processedOrders = rows.map(order => ({
      orderID: order.orderid,
      customerName: order.customername,
      orderItems: order.orderitems,
      orderTotal: order.orderTotal,
    }));

    return NextResponse.json({ orders: processedOrders }, { status: 200 });

  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
