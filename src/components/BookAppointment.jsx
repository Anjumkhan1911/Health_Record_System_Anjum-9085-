import React, { useState, useEffect } from "react";
import axios from "axios";
import "../components/css/BookAppointment.css";
import { useNavigate } from "react-router-dom";

const BookAppointment = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [appointmentDetails, setAppointmentDetails] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:9085/api/book-appointments", {
          withCredentials: true,
        });
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctors list:", error);
      }
    };

    fetchDoctors();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    // Example patientId (replace with dynamic data if needed)
    const payload = {
      patientId: "12345", // Add a valid patientId here
      doctor: selectedDoctor,
      details: appointmentDetails,
    };
  
    console.log("Payload:", payload); // Debugging step
  
    try {
      const response = await axios.post(
        "http://localhost:9085/api/book-appointments",
        payload,
        { withCredentials: true }
      );
      alert("Appointment request sent successfully!");
      navigate("/patient-dashboard");
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Failed to book the appointment.");
    }
  };
  

  return (
    <div className="book-appointment-page">
      <h1>Book Appointment</h1>
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="doctor">Select Doctor:</label>
          <select
            id="doctor"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            required
          >
             <option value="">-- Choose a Doctor --</option>
            <option value="0-default">General Consultation - 001</option>
            <option value="1-specialist">Dr.John Doe-Cardialogist- 002</option>
            <option value="2-default">Dr.Jane Smith-Neurologist - 003</option>
            <option value="3-specialist">Dr.Emily Brown-Pediatrician - 004</option>
            <option value="4-default">Dr.Michael Green-Orthopedic - 005</option>
            <option value="5-specialist">Dr.Sarah Johnson-Dermatologist - 006</option>
            <option value="6-specialist">Dr.Robert WilsonGastroenterologist - 007</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={`${doctor.id}-${doctor.name}`}>
                {`${doctor.id} - ${doctor.name}`}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="details">Appointment Details:</label>
          <textarea
            id="details"
            value={appointmentDetails}
            onChange={(e) => setAppointmentDetails(e.target.value)}
            placeholder="Enter details about the appointment"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Request Appointment
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;
