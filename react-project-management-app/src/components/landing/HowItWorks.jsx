// src/components/landing/HowItWorks.jsx
import React from "react";
import {
  FaPlusCircle,
  FaTasks,
  FaComments,
  FaFileDownload,
} from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaPlusCircle className="text-primary" size={36} />,
      title: "1. Create a Project",
      description: "Start by adding a new project and organizing your workflow.",
    },
    {
      icon: <FaTasks className="text-success" size={36} />,
      title: "2. Add Your Tasks",
      description: "Break down your project into manageable tasks with priorities and deadlines.",
    },
    {
      icon: <FaComments className="text-warning" size={36} />,
      title: "3. Chat with the Assistant",
      description: "Use the AI Assistant to quickly add tasks, get suggestions, or track progress.",
    },
    {
      icon: <FaFileDownload className="text-info" size={36} />,
      title: "4. Export or Import Data",
      description: "Backup your work or move it across devices with a single click.",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">How It Works ⚙️</h2>
        <div className="row justify-content-center">
          {steps.map((step, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  {step.icon}
                  <h6 className="fw-semibold mt-3">{step.title}</h6>
                  <p className="text-muted">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
