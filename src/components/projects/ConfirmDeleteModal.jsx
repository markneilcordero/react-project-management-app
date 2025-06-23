// src/components/projects/ConfirmDeleteModal.jsx
import React from "react";
import { createPortal } from "react-dom";

export default function ConfirmDeleteModal({ title, onConfirm, onCancel }) {
  return createPortal(
    <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content border-0 shadow">
          <div className="modal-header">
            <h5 className="modal-title">{title || "Confirm Deletion"}</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onCancel}
            ></button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete this? This action cannot be undone.</p>
          </div>
          <div className="modal-footer">
            <button onClick={onCancel} className="btn btn-secondary">
              Cancel
            </button>
            <button onClick={onConfirm} className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
