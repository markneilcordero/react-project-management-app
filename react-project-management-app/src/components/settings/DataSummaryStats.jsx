// src/components/settings/DataSummaryStats.jsx
import React, { useEffect, useState } from "react";
import { getLocalData } from "../../utils/localStorageHelpers";

export default function DataSummaryStats() {
  const [projectCount, setProjectCount] = useState(0);
  const [taskCount, setTaskCount] = useState(0);
  const [dataSize, setDataSize] = useState(0);

  useEffect(() => {
    const projects = getLocalData("pm-app-projects-v1", []);
    setProjectCount(projects.length);

    let totalTasks = 0;
    let totalSize = 0;

    for (const key of Object.keys(localStorage)) {
      const value = localStorage.getItem(key);
      totalSize += value.length;

      if (key.startsWith("pm-app-tasks-")) {
        try {
          const tasks = JSON.parse(value);
          totalTasks += tasks.length;
        } catch {}
      }
    }

    setTaskCount(totalTasks);
    setDataSize((totalSize / 1024).toFixed(2)); // in KB
  }, []);

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title fw-bold">📊 Storage Summary</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <span>Total Projects</span>
            <span className="fw-semibold">{projectCount}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Total Tasks</span>
            <span className="fw-semibold">{taskCount}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Estimated Storage</span>
            <span className="fw-semibold">{dataSize} KB</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
