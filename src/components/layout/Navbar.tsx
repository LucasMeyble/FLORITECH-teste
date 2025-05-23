import React from "react";
import { useSidebar } from "@/context/SidebarContext";

const Navbar: React.FC = () => {
  const { toggleSidebar } = useSidebar();

  const handleLogout = () => {
    alert("Logout clicado!");
  };

  return (
    <nav className="w-full h-14 text-white flex items-center px-4 shadow-md justify-between" style={{ backgroundColor: "#133543" }}>
      <button
        aria-label="Toggle sidebar"
        onClick={toggleSidebar}
        className="p-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>


      <button
        onClick={handleLogout}
        className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        Sair
      </button>
    </nav>
  );
};

export default Navbar;
