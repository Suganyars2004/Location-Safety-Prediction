import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="auth-bg">
      <div className="auth-card">
        <h2>Login</h2>
        <input placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign in</button>
      </div>
    </div>
  );
}
