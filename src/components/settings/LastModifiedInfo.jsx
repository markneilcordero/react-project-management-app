// src/components/settings/LastModifiedInfo.jsx
import React, { useEffect, useState } from "react";

export default function LastModifiedInfo() {
  const [lastModified, setLastModified] = useState(null);

  useEffect(() => {
    const timestamps = [];

    // Check all keys related to the app
    for (const key of Object.keys(localStorage)) {
      if (
        key === "pm-app-projects-v1" ||
        key.startsWith("pm-app-tasks-")
      ) {
        try {
          const data = JSON.parse(localStorage.getItem(key));
          if (Array.isArray(data)) {
            data.forEach((item) => {
              if (item.updatedAt || item.createdAt) {
                timestamps.push(new Date(item.updatedAt || item.createdAt));
              }
            });
          }
        } catch {}
      }
    }

    if (timestamps.length > 0) {
      const latest = new Date(Math.max(...timestamps.map((t) => t.getTime())));
      setLastModified(latest.toLocaleString());
    } else {
      setLastModified("Not available");
    }
  }, []);

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title fw-bold">🕒 Last Modified</h5>
        <p className="text-muted mb-0">
          {lastModified ? `Latest update: ${lastModified}` : "Loading..."}
        </p>
      </div>
    </div>
  );
}
