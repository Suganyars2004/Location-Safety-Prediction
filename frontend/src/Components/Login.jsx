import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const registeredUser = JSON.parse(
      localStorage.getItem("registeredUser")
    );

    if (!registeredUser) {
      setError("No account found. Please register first.");
      return;
    }

    // Check email & password
    if (
      data.email !== registeredUser.email ||
      data.password !== registeredUser.password
    ) {
      setError("Invalid Email or Password!");
      return;
    }

    // Successful login
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: registeredUser.name,
        email: registeredUser.email,
      })
    );

    setError("");
    navigate("/");
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
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

          {error && <p className="error-text">{error}</p>}

          <button type="submit">Login</button>
        </form>

        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
