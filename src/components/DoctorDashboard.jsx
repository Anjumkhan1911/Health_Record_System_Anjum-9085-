import React, { useEffect, useState } from "react";
import "../components/css/DoctorDashboard.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const DoctorDashboard = () => {
  const [patients, setPatients] = useState([]);
  const [newOps, setNewOps] = useState([]);
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get("http://localhost:9085/api/book-appointments");
        setAppointments(response.data);
        setLoading(false);

        const patientsResponse = await axios.get("http://localhost:9085/api/records/patients");
        console.log(patientsResponse); // Check what the API is returning
        if (patientsResponse.status === 200) {
          setPatients(patientsResponse.data);
        } else {
          console.error("Error: Failed to fetch patients data. Status:", patientsResponse.status);
        }
  
        // Set default new outpatient (OPs) list
        const defaultOps = [
          { id: 1, name: "Outpatient 1", status: null },
          { id: 2, name: "Outpatient 2", status: null },
          { id: 3, name: "Outpatient 3", status: null },
          { id: 4, name: "Outpatient 4", status: null },
          { id: 5, name: "Outpatient 5", status: null },
          { id: 6, name: "Outpatient 6", status: null },
          { id: 7, name: "Outpatient 7", status: null },
          { id: 8, name: "Outpatient 8", status: null },
          { id: 9, name: "Outpatient 9", status: null },
          { id: 10, name: "Outpatient 10", status: null }
        ];
        setNewOps(defaultOps);
      } catch (error) {
        console.error("Error fetching dashboard data:", error); // More detailed error logging
      }
    };
  
    fetchDashboardData();
  }, []);

  const handleAccept = (index) => {
    setNewOps((prevOps) =>
      prevOps.map((op, idx) => 
        idx === index ? { ...op, status: "Accepted" } : op
      )
    );
  };

  const handleReject = (index) => {
    setNewOps((prevOps) =>
      prevOps.map((op, idx) => 
        idx === index ? { ...op, status: "Rejected" } : op
      )
    );
  };

  const handleLogout = () => {
    // Perform any logout operations (e.g., clearing session, cookies, etc.)
    navigate("/"); // Redirect to the home page
  };

  return (
    <div className="doctor-dashboard">
      {/* Header Section with Logout Button */}
      <header className="dashboard-header">
        <h1>Doctor Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </header>
      <div className="appointments-page">
      <h1>Doctor Appointments</h1>
      <h2 className="A-list">Appointments List</h2>
      <table className="appointments-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Patient ID</th>
            <th>Doctor</th>
            <th>Details</th>
            <th>Status</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.id}</td>
              <td>{appointment.patientId}</td>
              <td>{appointment.doctor}</td>
              <td>{appointment.details}</td>
              <td>{appointment.status}</td>
              <td>{new Date(appointment.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      {/* Patient List Section */}
      

      <section className="new-ops-section">
        <h2>New Outpatients</h2>
        <table className="ops-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Action</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Patient 1</td>
              <td>
                <button className="accept-btn">Accept</button>
                <button className="reject-btn">Reject</button>
              </td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>Patient 2</td>
              <td>
                <button className="accept-btn">Accept</button>
                <button className="reject-btn">Reject</button>
              </td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>Patient 3</td>
              <td>
                <button className="accept-btn">Accept</button>
                <button className="reject-btn">Reject</button>
              </td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>Patient 4</td>
              <td>
                <button className="accept-btn">Accept</button>
                <button className="reject-btn">Reject</button>
              </td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>Patient 5</td>
              <td>
                <button className="accept-btn">Accept</button>
                <button className="reject-btn">Reject</button>
              </td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>Patient 6</td>
              <td>
                <button className="accept-btn">Accept</button>
                <button className="reject-btn">Reject</button>
              </td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>Patient 7</td>
              <td>
                <button className="accept-btn">Accept</button>
                <button className="reject-btn">Reject</button>
              </td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>Patient 8</td>
              <td>
                <button className="accept-btn">Accept</button>
                <button className="reject-btn">Reject</button>
              </td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>Patient 9</td>
              <td>
                <button className="accept-btn">Accept</button>
                <button className="reject-btn">Reject</button>
              </td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>Patient 10</td>
              <td>
                <button className="accept-btn">Accept</button>
                <button className="reject-btn">Reject</button>
              </td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default DoctorDashboard;