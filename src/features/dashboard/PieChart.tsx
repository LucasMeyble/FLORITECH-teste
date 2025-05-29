import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

import { pieData } from "@/services/mock/dashboardData";

Chart.register(ArcElement, Tooltip, Legend);

const PieChart: React.FC = () => {
  const data = {
    labels: ["18-25", "26-35", "36-45", "46-60", "60+"],
    datasets: [
      {
        data: pieData,
        backgroundColor: [
          "#0062ff",
          "#f59300",
          "#ff4800",
          "#00b176",
          "#fffb00",
        ],
        hoverOffset: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };

  return (
    <div className="relative w-full h-full">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
