// src/components/settings/ConfirmResetModal.jsx
import React from "react";
import { createPortal } from "react-dom";

export default function ConfirmResetModal({ onConfirm, onCancel }) {
  return createPortal(
    <div
      className="modal show d-block"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content border-0 shadow">
          <div className="modal-header bg-danger text-white">
            <h5 className="modal-title">Reset All Data?</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              aria-label="Close"
              onClick={onCancel}
            ></button>
          </div>
          <div className="modal-body">
            <p className="mb-0">
              This will <strong>permanently delete</strong> all saved projects and tasks from
              your browser. Are you sure you want to continue?
            </p>
          </div>
          <div className="modal-footer">
            <button onClick={onCancel} className="btn btn-secondary">
              Cancel
            </button>
            <button onClick={onConfirm} className="btn btn-danger">
              Yes, Reset All
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
