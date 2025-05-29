import React from "react";
import {
  CheckCircleIcon,
  UserGroupIcon,
  ChartBarIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

const Help: React.FC = () => {
  return (
    <main className="min-h-screen p-6 flex justify-center">
      <section className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">
          Ajuda & Funcionalidades
        </h1>

        <p className="text-gray-700 mb-8 text-center max-w-xl mx-auto">
          Bem-vindo ao Flori Tech! Aqui você encontra uma plataforma intuitiva para
          gerenciar seus dados, visualizar dashboards interativos e controlar seu perfil.
          Esta página explica as funcionalidades principais para você tirar o máximo proveito.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="flex items-start space-x-4">
            <CheckCircleIcon className="w-8 h-8 text-green-600 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Dashboard Interativo</h2>
              <p className="text-gray-700">
                Visualize gráficos dinâmicos com dados mockados que apresentam
                insights como iterações mensais, faixas etárias e métricas importantes,
                tudo em uma interface moderna e responsiva.
              </p>
            </div>
          </article>

          <article className="flex items-start space-x-4">
            <ChartBarIcon className="w-8 h-8 text-blue-600 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Gráficos e Análises</h2>
              <p className="text-gray-700">
                Explore diferentes tipos de gráficos (pizza, colunas, dispersão) para
                monitorar seus indicadores de forma clara e eficiente, facilitando a
                tomada de decisão.
              </p>
            </div>
          </article>

          <article className="flex items-start space-x-4">
            <UserGroupIcon className="w-8 h-8 text-purple-600 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Perfil do Usuário</h2>
              <p className="text-gray-700">
                Acesse e atualize seus dados pessoais facilmente na seção "Meu Perfil".
                Mantenha suas informações sempre atualizadas para uma experiência personalizada.
              </p>
            </div>
          </article>

          <article className="flex items-start space-x-4">
            <QuestionMarkCircleIcon className="w-8 h-8 text-yellow-600 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Suporte & Ajuda</h2>
              <p className="text-gray-700">
                Está com dúvidas? Navegue por esta página para conhecer as funcionalidades
                ou entre em contato conosco para suporte personalizado.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Help;
