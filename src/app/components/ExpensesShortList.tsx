import React from "react";

const ExpensesShortList = () => {
  return (
    <div className="w-[80%] mx-auto mt-12">
      <h2 className="mb-4">Here are your recent expenses.</h2>
      <ul className="w-full grid grid-cols-3 gap-x-2 gap-y-4 items-center">
        <li>
          <h3>Expense Title</h3>
          <p>Expense Description</p>
          <p>Expense Amount</p>
          <p>Expense Date</p>
        </li>
        <li>
          <h3>Expense Title</h3>
          <p>Expense Description</p>
          <p>Expense Amount</p>
          <p>Expense Date</p>
        </li>
        <li>
          <h3>Expense Title</h3>
          <p>Expense Description</p>
          <p>Expense Amount</p>
          <p>Expense Date</p>
        </li>
        <li>
          <h3>Expense Title</h3>
          <p>Expense Description</p>
          <p>Expense Amount</p>
          <p>Expense Date</p>
        </li>
      </ul>
    </div>
  );
};

export default ExpensesShortList;
