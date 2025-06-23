// src/components/projects/ProjectCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaFolderOpen } from "react-icons/fa";

export default function ProjectCard({ project, onEdit, onDelete }) {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title fw-bold">{project.title}</h5>
          <p className="card-text text-muted">{project.description}</p>
          <p className="text-secondary small">
            📅 {new Date(project.createdAt).toLocaleDateString()}
          </p>
        </div>

        <div className="d-flex justify-content-end gap-2 mt-3">
          {/* ✅ Open Button */}
          <Link
            to={`/projects/${project.id}`}
            className="btn btn-sm btn-outline-success"
            title="Open Project"
          >
            <FaFolderOpen className="me-1" /> Open
          </Link>

          <button
            className="btn btn-sm btn-outline-primary"
            onClick={onEdit}
            title="Edit Project"
          >
            <FaEdit />
          </button>

          <button
            className="btn btn-sm btn-outline-danger"
            onClick={onDelete}
            title="Delete Project"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}
