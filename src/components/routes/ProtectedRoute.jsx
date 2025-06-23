import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// In a real app, you'd check authentication here
const isAllowed = true; // Change this to logic if needed

export default function ProtectedRoute() {
  return isAllowed ? <Outlet /> : <Navigate to="/" replace />;
}
