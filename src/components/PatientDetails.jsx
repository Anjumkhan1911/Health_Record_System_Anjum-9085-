import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PatientDetails = () => {
  const { id } = useParams(); // Get the patient ID from the URL
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await axios.get(`http://localhost:9085/api/records/patients/${id}`);
        if (response.status === 200) {
          setPatient(response.data);
        } else {
          console.error("Error: Failed to fetch patient data.");
        }
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    fetchPatientData();
  }, [id]);

  return (
    <div>
      {patient ? (
        <div>
          <h2>{patient.name}</h2>
          <p>Age: {patient.age}</p>
          <p>Diagnosis: {patient.diagnosis}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PatientDetails;
