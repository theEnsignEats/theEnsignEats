import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const orderID = searchParams.get('orderID');

    // Validate parameters
    if (!orderID) {
      return NextResponse.json({ error: 'Order ID is required' }, { status: 400 });
    }

    // Delete the order
    const result = await sql`
      DELETE FROM Orders
      WHERE orderID = ${orderID}
      RETURNING *;
    `;

    if (result.count === 0) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Order canceled successfully', order: result[0] }, { status: 200 });

  } catch (error) {
    console.error("Error canceling order:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
