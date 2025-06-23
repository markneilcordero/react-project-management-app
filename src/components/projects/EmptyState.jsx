// src/components/projects/EmptyState.jsx
import React from "react";
import { FaFolderOpen } from "react-icons/fa";

export default function EmptyState() {
  return (
    <div className="text-center py-5">
      <FaFolderOpen size={64} className="text-muted mb-3" />
      <h4 className="fw-bold mb-2">No Projects Yet</h4>
      <p className="text-muted">
        Start by creating your first project to begin organizing your work!
      </p>
    </div>
  );
}
