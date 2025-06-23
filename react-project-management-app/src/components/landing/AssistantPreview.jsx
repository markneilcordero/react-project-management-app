// src/components/landing/AssistantPreview.jsx
import React from "react";
import "../../styles/AssistantPreview.css"; // Optional scoped styling

export default function AssistantPreview() {
  return (
    <section className="py-5 bg-white border-top">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Meet Your Smart Assistant 🤖</h2>
        <p className="text-muted mb-4">
          Interact with a helpful chatbot to manage tasks, get suggestions, and boost productivity.
        </p>

        <div className="d-flex justify-content-center">
          <div className="mock-chat border rounded p-3 shadow-sm text-start bg-light" style={{ maxWidth: "400px" }}>
            <div className="mb-2">
              <span className="badge bg-primary me-2">You</span>
              <span>Add a new project called "Website Redesign"</span>
            </div>
            <div className="mb-2">
              <span className="badge bg-success me-2">AI</span>
              <span>✅ Project "Website Redesign" has been added!</span>
            </div>
            <div className="mb-2">
              <span className="badge bg-primary me-2">You</span>
              <span>Show me completed tasks</span>
            </div>
            <div>
              <span className="badge bg-success me-2">AI</span>
              <span>You’ve completed 5 tasks this week. 🎉 Keep it up!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
