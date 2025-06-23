// src/pages/SettingsPage.jsx
import React from "react";

import ImportExportPanel from "../components/settings/ImportExportPanel";
import ResetDataPanel from "../components/settings/ResetDataPanel";
import DataSummaryStats from "../components/settings/DataSummaryStats"; // optional
import LastModifiedInfo from "../components/settings/LastModifiedInfo"; // optional

export default function SettingsPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="container py-4 flex-grow-1">
        <h2 className="fw-bold mb-4 text-center">⚙️ App Settings</h2>

        <div className="mb-4">
          <ImportExportPanel />
        </div>

        <div className="mb-4">
          <ResetDataPanel />
        </div>

        {/* Optional info panels */}
        <div className="row g-4">
          <div className="col-md-6">
            <DataSummaryStats />
          </div>
          <div className="col-md-6">
            <LastModifiedInfo />
          </div>
        </div>
      </main>
    </div>
  );
}
