import { NextResponse } from "next/server";
import pool from "@/app/utils/mysql";

export async function POST(request: Request) {
  try {
    // Parse the incoming JSON request to get form data
    const formData = await request.json();
    const expensetitle = formData.title;
    const expensedescription = formData.description;
    const expensedate = formData.date;
    const expenseamount = formData.amount;

    // Get a database connection from the pool
    const db = await pool.getConnection();

    // Prepare the SQL query with placeholders for the values
    const query = `INSERT INTO expenses (title, description, date, amount) VALUES (?, ?, ?, ?)`;

    // Execute the query with the actual values
    const [results] = await db.execute(query, [
      expensetitle,
      expensedescription,
      expensedate,
      expenseamount,
    ]);

    // Get the newly inserted expense by its ID
    const [rows] = await db.query("SELECT * FROM expenses");

    // Release the database connection back to the pool
    db.release();

    // Return the newly inserted expense as a JSON response
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
