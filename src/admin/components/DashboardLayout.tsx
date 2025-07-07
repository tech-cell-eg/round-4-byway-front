import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className=" md:flex min-h-screen">
      <Sidebar />
      <main className="p-4 w-full overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
