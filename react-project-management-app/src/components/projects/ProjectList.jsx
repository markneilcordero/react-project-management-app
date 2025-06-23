// src/components/projects/ProjectList.jsx
import React from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectList({ projects, onEdit, onDelete }) {
  return (
    <div className="row">
      {projects.map((project) => (
        <div key={project.id} className="col-md-6 col-lg-4 mb-4">
          <ProjectCard
            project={project}
            onEdit={() => onEdit(project)}
            onDelete={() => onDelete(project)}
          />
        </div>
      ))}
    </div>
  );
}
