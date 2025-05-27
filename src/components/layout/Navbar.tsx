import React from "react";
import { useSidebar } from "@/context/SidebarContext";
import Button from "@/components/ui/Button";  // ajuste o caminho conforme seu projeto

const Navbar: React.FC = () => {
  const { toggleSidebar } = useSidebar();

  const handleLogout = () => {
    alert("Logout clicado!");
  };

  return (
    <nav
      className="w-full h-14 text-white flex items-center px-4 shadow-md justify-between"
      style={{ backgroundColor: "#133543" }}
    >
      <Button
        ariaLabel="Toggle sidebar"
        onClick={toggleSidebar}
        variant="ghost"
        className="p-2 text-white"
        icon={
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
        }
      />

      <Button onClick={handleLogout} variant="danger">
        Sair
      </Button>
    </nav>
  );
};

export default Navbar;
