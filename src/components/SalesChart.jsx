import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler
} from "chart.js";
import { lineChartData } from "../data/chartData";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export default function SalesChart() {
  return (
    <div className="bg-white dark:text-white dark:bg-gray-800 p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">Sales Over Time</h2>
      <Line data={lineChartData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
    </div>
  );
}
