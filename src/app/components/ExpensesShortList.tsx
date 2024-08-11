"use client";
import React, { useState, useEffect } from "react";

interface Expense {
  id: number;
  title: string;
  description: string;
  date: string;
  amount: number;
}

const ExpensesShortList: React.FC = () => {
  const [myExpenses, setMyExpenses] = useState<Expense[]>([]);
  const [newExpense, setNewExpense] = useState({
    title: "",
    description: "",
    date: "",
    amount: "",
  });

  useEffect(() => {
    const getMyExpenses = async () => {
      const response = await fetch("/api/expense/list");
      const data = await response.json();
      setMyExpenses(data);
    };
    getMyExpenses();
  }, []);

  return (
    <div className="w-[80%] mx-auto mt-12">
      <h2 className="mb-4">Here are your recent expenses.</h2>

      {myExpenses.length > 0 && (
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">ID</th>
              <th className="text-left">Title</th>
              <th className="text-left">Description</th>
              <th className="text-left">Date</th>
              <th className="text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            {myExpenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.id}</td>
                <td>{expense.title}</td>
                <td>{expense.description}</td>
                <td>{expense.date}</td>
                <td>{expense.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {myExpenses.length === 0 && <p>No expenses found.</p>}
    </div>
  );
};

export default ExpensesShortList;
