import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { CiRoute } from "react-icons/ci";
import "./Home.css";
function Home() {
  const [user, setUser] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showSafetyMenu, setShowSafetyMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="home-container">

      {/* TOP NAVBAR */}
      <nav className="home-navbar">
        <div className="nav-left">

          {/* SAFEZONE SHIELD */}
          <div
            className="shield"
            onClick={() => {
              if (user) {
                setShowSafetyMenu(!showSafetyMenu);
                setShowUserMenu(false);
              }
            }}
          >
            🛡
          </div>

          <span className="brand">SafeZone</span>
          <small className="tagline">AI Safety Prediction</small>

          {/* SAFETY DROPDOWN */}
          {user && showSafetyMenu && (
            <div className="safety-dropdown">
              <div className="btnone">
                <button
  onClick={() => {
    navigate("/");
    setShowSafetyMenu(false);   // 👈 CLOSE DROPDOWN
  }}
>
  <IoHomeOutline /> Dashboard
</button>

              
              <button onClick={() => navigate("/safe-route")}>
                  <CiRoute /> Safe Route
              </button>
              <button onClick={() => navigate("/search-location")}>
                <IoLocationOutline /> Search Location
              </button>
              </div>
              <div className="btn">
              <button onClick={() => navigate("/report")}>
                🚨 Report Incident
              </button>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT SIDE */}
        {!user ? (
          <Link to="/register">
            <button className="signup-btn">Sign Up</button>
          </Link>
        ) : (
          <div className="user-section">
            <div
              className="user-icon"
              onClick={() => {
                setShowUserMenu(!showUserMenu);
                setShowSafetyMenu(false);
              }}
            >
              👤
            </div>

            {showUserMenu && (
              <div className="user-dropdown">
                <div className="user-info">
                  <p className="user-name">{user.name}</p>
                  <p className="user-email">{user.email}</p>
                </div>

                <Link to="/help" className="dropdown-link">
                  Help
                </Link>

                <button className="logout-btn" onClick={logout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <div className="hero-section">
        <div className="ai-badge">✨ AI-Powered Safety Analysis</div>
        <h1>Know Before You Go</h1>
        <p className="hero-text">
          Get instant AI-powered safety predictions for any location.
          Make informed decisions about where you travel, live, or visit.
        </p>

        <div className="features">
          <div className="feature">🛡 Real-time Analysis</div>
          <div className="feature">📊 Safety Scores</div>
          <div className="feature">📍 Safe Alternatives</div>
        </div>
      </div>

    </div>
  );
}

export default Home;