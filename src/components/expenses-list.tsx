"use client";

import { deleteExpense, editExpense } from "@/actions/actions";
import { useState } from "react";

type Expense = {
  id: number;
  title: string;
  amount: number;
  createdAt: Date;
};

type ExpensesListProps = {
  expenses: Expense[];
};

export default function ExpensesList({ expenses }: ExpensesListProps) {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedTitle, setEditedTitle] = useState<string>("");
  const [editedAmount, setEditedAmount] = useState<number>(0);

  return (
    <ul className="h-[300px] bg-white rounded mt-4 shadow-md">
      {expenses.map((expense) => (
        <li
          key={expense.id}
          className="flex justify-between items-center border-b border-gray-200 px-4 py-2">
          {editingId === expense.id ? (
            <div className="flex justify-between items-center w-full gap-2">
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                className="w-full border border-orange-300 rounded px-2"
              />
              <input
                type="number"
                value={editedAmount}
                onChange={(e) => setEditedAmount(Number(e.target.value))}
                className="w-[50px] border border-orange-300 rounded px-2]"
              />
              <div className="flex items-center gap-2">
                <button
                  onClick={async () => {
                    const formData = new FormData();
                    formData.append("title", editedTitle);
                    formData.append("amount", String(editedAmount));

                    await editExpense(formData, expense.id);
                    setEditingId(null);
                  }}
                  className="text-[10px] h-[20px] w-[20px] flex justify-center align-middle bg-orange-200 hover:bg-orange-400 text-white px-2 py-1 ml-2 rounded transition ml-auto">
                  ✔
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="text-[10px] h-[20px] w-[20px] bg-zinc-800 text-white hover:bg-zinc-950 rounded">
                  X
                </button>
              </div>
            </div>
          ) : (
            <>
              <p>{expense.title}</p>
              <p className="ml-auto font-bold mr-[15px]">{expense.amount}</p>
              <button
                onClick={() => {
                  setEditingId(expense.id);
                  setEditedTitle(expense.title);
                  setEditedAmount(expense.amount);
                }}
                className="mr-[5px] text-black hover:text-zinc-500">
                [edit]
              </button>
              <button
                onClick={async () => {
                  await deleteExpense(expense.id);
                }}
                className="text-[10px] h-[20px] w-[20px] bg-zinc-600 text-white hover:bg-zinc-950 rounded">
                X
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
