export default function ExpensesList() {
  const expenses = [
    {
      id: 1,
      title: "Groceries",
      amount: 94.12,
    },
    {
      id: 2,
      title: "New TV",
      amount: 799.49,
    },
    {
      id: 3,
      title: "Car Insurance",
      amount: 294.67,
    },
    {
      id: 4,
      title: "New Desk (Wooden)",
      amount: 450,
    },
  ];
  return (
    <ul className="h-[300px] bg-white rounded mt-4 shadow-md">
      {expenses.map((expense) => (
        <li
          key={expense.id}
          className="flex justify-between items-center border-b border-gray-200 px-4 py-2">
          <p>{expense.title}</p>
          <p className="ml-auto font-bold mr-[15px]">{expense.amount}</p>
          <button className="text-[10px] h-[20px] w-[20px] bg-zinc-800 text-white hover:bg-zinc-950 rounded">
            X
          </button>
        </li>
      ))}
    </ul>
  );
}
