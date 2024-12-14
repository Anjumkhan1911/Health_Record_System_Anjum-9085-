import React, { useState, useEffect } from "react";
import axios from "axios";
import "../components/css/PatientDashboard.css";
import { useNavigate } from "react-router-dom";

const PatientDashboard = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [reports, setReports] = useState([]);
  const [healthCharts, setHealthCharts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const prescriptionResponse = await axios.get("http://localhost:9085/api/patient/prescriptions", {
          withCredentials: true,
        });
        const reportsResponse = await axios.get("http://localhost:9085/api/patient/reports", {
          withCredentials: true,
        });
        const healthChartsResponse = await axios.get("http://localhost:9085/api/patient/health-charts", {
          withCredentials: true,
        });

        setPrescriptions(prescriptionResponse.data);
        setReports(reportsResponse.data);
        setHealthCharts(healthChartsResponse.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // Handle unauthorized access
        }
      }
    };

    fetchPatientData();
  }, []);

  const handleLogout = () => {
    navigate("/");
  };

  const handleBookAppointment = () => {
    navigate("/book-appointment");
  };
  const handlePatientPrescription = () => {
    navigate("/Patient-prescription");
  };
  const handlePatientReports = () => {
    navigate("/Patient-reports");
  };
  const handleHealthCharts = () => {
    navigate("/Health-charts");
  };


  return (
    <div className="patient-dashboard">
      <header className="dashboard-header">
        <h1>Patient Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </header>
      <section className="data-section">
        <h2>Book Appointment</h2>
        <button onClick={handleBookAppointment} className="patient-button">
          Book Appointment
        </button>
      </section>

      <section className="data-section">
      <h2>Prescriptions</h2>
        <button onClick={handlePatientPrescription} className="patient-button">
          Prescriptions
        </button>
        <ul>
          {prescriptions.map((prescription, index) => (
            <li key={index}>{prescription}</li>
          ))}
        </ul>
      </section>

      <section className="data-section">
      <h2>Reports</h2>
      <button onClick={handlePatientReports} className="patient-button">
          Reports
        </button>
        <ul>
          {reports.map((report, index) => (
            <li key={index}>{report}</li>
          ))}
        </ul>
      </section>

      <section className="data-section">
      <h2>Health Charts</h2>
      <button onClick={handleHealthCharts} className="patient-button">
          Health Charts
        </button>
        <ul>
          {healthCharts.map((chart, index) => (
            <li key={index}>{chart}</li>
          ))}
        </ul>
      </section>

     
    </div>
  );
};

export default PatientDashboard;
