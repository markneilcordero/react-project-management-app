// src/utils/aggregateDashboardData.js

/**
 * Aggregates project/task stats for dashboard summaries.
 * @param {Array} projects - List of all project objects
 * @param {Array} tasks - List of all tasks across projects
 * @returns {Object} Summary stats for dashboard
 */
export function aggregateDashboardData(projects, tasks) {
  const totalProjects = projects.length;
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.status === "done").length;
  const inProgressTasks = tasks.filter((t) => t.status === "doing").length;
  const todoTasks = tasks.filter((t) => t.status === "todo").length;

  const priorityStats = {
    low: tasks.filter((t) => t.priority === "low").length,
    medium: tasks.filter((t) => t.priority === "medium").length,
    high: tasks.filter((t) => t.priority === "high").length,
  };

  const projectCompletion = projects.map((project) => {
    const projectTasks = tasks.filter((t) => t.projectId === project.id);
    const doneCount = projectTasks.filter((t) => t.status === "done").length;
    const percent = projectTasks.length
      ? Math.round((doneCount / projectTasks.length) * 100)
      : 0;

    return {
      id: project.id,
      title: project.title,
      total: projectTasks.length,
      completed: doneCount,
      percent,
    };
  });

  return {
    totalProjects,
    totalTasks,
    completedTasks,
    inProgressTasks,
    todoTasks,
    priorityStats,
    projectCompletion,
  };
}
