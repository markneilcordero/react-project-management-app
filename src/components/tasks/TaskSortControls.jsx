// src/components/tasks/TaskSortControls.jsx
import React, { useState } from "react";

export default function TaskSortControls({ onSort }) {
  const [sortBy, setSortBy] = useState("createdAt");
  const [direction, setDirection] = useState("asc");

  const handleSort = () => {
    onSort({ sortBy, direction });
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body row align-items-end g-3">
        <div className="col-md-6">
          <label className="form-label">Sort By</label>
          <select
            className="form-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="createdAt">Created Date</option>
            <option value="title">Title</option>
            <option value="dueDate">Due Date</option>
            <option value="priority">Priority</option>
          </select>
        </div>

        <div className="col-md-4">
          <label className="form-label">Direction</label>
          <select
            className="form-select"
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>

        <div className="col-md-2">
          <button className="btn btn-outline-primary w-100" onClick={handleSort}>
            Sort
          </button>
        </div>
      </div>
    </div>
  );
}
