import React, { useEffect, useState } from "react";
import axios from "axios";
import "../components/css/HealthCharts.css";

const HealthCharts = () => {
  const [charts, setCharts] = useState([]);

  useEffect(() => {
    const fetchHealthCharts = async () => {
      try {
       
        const response = await axios.get("http://localhost:9085/api/patient/health-charts", {
          withCredentials: true,
        });
        setCharts(response.data);
      } catch (error) {
        console.error("Error fetching health charts:", error);
      }
    };

    fetchHealthCharts();
  }, []);

  return (
    <div className="health-charts">
      <h1>Health Charts</h1>
      {charts.length > 0 ? (
        <div className="charts-container">
          {charts.map((chart, index) => (
            <div className="chart-card" key={index}>
              <h3>{chart.title}</h3>
              <img src={chart.imageUrl} alt={`Chart ${index + 1}`} className="chart-image" />
              <p>{chart.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No health charts available at the moment.</p>
      )}
    </div>
  );
};

export default HealthCharts;