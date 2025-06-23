// src/components/dashboard/ChartSummary.jsx
import React from "react";
import TaskStatusChart from "./TaskStatusChart";
import TaskPriorityChart from "./TaskPriorityChart";
import ProjectProgressChart from "./ProjectProgressChart";

export default function ChartSummary({ tasks, projects }) {
  return (
    <div className="row g-4 mb-5">
      <div className="col-md-6">
        <TaskStatusChart tasks={tasks} />
      </div>
      <div className="col-md-6">
        <TaskPriorityChart tasks={tasks} />
      </div>
      <div className="col-12">
        <ProjectProgressChart tasks={tasks} projects={projects} />
      </div>
    </div>
  );
}
