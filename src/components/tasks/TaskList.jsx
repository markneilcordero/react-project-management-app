// src/components/tasks/TaskList.jsx
import React from "react";
import TaskCard from "./TaskCard";

export default function TaskList({ tasks, onEdit, onDelete, setTasks }) {
  const handleStatusToggle = (taskId) => {
    const updated = tasks.map((task) =>
      task.id === taskId
        ? {
            ...task,
            status:
              task.status === "done"
                ? "todo"
                : task.status === "todo"
                ? "doing"
                : "done",
          }
        : task
    );
    setTasks(updated);
    localStorage.setItem("pm-app-tasks-" + tasks[0]?.projectId, JSON.stringify(updated));
  };

  return (
    <div className="row">
      {tasks.map((task) => (
        <div key={task.id} className="col-md-6 col-lg-4 mb-4">
          <TaskCard
            task={task}
            onEdit={() => onEdit(task)}
            onDelete={() => onDelete(task)}
            onToggleStatus={() => handleStatusToggle(task.id)}
          />
        </div>
      ))}
    </div>
  );
}
