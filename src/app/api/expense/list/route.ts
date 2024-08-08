import { NextResponse } from "next/server";
import pool from "@/app/utils/mysql";

export async function GET(request: Request) {
  try {
    // Get a database connection from the pool
    const db = await pool.getConnection();

    // Prepare the SQL query with placeholders for the values
    const query = `SELECT * FROM expenses`;

    // Execute the query with the actual values
    const [rows] = await db.execute(query);

    // Release the database connection back to the pool
    db.release();

    // Return the inserted rows as a JSON response
    return NextResponse.json(rows);
  } catch (error: any) {
    // Return an error response in case of failure
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
