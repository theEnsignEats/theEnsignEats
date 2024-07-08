import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
  console.log("POSTGRES_URL:", process.env.POSTGRES_URL); // Log the environment variable to verify

  try {
    // Ensure the environment variable is being used
    if (!process.env.POSTGRES_URL) {
      throw new Error("Missing POSTGRES_URL environment variable.");
    }

    // Test the database connection
    const result = await sql`SELECT 1 AS result;`;

    // Return a success message
    return NextResponse.json({ message: 'Database connection successful', result: result }, { status: 200 });
  } catch (error) {
    // Return the error message if something goes wrong
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
