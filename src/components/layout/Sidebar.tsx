import React from "react";
import { NavLink } from "react-router-dom";
import {
  CheckCircleIcon,
  ArrowUpRightIcon,
  QuestionMarkCircleIcon,
  UserIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const userId = "123";

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {

  return (
    <aside
      className={`fixed top-0 left-0 h-full w-full md:w-64  bg-[#133543] text-gray-200 flex flex-col p-4
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      style={{ zIndex: 1000 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center w-full">FLORI TECH</h2>

      <nav className="flex flex-col space-y-3">
        <NavLink
          to="/"
          onClick={onClose}
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold px-4 py-2 rounded-md flex items-center"
              : "text-gray-400 hover:text-white px-4 py-2 rounded-md flex items-center"
          }
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#0f2c38" : "transparent",
          })}
        >
          <CheckCircleIcon className="w-5 h-5 mr-2 flex-shrink-0" />
          Dashborad
        </NavLink>

        <NavLink
          to="/my-profile"
          onClick={onClose}
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold px-4 py-2 rounded-md flex items-center"
              : "text-gray-400 hover:text-white px-4 py-2 rounded-md flex items-center"
          }
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#0f2c38" : "transparent",
          })}
        >
          <ArrowUpRightIcon className="w-5 h-5 mr-2 flex-shrink-0" />
          Visualizar Meus Dados
        </NavLink>

        <NavLink
          to="/help"
          onClick={onClose}
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold px-4 py-2 rounded-md flex items-center"
              : "text-gray-400 hover:text-white px-4 py-2 rounded-md flex items-center"
          }
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#0f2c38" : "transparent",
          })}
        >
          <QuestionMarkCircleIcon className="w-5 h-5 mr-2 flex-shrink-0" />
          Ajuda
        </NavLink>

        <NavLink
          to={`/users/${userId}/edit`}
          onClick={onClose}
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold px-4 py-2 rounded-md flex items-center"
              : "text-gray-400 hover:text-white px-4 py-2 rounded-md flex items-center"
          }
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#0f2c38" : "transparent",
          })}
        >
          <UserIcon className="w-5 h-5 mr-2 flex-shrink-0" />
          Editar Meu Perfil
        </NavLink>

        <NavLink
          to="/"
          onClick={onClose}
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold px-4 py-2 rounded-md flex items-center"
              : "text-gray-400 hover:text-white px-4 py-2 rounded-md flex items-center"
          }
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#0f2c38" : "transparent",
          })}
        >
          <ArrowRightIcon className="w-5 h-5 mr-2 flex-shrink-0" />
          Sair
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
