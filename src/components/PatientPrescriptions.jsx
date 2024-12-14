import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PatientPrescriptions = () => {
  const { id } = useParams(); // Get the patient ID from the URL
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    const fetchPrescriptions = async () => {
      try {
        const response = await axios.get(`http://localhost:9085/api/records/patients/${id}/prescriptions`);
        if (response.status === 200) {
          setPrescriptions(response.data);
        } else {
          console.error("Error: Failed to fetch prescriptions.");
        }
      } catch (error) {
        console.error("Error fetching prescriptions:", error);
      }
    };

    fetchPrescriptions();
  }, [id]);

  return (
    <div>
      <h2>Prescriptions for Patient {id}</h2>
      {prescriptions.length > 0 ? (
        <ul>
          {prescriptions.map((prescription, index) => (
            <li key={index}>{prescription.details}</li>
          ))}
        </ul>
      ) : (
        <p>No prescriptions available.</p>
      )}
    </div>
  );
};

export default PatientPrescriptions;
