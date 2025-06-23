// src/components/settings/ImportExportPanel.jsx
import React, { useRef } from "react";
import { exportAppData } from "../../utils/exportAppData";
import { importAppData } from "../../utils/importAppData";

export default function ImportExportPanel() {
  const fileInputRef = useRef();

  const handleExport = () => {
    exportAppData();
  };

  const handleImportClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        const result = importAppData(parsed);
        if (result.success) {
          alert("✅ Data imported successfully! Refresh the page to apply changes.");
        } else {
          alert(`❌ Import failed: ${result.message}`);
        }
      } catch (err) {
        alert("❌ Invalid JSON file.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title fw-bold">📦 Export / Import Data</h5>
        <p className="text-muted">
          Export your app data to a JSON file for backup or import it to another device.
        </p>
        <div className="d-flex flex-wrap gap-2">
          <button className="btn btn-outline-primary" onClick={handleExport}>
            📤 Export Data
          </button>
          <button className="btn btn-outline-secondary" onClick={handleImportClick}>
            📥 Import Data
          </button>
          <input
            type="file"
            accept="application/json"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
}
