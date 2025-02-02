import Image from "next/image";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col xl:flex-row items-center justify-center gap-10">
      <Image
        src="https://bytegrad.com/course-assets/youtube/expensestracker/preview.png"
        alt="Expenses Tracker App preview"
        width={700}
        height={472}
        className="rounded-md"
      />
      <div>
        <h1 className="text-5xl font-semibold mt-6 max-w-[500px]">
          Effortless <span className="font-extrabold">Expense</span>Tracking!
        </h1>
        <p className="text-2xl font-medium max-w-[600px]">
          Use ExpensesTracker to manage your expenses with ease. Get lifetime
          access for just $99. 💰🚀
        </p>
      </div>
    </div>
  );
}
