// src/components/tasks/EmptyTaskState.jsx
import React from "react";
import { FaClipboardList } from "react-icons/fa";

export default function EmptyTaskState() {
  return (
    <div className="text-center py-5">
      <FaClipboardList size={64} className="text-muted mb-3" />
      <h4 className="fw-bold mb-2">No Tasks Yet</h4>
      <p className="text-muted">
        Add your first task to start tracking progress and staying organized!
      </p>
    </div>
  );
}
