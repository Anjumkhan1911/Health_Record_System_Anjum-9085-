import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import DoctorDashboard from "./components/DoctorDashboard";
import PatientDetails from "./components/PatientDetails";
import PatientReports from "./components/PatientReports";
import PatientPrescriptions from "./components/PatientPrescriptions";
import PatientAppointment from "./components/PatientAppointement";
import RegisterPage from "./components/RegisterPage";
import DoctorsList from "./components/DoctorsList";
import "./App.css";
import PatientDashboard from "./components/PatientDashboard";
import BookAppointment from "./components/BookAppointment";
import HealthCharts from "./components/HealthCharts";
function App() {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/patient-dashboard" element={<PatientDashboard />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/Patient-prescription" element={<PatientPrescriptions />} />
          <Route path="/Patient-reports" element={<PatientReports />} />
          <Route path="/Health-charts" element={<HealthCharts/>} />
          <Route path="/Doctor-dashboard" element={<DoctorDashboard />} />
          <Route path="/patient/:id" element={<PatientDetails />} />
          <Route path="/patient/:id/reports" element={<PatientReports />} />
          <Route path="/patient/:id/prescriptions" element={<PatientPrescriptions />} />
          <Route path="/patient/:id/appointments" element={<PatientAppointment />} />
          <Route path="/register" element={<RegisterPage />} />
        <Route path="/doctors" element={<DoctorsList />} /> 
        </Routes>
    </Router>
  );
}
export default App;