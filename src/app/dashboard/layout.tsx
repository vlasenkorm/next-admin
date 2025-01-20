import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex">
      <div className="flex-1">
        <Sidebar />
      </div>
      <div className="flex-[4_4_0%]">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
