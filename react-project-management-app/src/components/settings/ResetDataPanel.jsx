// src/components/settings/ResetDataPanel.jsx
import React, { useState } from "react";
import ConfirmResetModal from "./ConfirmResetModal";

export default function ResetDataPanel() {
  const [showModal, setShowModal] = useState(false);

  const handleReset = () => {
    // Clear only app-specific keys
    const keys = Object.keys(localStorage);
    keys.forEach((key) => {
      if (key.startsWith("pm-app-projects-v1") || key.startsWith("pm-app-tasks-")) {
        localStorage.removeItem(key);
      }
    });
    setShowModal(false);
    alert("🧹 App data has been reset. Refresh the page to see changes.");
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title fw-bold text-danger">🧹 Reset App Data</h5>
        <p className="text-muted">
          This will delete all your saved projects and tasks from LocalStorage.
        </p>
        <button className="btn btn-danger" onClick={() => setShowModal(true)}>
          Reset Everything
        </button>

        {showModal && (
          <ConfirmResetModal
            onConfirm={handleReset}
            onCancel={() => setShowModal(false)}
          />
        )}
      </div>
    </div>
  );
}
