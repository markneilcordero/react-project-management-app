// src/components/tasks/TaskCard.jsx
import React from "react";
import { FaEdit, FaTrash, FaCheckCircle } from "react-icons/fa";

export default function TaskCard({ task, onEdit, onDelete, onToggleStatus }) {
  const { title, description, priority, dueDate, status } = task;

  const getStatusBadge = (status) => {
    switch (status) {
      case "todo":
        return <span className="badge bg-secondary">To Do</span>;
      case "doing":
        return <span className="badge bg-warning text-dark">In Progress</span>;
      case "done":
        return <span className="badge bg-success">Completed</span>;
      default:
        return null;
    }
  };

  const getPriorityBadge = (level) => {
    switch (level) {
      case "low":
        return <span className="badge bg-info">Low</span>;
      case "medium":
        return <span className="badge bg-primary">Medium</span>;
      case "high":
        return <span className="badge bg-danger">High</span>;
      default:
        return null;
    }
  };

  return (
    <div className="card shadow-sm h-100 border-0">
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title fw-bold d-flex justify-content-between align-items-center">
            {title}
            {getStatusBadge(status)}
          </h5>
          <p className="card-text text-muted">
            {description || "No description provided."}
          </p>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="d-flex flex-column">
            <small className="text-muted mb-1">Priority: {getPriorityBadge(priority)}</small>
            {dueDate && (
              <small className="text-muted">Due: {new Date(dueDate).toLocaleDateString()}</small>
            )}
          </div>
          <div className="d-flex gap-2">
            <button
              className="btn btn-sm btn-outline-success"
              onClick={onToggleStatus}
              title="Cycle Status"
            >
              <FaCheckCircle />
            </button>
            <button
              className="btn btn-sm btn-outline-primary"
              onClick={onEdit}
              title="Edit Task"
            >
              <FaEdit />
            </button>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={onDelete}
              title="Delete Task"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
