// src/components/landing/HeroSection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="py-5 bg-light text-center">
      <div className="container">
        <h1 className="display-4 fw-bold mb-3">
          Manage Projects Smarter with AI 💡
        </h1>
        <p className="lead text-muted mb-4">
          Organize your tasks, track progress, and chat with your intelligent assistant — all in one place.
        </p>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => navigate("/projects")}
        >
          🚀 Get Started
        </button>
      </div>
    </section>
  );
}
