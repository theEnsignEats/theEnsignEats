import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function POST(request) {
    try {
        const { name, email, password, passwordconfirm } = await request.json();

        // Validate parameters
        if (!name || !email || !password || !passwordconfirm) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        if (password !== passwordconfirm) {
            return NextResponse.json({ error: 'Passwords do not match' }, { status: 400 });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the new user
        await sql`
      INSERT INTO users (name, email, password) 
      VALUES (${name}, ${email}, ${hashedPassword});
    `;
        console.log(`User ${name} has been added to the database.`);

        // Fetch and return all users
        const result = await sql`SELECT * FROM users;`;

        // Ensure result.rows exists for map function
        const users = result.rows || [];

        // Process and return users
        const processedUsers = users.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
        }));

        return NextResponse.json({ users: processedUsers }, { status: 200 });

    } catch (error) {
        console.error("Error registering user:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
