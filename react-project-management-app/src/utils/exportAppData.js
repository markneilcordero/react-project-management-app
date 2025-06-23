// src/utils/exportAppData.js

/**
 * Gathers all app-related data from LocalStorage and downloads it as a .json file.
 */
export function exportAppData() {
  try {
    const exportData = {
      exportedAt: new Date().toISOString(),
      projects: [],
      tasks: {},
    };

    // Get all keys
    const keys = Object.keys(localStorage);

    // Filter keys for this app
    const projectKey = "pm-app-projects-v1";
    const taskPrefix = "pm-app-tasks-";

    if (localStorage.getItem(projectKey)) {
      exportData.projects = JSON.parse(localStorage.getItem(projectKey));
    }

    keys.forEach((key) => {
      if (key.startsWith(taskPrefix)) {
        exportData.tasks[key] = JSON.parse(localStorage.getItem(key));
      }
    });

    // Create file and trigger download
    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: "application/json",
    });

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const fileName = `pm-app-backup-${timestamp}.json`;

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    alert("❌ Failed to export data.");
    console.error("exportAppData error:", error);
  }
}
