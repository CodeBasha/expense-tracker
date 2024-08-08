"use client";
import { useEffect, useState } from "react";
import handleSavingExpense from "../utils/handleSavingExpense";

const NewExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  const handleTitle = (e: any) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e: any) => {
    setDescription(e.target.value);
  };

  const handleAmount = (e: any) => {
    setAmount(e.target.value);
  };

  const handleDate = (e: any) => {
    setDate(e.target.value);
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (title === "" || description === "" || amount === 0 || date === "") {
      alert("Please fill all fields");
      return;
    } else {
      alert("Processing form data ...");
      const formData = { title, description, amount, date };
      handleSavingExpense(e, formData);
    }
  };

  return (
    <div className="mt-8 w-full">
      <form className="w-[80%] mx-auto flex flex-col gap-4">
        <input
          name="title"
          type="text"
          placeholder="Title"
          onChange={handleTitle}
        />
        <textarea
          name="description"
          id="description"
          placeholder="Enter Description"
          onChange={handleDescription}
        />
        <div className="flex flex-row gap-2">
          <input
            type="number"
            placeholder="Enter Dollar Amount"
            onChange={handleAmount}
          />
          <input title="Date" name="date" type="date" onChange={handleDate} />
        </div>
        <div className="w-full flex flex-row gap-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
            onClick={handleFormSubmit}
          >
            Add Expense
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewExpenseForm;
