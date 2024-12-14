import React from "react";
import { Link } from "react-router-dom";
import "../components/css/Home.css";
import Logo from "../components/images/Logo.png";

function HomePage() {
  return (
    <div className="home-page">
      <header className="header">
        <div className="logo-container">
        <img
            src={Logo} 
            alt="Health Records System Logo"
            className="logo"/>
          <h1 className="title">Health Records System</h1>
        </div>
        <nav className="nav-bar">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/register" className="nav-link">
            Register
          </Link>
          <Link to="/login" className="nav-link">
            Login
          </Link>
          <Link to="/doctors" className="nav-link">
            Doctors
          </Link>
        </nav>
      </header>

      <main className="content">
        <h2>Welcome to the Health Records System</h2>
        <p>
          Our platform offers a secure and efficient way to manage your health records. Patients
          can access their medical history, prescriptions, and lab reports, while healthcare providers
          can monitor progress and update records. We ensure data privacy and compliance with healthcare
          regulations, providing seamless communication between patients and doctors.
        </p>
        <p>
          Start today by registering as a new user or login to manage your health records effortlessly.
        </p>

        <section className="doctors-section">
          <h3>Meet Our Specialists</h3>
          <div className="doctors-container">
            <div className="doctor-card">
              <img
                src="https://as2.ftcdn.net/v2/jpg/02/60/04/09/1000_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
                alt="Dr. John Doe"
                className="doctor-image"
              />
              <h4>Dr. John Doe</h4>
              <p>Cardiologist</p>
            </div>
            <div className="doctor-card">
              <img
                src="https://as1.ftcdn.net/jpg/01/67/15/98/1000_F_167159846_MCrwVzB7ysdZKr2vIiJkiCacEoNWagdn.jpg"
                alt="Dr. Jane Smith"
                className="doctor-image"
              />
              <h4>Dr. Jane Smith</h4>
              <p>Neurologist</p>
            </div>
            <div className="doctor-card">
              <img
                src="https://thumbs.dreamstime.com/z/doctor-holding-digital-tablet-meeting-room-portrait-beautiful-mature-woman-looking-camera-confident-female-using-164999229.jpg?ct=jpeg"
                alt="Dr. Emily Brown"
                className="doctor-image"
              />
              <h4>Dr. Emily Brown</h4>
              <p>Pediatrician</p>
            </div>
            <div className="doctor-card">
              <img
                src="https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Dr. Michael Green"
                className="doctor-image"
              />
              <h4>Dr. Michael Green</h4>
              <p>Orthopedic</p>
            </div>
            <div className="doctor-card">
              <img
                src="https://c7.alamy.com/comp/E52GNX/portrait-of-a-female-doctor-smiling-E52GNX.jpg"
                alt="Dr. Sarah Johnson"
                className="doctor-image"
              />
              <h4>Dr. Sarah Johnson</h4>
              <p>Dermatologist</p>
            </div>
            <div className="doctor-card">
              <img
                src="https://www.shutterstock.com/shutterstock/photos/2274219843/display_1500/stock-photo-confident-indian-male-doctor-standing-at-hospital-2274219843.jpg"
                alt="Dr. Robert Wilson"
                className="doctor-image"
              />
              <h4>Dr. Robert Wilson</h4>
              <p>Gastroenterologist</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p> Health Records System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;