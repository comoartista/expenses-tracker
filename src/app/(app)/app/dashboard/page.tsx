import ExpensesForm from "@/app/components/expenses-form";
import ExpensesList from "@/app/components/expenses-list";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-white">Dashboard</h1>
      <div className="w-full max-w-[600px] mx-auto">
        <ExpensesList />
        <ExpensesForm />
      </div>
    </div>
  );
}
