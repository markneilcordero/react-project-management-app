// src/components/dashboard/TimeRangeFilter.jsx
import React, { useState } from "react";

export default function TimeRangeFilter({ onFilter }) {
  const [selected, setSelected] = useState("all");

  const ranges = [
    { label: "All Time", value: "all" },
    { label: "Last 7 Days", value: 7 },
    { label: "Last 30 Days", value: 30 },
    { label: "Last 90 Days", value: 90 },
  ];

  const handleChange = (e) => {
    const value = e.target.value;
    setSelected(value);
    if (value === "all") {
      onFilter(Infinity); // pass a very large number for no restriction
    } else {
      onFilter(parseInt(value));
    }
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body d-flex flex-wrap justify-content-between align-items-center gap-2">
        <h6 className="mb-0 fw-bold">⏱ Filter by Time Range</h6>
        <select
          className="form-select w-auto"
          value={selected}
          onChange={handleChange}
        >
          {ranges.map((range) => (
            <option key={range.value} value={range.value}>
              {range.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
