// src/components/tasks/TaskForm.jsx
import React, { useEffect, useState } from "react";

export default function TaskForm({ onSave, editData }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (editData) {
      setTitle(editData.title || "");
      setDescription(editData.description || "");
      setPriority(editData.priority || "medium");
      setDueDate(editData.dueDate || "");
    } else {
      setTitle("");
      setDescription("");
      setPriority("medium");
      setDueDate("");
    }
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const formData = {
      title: title.trim(),
      description: description.trim(),
      priority,
      dueDate,
    };

    onSave(formData);
    setTitle("");
    setDescription("");
    setPriority("medium");
    setDueDate("");
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h5 className="card-title fw-bold mb-3">
          {editData ? "✏️ Edit Task" : "➕ Add New Task"}
        </h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="task-title" className="form-label">
              Task Title <span className="text-danger">*</span>
            </label>
            <input
              id="task-title"
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="e.g. Create wireframe"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="task-desc" className="form-label">
              Description
            </label>
            <textarea
              id="task-desc"
              className="form-control"
              rows="2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Optional notes about the task"
            ></textarea>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="task-priority" className="form-label">
                Priority
              </label>
              <select
                id="task-priority"
                className="form-select"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="task-due-date" className="form-label">
                Due Date
              </label>
              <input
                type="date"
                id="task-due-date"
                className="form-control"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            {editData ? "Update Task" : "Add Task"}
          </button>
        </form>
      </div>
    </div>
  );
}
