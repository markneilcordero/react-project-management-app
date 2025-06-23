// src/pages/ProjectsPage.jsx
import React, { useEffect, useState } from "react";

import ProjectList from "../components/projects/ProjectList";
import ProjectForm from "../components/projects/ProjectForm";
import ConfirmDeleteModal from "../components/projects/ConfirmDeleteModal"; // optional
import EmptyState from "../components/projects/EmptyState"; // optional

import { getLocalData, saveLocalData } from "../utils/localStorageHelpers";
import { generateId } from "../utils/uuidGenerator";

const STORAGE_KEY = "pm-app-projects-v1";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [projectToEdit, setProjectToEdit] = useState(null);
  const [projectToDelete, setProjectToDelete] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    const data = getLocalData(STORAGE_KEY, []);
    setProjects(data);
  }, []);

  const handleSave = (formData) => {
    let updatedProjects;
    if (projectToEdit) {
      updatedProjects = projects.map((p) =>
        p.id === projectToEdit.id ? { ...formData, id: projectToEdit.id } : p
      );
    } else {
      updatedProjects = [
        ...projects,
        { ...formData, id: generateId(), createdAt: new Date().toISOString() },
      ];
    }
    setProjects(updatedProjects);
    saveLocalData(STORAGE_KEY, updatedProjects);
    setProjectToEdit(null);
  };

  const handleDelete = () => {
    const updated = projects.filter((p) => p.id !== projectToDelete.id);
    setProjects(updated);
    saveLocalData(STORAGE_KEY, updated);
    setShowDeleteModal(false);
    setProjectToDelete(null);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1 container py-4">
        <h2 className="fw-bold mb-4 text-center">Your Projects 🗂️</h2>
        <ProjectForm onSave={handleSave} editData={projectToEdit} />
        {projects.length > 0 ? (
          <ProjectList
            projects={projects}
            onEdit={setProjectToEdit}
            onDelete={(project) => {
              setProjectToDelete(project);
              setShowDeleteModal(true);
            }}
          />
        ) : (
          <EmptyState />
        )}
        {showDeleteModal && projectToDelete && (
          <ConfirmDeleteModal
            title={`Delete "${projectToDelete.title}"?`}
            onConfirm={handleDelete}
            onCancel={() => setShowDeleteModal(false)}
          />
        )}
      </main>
    </div>
  );
}
