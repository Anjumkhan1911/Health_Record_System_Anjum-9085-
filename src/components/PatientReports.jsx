import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PatientReports = () => {
  const { id } = useParams(); // Get the patient ID from the URL
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get(`http://localhost:9085/api/records/patients/${id}/reports`);
        if (response.status === 200) {
          setReports(response.data);
        } else {
          console.error("Error: Failed to fetch reports.");
        }
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };

    fetchReports();
  }, [id]);

  return (
    <div>
      <h2>Reports for Patient {id}</h2>
      {reports.length > 0 ? (
        <ul>
          {reports.map((report, index) => (
            <li key={index}>{report.details}</li>
          ))}
        </ul>
      ) : (
        <p>No reports available.</p>
      )}
    </div>
  );
};

export default PatientReports;