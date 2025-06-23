// src/components/dashboard/StatCardGroup.jsx
import React from "react";

export default function StatCardGroup({ stats }) {
  const { totalProjects, totalTasks, completedTasks, inProgressTasks } = stats;

  const cardData = [
    {
      label: "Projects",
      value: totalProjects,
      bg: "primary",
      emoji: "📁",
    },
    {
      label: "Total Tasks",
      value: totalTasks,
      bg: "dark",
      emoji: "📝",
    },
    {
      label: "Completed",
      value: completedTasks,
      bg: "success",
      emoji: "✅",
    },
    {
      label: "In Progress",
      value: inProgressTasks,
      bg: "warning",
      emoji: "🚧",
    },
  ];

  return (
    <div className="row g-4 mb-4">
      {cardData.map((card, index) => (
        <div key={index} className="col-md-6 col-lg-3">
          <div className={`card text-white bg-${card.bg} shadow-sm`}>
            <div className="card-body text-center">
              <div className="display-6 mb-2">{card.emoji}</div>
              <h5 className="card-title fw-bold">{card.label}</h5>
              <p className="card-text fs-4">{card.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
