// src/components/tasks/TaskFilterBar.jsx
import React, { useState } from "react";

export default function TaskFilterBar({ onFilter }) {
  const [status, setStatus] = useState("all");
  const [priority, setPriority] = useState("all");
  const [dueOnly, setDueOnly] = useState(false);

  const handleApply = () => {
    onFilter({ status, priority, dueOnly });
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <div className="row align-items-end g-3">
          <div className="col-md-4">
            <label className="form-label">Status</label>
            <select
              className="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="all">All</option>
              <option value="todo">To Do</option>
              <option value="doing">In Progress</option>
              <option value="done">Completed</option>
            </select>
          </div>

          <div className="col-md-4">
            <label className="form-label">Priority</label>
            <select
              className="form-select"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="all">All</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="col-md-2 form-check mt-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="dueOnly"
              checked={dueOnly}
              onChange={(e) => setDueOnly(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="dueOnly">
              With Due Date
            </label>
          </div>

          <div className="col-md-2">
            <button className="btn btn-outline-primary w-100" onClick={handleApply}>
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
