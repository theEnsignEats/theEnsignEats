import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    await sql`DROP TABLE IF EXISTS Orders;`;

    await sql`
      CREATE TABLE IF NOT EXISTS Orders (
        orderID SERIAL PRIMARY KEY,
        customerName VARCHAR(255),
        orderItems JSONB,
        orderTotal DECIMAL(10, 2)
      );
    `;
    return NextResponse.json({ message: 'Orders table created or already exists' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
