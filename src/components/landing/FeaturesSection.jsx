// src/components/landing/FeaturesSection.jsx
import React from "react";
import { FaProjectDiagram, FaRobot, FaChartPie, FaFileExport } from "react-icons/fa";

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaProjectDiagram size={36} className="text-primary mb-3" />,
      title: "Project Organization",
      description: "Create and manage multiple projects with tasks, deadlines, and priorities.",
    },
    {
      icon: <FaRobot size={36} className="text-success mb-3" />,
      title: "AI Assistant",
      description: "Interact with a smart rule-based chatbot to guide your actions.",
    },
    {
      icon: <FaChartPie size={36} className="text-warning mb-3" />,
      title: "Visual Dashboard",
      description: "Track task completion, priorities, and more using charts and graphs.",
    },
    {
      icon: <FaFileExport size={36} className="text-info mb-3" />,
      title: "Data Export & Import",
      description: "Backup and sync your data across devices using JSON files.",
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Why You'll Love This App 💖</h2>
        <div className="row justify-content-center">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  {feature.icon}
                  <h5 className="card-title fw-semibold">{feature.title}</h5>
                  <p className="card-text text-muted">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
