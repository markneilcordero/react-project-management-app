// src/components/dashboard/TaskStatusChart.jsx
import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function TaskStatusChart({ tasks }) {
  const statusCounts = {
    todo: 0,
    doing: 0,
    done: 0,
  };

  tasks.forEach((task) => {
    if (statusCounts[task.status] !== undefined) {
      statusCounts[task.status]++;
    }
  });

  const data = {
    labels: ["To Do", "In Progress", "Completed"],
    datasets: [
      {
        label: "# of Tasks",
        data: [
          statusCounts.todo,
          statusCounts.doing,
          statusCounts.done,
        ],
        backgroundColor: ["#6c757d", "#ffc107", "#28a745"],
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
        <h5 className="card-title fw-bold mb-3 text-center">📊 Task Status</h5>
        <div style={{ height: "250px" }}>
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
}
