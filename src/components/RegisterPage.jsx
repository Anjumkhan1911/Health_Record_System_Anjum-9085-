import React, { useState } from "react";
import axios from "axios";
import "../components/css/Registration.css";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    role: "patient", // Default role is patient
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9085/api/register", formData);
      setMessage(response.data); // "User registered successfully"
      setFormData({ username: "", password: "", email: "", role: "patient" }); // Reset form
    } catch (error) {
      setMessage(error.response?.data || "Registration failed");
    }
  };

  return (
    <div className="registration-page">
      <div className="registration-container">
        <h1>Register</h1>
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

          <button type="submit" className="register-button">Register</button>
        </form>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default RegistrationPage;
