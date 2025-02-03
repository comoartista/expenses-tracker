type ExpensesListProps = {
  expenses: {
    expenses: {
      id: number;
      title: string;
      amount: number;
      createdAt: Date;
    };
  }[];
};

export default function ExpensesList({ expenses }: ExpensesListProps) {
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
