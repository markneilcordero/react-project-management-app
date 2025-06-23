import React from "react";
import {
  FaTasks,
  FaCheckSquare,
  FaSpinner,
  FaClipboardList,
  FaArrowCircleUp,
  FaArrowCircleDown,
  FaEquals
} from "react-icons/fa";

export default function TaskSummaryStats({ tasks }) {
  const total = tasks.length;
  const done = tasks.filter((t) => t.status === "done").length;
  const doing = tasks.filter((t) => t.status === "doing").length;
  const todo = tasks.filter((t) => t.status === "todo").length;

  const high = tasks.filter((t) => t.priority === "high").length;
  const medium = tasks.filter((t) => t.priority === "medium").length;
  const low = tasks.filter((t) => t.priority === "low").length;

  const cardStyle = "text-white text-center p-3 rounded-4 shadow-sm";

  return (
    <div className="mb-4">
      <div className="row g-3">
        <div className="col-6 col-md-3">
          <div className={`${cardStyle} bg-dark`}>
            <FaClipboardList size={36} className="mb-2" />
            <div className="fw-semibold">Total Tasks</div>
            <div className="fs-4">{total}</div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className={`${cardStyle} bg-secondary`}>
            <FaTasks size={36} className="mb-2" />
            <div className="fw-semibold">To Do</div>
            <div className="fs-4">{todo}</div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className={`${cardStyle} bg-warning text-dark`}>
            <FaSpinner size={36} className="mb-2" />
            <div className="fw-semibold">In Progress</div>
            <div className="fs-4">{doing}</div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className={`${cardStyle} bg-success`}>
            <FaCheckSquare size={36} className="mb-2" />
            <div className="fw-semibold">Completed</div>
            <div className="fs-4">{done}</div>
          </div>
        </div>
      </div>

      <div className="row g-3 mt-3">
        <div className="col-4">
          <div className={`${cardStyle} bg-danger`}>
            <FaArrowCircleUp size={32} className="mb-1" />
            <div className="fw-semibold">High</div>
            <div className="fs-5">{high}</div>
          </div>
        </div>
        <div className="col-4">
          <div className={`${cardStyle} bg-primary`}>
            <FaEquals size={32} className="mb-1" />
            <div className="fw-semibold">Medium</div>
            <div className="fs-5">{medium}</div>
          </div>
        </div>
        <div className="col-4">
          <div className={`${cardStyle} bg-info text-dark`}>
            <FaArrowCircleDown size={32} className="mb-1" />
            <div className="fw-semibold">Low</div>
            <div className="fs-5">{low}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
