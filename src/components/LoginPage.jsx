import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../components/css/Login.css"; // Import the CSS file for styling

const API_BASE_URL = "http://localhost:9085/api"; // Update this URL if needed

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient"); // Default role is patient
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `http://localhost:9085/api/login?username=${username}&password=${password}&role=${role}`,
        {},
        {
          withCredentials: true,
        }
      );
      alert("Login successful");

      if (role === "patient") {
        navigate("/patient-dashboard");
      } else if (role === "doctor") {
        navigate("/doctor-dashboard");
      }
    } catch (error) {
      console.error("Login error", error);
      alert(error.response?.data?.message || "Login failed");
    }
  };
  

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Health Records System</h1>
        <div className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="login-select"
          >
            <option value="patient">Login as Patient</option>
            <option value="doctor">Login as Doctor</option>
          </select>
          <button onClick={handleLogin} className="login-button">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;