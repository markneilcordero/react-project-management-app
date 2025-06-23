// src/components/dashboard/ProjectProgressChart.jsx
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ProjectProgressChart({ tasks, projects }) {
  const projectTaskMap = {};

  // Group tasks by projectId
  tasks.forEach((task) => {
    const pid = task.projectId || "unknown";
    if (!projectTaskMap[pid]) projectTaskMap[pid] = { total: 0, done: 0 };
    projectTaskMap[pid].total += 1;
    if (task.status === "done") projectTaskMap[pid].done += 1;
  });

  const labels = projects.map((project) => project.title);
  const progress = projects.map((project) => {
    const data = projectTaskMap[project.id] || { total: 0, done: 0 };
    if (data.total === 0) return 0;
    return Math.round((data.done / data.total) * 100);
  });

  const data = {
    labels,
    datasets: [
      {
        label: "% Completed",
        data: progress,
        backgroundColor: "#198754", // Bootstrap success
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: "Completion %",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <h5 className="card-title fw-bold mb-3 text-center">📊 Project Progress</h5>
        <div style={{ height: "300px" }}>
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
}
