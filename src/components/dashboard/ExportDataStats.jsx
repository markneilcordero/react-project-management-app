// src/components/dashboard/ExportDataStats.jsx
import React from "react";

export default function ExportDataStats({ tasks, projects }) {
  const handleExport = () => {
    const data = {
      exportedAt: new Date().toISOString(),
      totalProjects: projects.length,
      totalTasks: tasks.length,
      projects,
      tasks,
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });

    const timestamp = new Date()
      .toISOString()
      .replace(/[:.]/g, "-")
      .slice(0, 19);

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `pm-dashboard-export-${timestamp}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="text-end">
      <button onClick={handleExport} className="btn btn-outline-secondary">
        📥 Export Dashboard Data
      </button>
    </div>
  );
}
