import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Password match check
    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Store user in localStorage
    localStorage.setItem(
      "registeredUser",
      JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
      })
    );

    // Auto login after register
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: data.name,
        email: data.email,
      })
    );

    setError("");
    navigate("/");
  };

  return (
    <div className="register-bg">
      <div className="register-card">
        <h2>Create an Account</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={data.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={data.confirmPassword}
            onChange={handleChange}
            required
          />

          {error && <p className="error-text">{error}</p>}

          <button type="submit">Sign Up</button>
        </form>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
