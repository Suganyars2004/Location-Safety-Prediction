import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <nav className="navbar">
        <h2 className="logo">SafeZone</h2>
        <Link to="/register" className="nav-btn">Sign In</Link>
      </nav>

      <div className="hero">
        <span className="badge">AI-Powered Safety Analysis</span>
        <h1>Know Before You Go</h1>
        <p>
          Get instant AI-powered safety predictions for any location.
          Make informed decisions wherever you travel or live.
        </p>

        <div className="features">
          <span>🔒 Real-time Analysis</span>
          <span>📊 Safety Scores</span>
          <span>📍 Safe Alternatives</span>
        </div>
      </div>
    </div>
  );
}
