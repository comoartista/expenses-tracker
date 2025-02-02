import AppHeader from "@/app/components/app-header";
import BackgroundPattern from "@/app/components/background-pattern";
import Dashboard from "./dashboard/page";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BackgroundPattern />
      <div className="flex flex-col gap-y-10 max-w-[1050px] mx-auto px-4 min-h-screen">
        <AppHeader />
        {children}
      </div>
    </>
  );
}
