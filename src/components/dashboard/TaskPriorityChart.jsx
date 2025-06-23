// src/components/dashboard/TaskPriorityChart.jsx
import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function TaskPriorityChart({ tasks }) {
  const priorityCounts = {
    low: 0,
    medium: 0,
    high: 0,
  };

  tasks.forEach((task) => {
    if (priorityCounts[task.priority] !== undefined) {
      priorityCounts[task.priority]++;
    }
  });

  const data = {
    labels: ["Low", "Medium", "High"],
    datasets: [
      {
        label: "# of Tasks",
        data: [
          priorityCounts.low,
          priorityCounts.medium,
          priorityCounts.high,
        ],
        backgroundColor: ["#0dcaf0", "#0d6efd", "#dc3545"], // Bootstrap: info, primary, danger
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <h5 className="card-title fw-bold mb-3 text-center">🎯 Task Priority</h5>
        <div style={{ height: "250px" }}>
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
}
