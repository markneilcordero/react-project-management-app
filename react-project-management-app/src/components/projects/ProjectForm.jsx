// src/components/projects/ProjectForm.jsx
import React, { useEffect, useState } from "react";

export default function ProjectForm({ onSave, editData }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editData) {
      setTitle(editData.title);
      setDescription(editData.description || "");
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const formData = {
      title: title.trim(),
      description: description.trim(),
    };

    onSave(formData);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h5 className="card-title fw-bold mb-3">
          {editData ? "✏️ Edit Project" : "➕ Add New Project"}
        </h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="project-title" className="form-label">
              Project Title <span className="text-danger">*</span>
            </label>
            <input
              id="project-title"
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Website Redesign"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="project-desc" className="form-label">
              Description (optional)
            </label>
            <textarea
              id="project-desc"
              className="form-control"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief summary of the project"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            {editData ? "Update Project" : "Add Project"}
          </button>
        </form>
      </div>
    </div>
  );
}
