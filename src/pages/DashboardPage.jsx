// src/pages/DashboardPage.jsx
import React, { useEffect, useState } from "react";

import StatCardGroup from "../components/dashboard/StatCardGroup";
import ChartSummary from "../components/dashboard/ChartSummary";
import TimeRangeFilter from "../components/dashboard/TimeRangeFilter"; // optional
import ExportDataStats from "../components/dashboard/ExportDataStats"; // optional

import { getLocalData } from "../utils/localStorageHelpers";
import { aggregateDashboardData } from "../utils/aggregateDashboardData";
import { getAllTaskData } from "../utils/getAllTaskData"; // helper to loop all task storage keys

const PROJECTS_KEY = "pm-app-projects-v1";

export default function DashboardPage() {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    const projectData = getLocalData(PROJECTS_KEY, []);
    const taskData = getAllTaskData(projectData); // gather all tasks across projects
    setProjects(projectData);
    setTasks(taskData);
    setFilteredTasks(taskData); // default: no filter applied
  }, []);

  const handleTimeFilter = (range) => {
    const now = new Date();
    const filtered = tasks.filter((t) => {
        if (!t.createdAt) return range === Infinity;
      const created = new Date(t.createdAt);
      const diffDays = (now - created) / (1000 * 60 * 60 * 24);
      return diffDays <= range;
    });
    setFilteredTasks(filtered);
  };

  const dashboardStats = aggregateDashboardData(projects, filteredTasks);

  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="container py-4 flex-grow-1">
        <h2 className="fw-bold mb-4 text-center">📈 Dashboard Overview</h2>

        <TimeRangeFilter onFilter={handleTimeFilter} /> {/* Optional */}
        <StatCardGroup stats={dashboardStats} />
        <ChartSummary tasks={filteredTasks} projects={projects} />

        <ExportDataStats tasks={filteredTasks} projects={projects} /> {/* Optional */}
      </main>
    </div>
  );
}
