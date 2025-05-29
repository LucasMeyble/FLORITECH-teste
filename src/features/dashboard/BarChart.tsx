import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { barData } from "@/services/mock/dashboardData";
import { getColorByValue } from "@/utils/colorUtils";

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart: React.FC = () => {

  const min = Math.min(...barData);
  const max = Math.max(...barData);
  const colors = barData.map(value => getColorByValue(value, min, max));

  const data = {
    labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dez", "Jan", "Feb", "Mar"],
    datasets: [
      {
        label: "Peso Descartado (kg)",
        data: barData,
        backgroundColor: colors,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: "kg" },
      },
      x: {
        title: { display: true, text: "Mês" },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  return (
    <div className="relative w-full h-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
