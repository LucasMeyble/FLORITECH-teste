import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import { SidebarProvider, useSidebar } from "@/context/SidebarContext";
import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import NotFound from "@/pages/NotFound";

const LayoutContent = () => {
  const { isOpen } = useSidebar();

  return (
    <>
      <Sidebar isOpen={isOpen} />
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
      { path: "/my-data", element: <Home /> },
      { path: "/help", element: <Home /> },
      { path: "/users/:id/edit", element: <Home /> },
      { path: "/logout", element: <Home /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
