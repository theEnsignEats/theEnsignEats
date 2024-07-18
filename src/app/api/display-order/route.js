import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic'

export async function GET(req, res){
    const {rows, fields} = await sql`SELECT orderitems, orderTotal FROM Orders;`;
    // always check if value is not null or undefined before using map function
    const processedOrders = rows && rows.map(order => ({
        orderID: order.orderid,
        customerName: order.customername,
        orderItems: order.orderitems,
        orderTotal: order.orderTotal,
    }));
    return NextResponse.json({"processedOrders": processedOrders,})
}