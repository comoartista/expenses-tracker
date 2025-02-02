export default function ExpensesForm() {
  return (
    <form className="w-full mt-8 rounded overflow-hidden">
      <input
        type="text"
        name="description"
        placeholder="Description"
        className="w-full px-3 py-2 outline-none"
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        className="w-full px-3 py-2 outline-none"
      />

      <button className="w-full bg-[#f65e2d] px-2 py-2 text-black">
        Add expense
      </button>
    </form>
  );
}
