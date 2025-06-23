// src/utils/importAppData.js

import { saveLocalData } from "./localStorageHelpers";

const PROJECT_KEY = "pm-app-projects-v1";
const TASK_PREFIX = "pm-app-tasks-";

/**
 * Validates and imports app data into LocalStorage.
 * @param {Object} data - Parsed JSON object from user upload
 * @returns {Object} result - { success: boolean, message: string }
 */
export function importAppData(data) {
  if (!data || typeof data !== "object") {
    return { success: false, message: "Invalid data format." };
  }

  // Validate structure
  if (!Array.isArray(data.projects)) {
    return { success: false, message: "Missing or invalid 'projects' array." };
  }

  if (!data.tasks || typeof data.tasks !== "object") {
    return { success: false, message: "Missing or invalid 'tasks' object." };
  }

  // Save projects
  saveLocalData(PROJECT_KEY, data.projects);

  // Save tasks by key
  for (const key in data.tasks) {
    if (key.startsWith(TASK_PREFIX)) {
      saveLocalData(key, data.tasks[key]);
    }
  }

  return { success: true, message: "Data imported successfully." };
}
