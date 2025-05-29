import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { lineData } from "@/services/mock/dashboardData";
import { getColorByValue } from "@/utils/colorUtils";

Chart.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineChart: React.FC = () => {
  const min = Math.min(...lineData);
  const max = Math.max(...lineData);

  const labels = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out"];

  const data = {
    labels,
    datasets: [
      {
        label: "Iterações Mensais",
        data: lineData,
        fill: false,
        pointBackgroundColor: lineData.map(v => getColorByValue(v, min, max)),
        borderColor: lineData.map(v => getColorByValue(v, min, max)),
        segment: {
          borderColor: (ctx: any) => {
            const currentValue = ctx.p0.parsed.y;
            return getColorByValue(currentValue, min, max);
          },
        },
        tension: 0.3,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { title: { display: true, text: "Mês" } },
      y: { title: { display: true, text: "Número de Iterações" }, beginAtZero: true },
    },
    plugins: {
      legend: { position: "top" as const },
    },
  };

  return (
    <div className="relative w-full h-full">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
