import React from "react";
import { useUser } from "@/context/UserContext";

const MyProfile: React.FC = () => {
  const { user } = useUser();

  if (!user) {
    return (
      <main className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-red-500 text-lg font-semibold">
          Usuário não encontrado. Por favor, faça login.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen  flex items-center justify-center p-6">
      <section className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Meu Perfil
        </h1>

        <div className="space-y-6">
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span className="text-gray-700 font-medium">ID</span>
            <span className="text-gray-900 font-semibold">{user.id}</span>
          </div>

          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span className="text-gray-700 font-medium">Nome</span>
            <span className="text-gray-900 font-semibold">{user.name}</span>
          </div>

          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span className="text-gray-700 font-medium">Email</span>
            <span className="text-gray-900 font-semibold">{user.email}</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MyProfile;
