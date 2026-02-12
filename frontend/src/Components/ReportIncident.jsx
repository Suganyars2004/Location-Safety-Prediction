import React from "react";
import "./ReportIncident.css";

const ReportIncident = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <div className="modal-header">
          <h3>🚨 Report Incident</h3>
          <button className="close-btn" onClick={onClose}>✖</button>
        </div>

        <form className="modal-form">
          <label>Incident Type</label>
          <select required>
            <option value="">Select incident type</option>
            <option>Theft</option>
            <option>Accident</option>
            <option>Harassment</option>
            <option>Violence</option>
            <option>Other</option>
          </select>

          <label>Severity Level</label>
          <select required>
            <option>Caution - Low Risk</option>
            <option>Moderate Risk</option>
            <option>High Risk</option>
          </select>

          <label>Location</label>
          <input type="text" placeholder="Enter location" required />

          <label>Description</label>
          <textarea placeholder="Describe the incident..." rows="4"></textarea>

          <button type="submit" className="submit-btn">
            Submit Report
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReportIncident;