import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import TaskForm from "../components/tasks/TaskForm";
import TaskList from "../components/tasks/TaskList";
import TaskFilterBar from "../components/tasks/TaskFilterBar";
import TaskSortControls from "../components/tasks/TaskSortControls";
import TaskSummaryStats from "../components/tasks/TaskSummaryStats";
import ConfirmDeleteTaskModal from "../components/tasks/ConfirmDeleteTaskModal";
import EmptyTaskState from "../components/tasks/EmptyTaskState";

import { getLocalData, saveLocalData } from "../utils/localStorageHelpers";
import { generateId } from "../utils/uuidGenerator";

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const TASKS_KEY = `pm-app-tasks-${projectId}`;
  const PROJECTS_KEY = "pm-app-projects-v1";

  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [project, setProject] = useState(null);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    const allProjects = getLocalData(PROJECTS_KEY, []);
    const current = allProjects.find((p) => p.id === projectId);
    if (!current) return navigate("/projects");

    setProject(current);
    const loadedTasks = getLocalData(TASKS_KEY, []);
    setTasks(loadedTasks);
    setFilteredTasks(loadedTasks);
  }, [projectId]);

  const handleSave = (formData) => {
    let updated;
    if (taskToEdit) {
      updated = tasks.map((t) =>
        t.id === taskToEdit.id ? { ...formData, id: t.id } : t
      );
    } else {
      updated = [
        ...tasks,
        {
          ...formData,
          id: generateId(),
          createdAt: new Date().toISOString(),
          status: "todo",
        },
      ];
    }
    setTasks(updated);
    setFilteredTasks(updated); // Also update filtered view
    saveLocalData(TASKS_KEY, updated);
    setTaskToEdit(null);
  };

  const handleDelete = () => {
    const updated = tasks.filter((t) => t.id !== taskToDelete.id);
    setTasks(updated);
    setFilteredTasks(updated);
    saveLocalData(TASKS_KEY, updated);
    setTaskToDelete(null);
    setShowDeleteModal(false);
  };

  const handleFilter = ({ status, priority, dueOnly }) => {
    let filtered = [...tasks];

    if (status !== "all") {
      filtered = filtered.filter((t) => t.status === status);
    }

    if (priority !== "all") {
      filtered = filtered.filter((t) => t.priority?.toLowerCase() === priority);
    }

    if (dueOnly) {
      filtered = filtered.filter((t) => !!t.dueDate);
    }

    setFilteredTasks(filtered);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="container py-4 flex-grow-1">
        {project && (
          <>
            <h2 className="fw-bold text-center mb-4">{project.title} – Tasks 📋</h2>

            <TaskSummaryStats tasks={tasks} />
            <TaskFilterBar onFilter={handleFilter} />
            <TaskSortControls /> {/* Optional sorting logic */}

            <TaskForm onSave={handleSave} editData={taskToEdit} />

            {filteredTasks.length > 0 ? (
              <TaskList
                tasks={filteredTasks}
                onEdit={setTaskToEdit}
                onDelete={(task) => {
                  setTaskToDelete(task);
                  setShowDeleteModal(true);
                }}
                setTasks={setTasks}
              />
            ) : (
              <EmptyTaskState />
            )}

            {showDeleteModal && taskToDelete && (
              <ConfirmDeleteTaskModal
                title={`Delete "${taskToDelete.title}"?`}
                onConfirm={handleDelete}
                onCancel={() => setShowDeleteModal(false)}
              />
            )}
          </>
        )}
      </main>
    </div>
  );
}
