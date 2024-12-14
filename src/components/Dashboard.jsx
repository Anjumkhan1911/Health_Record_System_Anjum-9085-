import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <nav>
        <Link to="/dashboard/patient">Patient Details</Link>
        <Link to="/dashboard/prescriptions">Prescriptions</Link>
        <Link to="/dashboard/labreports">Lab Reports</Link>
      </nav>
    </div>
  );
}

export default Dashboard;