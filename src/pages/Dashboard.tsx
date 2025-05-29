import React from "react";
import LineChart from "@/features/dashboard/LineChart";
import PieChart from "@/features/dashboard/PieChart";
import BarChart from "@/features/dashboard/BarChart";

const Dashboard: React.FC = () => {
  return (
    <main className="h-screen max-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 h-[calc(100%-2.5rem)]">
        <section className="bg-white p-4 rounded shadow h-full max-h-[calc(50vh-2rem)] flex flex-col">
          <h2 className="text-lg font-semibold mb-2">Iterações Mensais</h2>
          <div className="flex-1">
            <LineChart />
          </div>
        </section>

        <section className="bg-white p-4 rounded shadow h-full max-h-[calc(50vh-2rem)] flex flex-col">
          <h2 className="text-lg font-semibold mb-2">Percentual de Faia Etária</h2>
          <div className="flex-1">
            <PieChart />
          </div>
        </section>

        <section className="bg-white p-4 rounded shadow h-full max-h-[calc(50vh-2rem)] flex flex-col">
          <h2 className="text-lg font-semibold mb-2">Peso Descartado Mensal</h2>
          <div className="flex-1">
            <BarChart />
          </div>
        </section>

        <section className="bg-white p-4 rounded shadow h-full max-h-[calc(50vh-2rem)] flex flex-col">
          <h2 className="text-lg font-semibold mb-2">Assista o Último Vídeo Registrado</h2>
          <div className="flex-1">
            <iframe
              className="w-full h-full rounded"
              src="https://www.youtube.com/embed/bSZJzAIGDiA"
              title="Vídeo Flori Tech"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      </div>

    </main>
  );
};

export default Dashboard;
