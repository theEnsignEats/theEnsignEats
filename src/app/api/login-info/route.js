import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Validate parameters
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    // Fetch user from the database
    const result = await sql`
      SELECT * FROM users WHERE email = ${email};
    `;
    const user = result.rows[0];

    // If user not found or password doesn't match
    if (!user || !await bcrypt.compare(password, user.password)) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    // Return user information
    return NextResponse.json({ id: user.id, name: user.name, email: user.email }, { status: 200 });

  } catch (error) {
    console.error("Error logging in:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
