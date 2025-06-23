// src/utils/getAllTaskData.js

import { getLocalData } from "./localStorageHelpers";

/**
 * Retrieves all tasks across all projects from LocalStorage.
 * @param {Array} projects - List of project objects with `id` property
 * @returns {Array} Combined array of all tasks from each project
 */
export function getAllTaskData(projects) {
  const allTasks = [];

  projects.forEach((project) => {
    const key = `pm-app-tasks-${project.id}`;
    const projectTasks = getLocalData(key, []);

    // Attach projectId to each task (in case it's missing)
    const normalized = projectTasks.map((task) => ({
      ...task,
      projectId: project.id,
    }));

    allTasks.push(...normalized);
  });

  return allTasks;
}
