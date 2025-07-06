import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <h1 className="bg-red-400 text-2xl font-bold text-center uppercase">admin</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
