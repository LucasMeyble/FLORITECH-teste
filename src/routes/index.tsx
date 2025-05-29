import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import { SidebarProvider, useSidebar } from "@/context/SidebarContext";
import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import MyProfile from "@/pages/MyProfile";
import Help from "@/pages/Help";
import EditUser from "@/pages/EditUser";
import NotFound from "@/pages/NotFound";

const LayoutContent = () => {
  const { isOpen, toggleSidebar } = useSidebar();
  const closeSidebar = () => {
    if (isOpen) {
      toggleSidebar();
    }
  };

  return (
    <>
      <Sidebar isOpen={isOpen} onClose={closeSidebar} />
      <div
        className={`flex flex-col flex-1 transition-margin duration-300 ease-in-out
          ${isOpen ? "ml-64" : "ml-0"}
        `}
      >
        <Navbar />
        <main className="p-4 flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </>
  );
};

const Layout = () => (
  <SidebarProvider>
    <LayoutContent />
  </SidebarProvider>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/users", element: <Home /> },
      { path: "/my-profile", element: <MyProfile /> },
      { path: "/help", element: <Help /> },
      { path: "/users/:id/edit", element: <EditUser /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
