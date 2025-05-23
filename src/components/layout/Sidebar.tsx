import React from "react";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-[#133543] text-gray-200 flex flex-col p-4
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      style={{ zIndex: 1000 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center w-full">FLORI TECH</h2>

      <nav className="flex flex-col space-y-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-white font-bold" : "text-gray-400 hover:text-white"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive ? "text-white font-bold" : "text-gray-400 hover:text-white"
          }
        >
          Usuários
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
