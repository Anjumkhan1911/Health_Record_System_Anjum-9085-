import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PatientAppointment = () => {
  const { id } = useParams(); // Get the patient ID from the URL
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(`http://localhost:9085/api/records/patients/${id}/appointments`);
        if (response.status === 200) {
          setAppointments(response.data);
        } else {
          console.error("Error: Failed to fetch appointments.");
        }
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, [id]);

  return (
    <div>
      <h2>Appointments for Patient {id}</h2>
      {appointments.length > 0 ? (
        <ul>
          {appointments.map((appointment, index) => (
            <li key={index}>{appointment.details}</li>
          ))}
        </ul>
      ) : (
        <p>No appointments available.</p>
      )}
    </div>
  );
};

export default PatientAppointment;
