import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, UserPlus } from "lucide-react"; // ✅ icons

const RegisterPage = ({ setIsRegister }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleRegister(event) {
    event.preventDefault();
    const payload = {
      name: userName,
      email: email,
      password: password,
    };
    console.log(payload, "payload");
    localStorage.setItem("user", JSON.stringify(payload));
    setIsRegister(true);
    navigate("/");
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4 rounded-4" style={{ width: "400px" }}>
        {/* Heading */}
        <h2 className="text-center mb-4 fw-bold text-success">
          <UserPlus size={28} className="me-2" />
          Create Account
        </h2>
        <p className="text-center text-muted mb-4">
          Join us today 🚀 It only takes a minute!
        </p>

        <form onSubmit={handleRegister}>
          {/* Username */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              <User size={18} className="me-2 text-success" />
              User Name
            </label>
            <input
              type="text"
              className="form-control rounded-3"
              placeholder="Enter your username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              <Mail size={18} className="me-2 text-success" />
              Email Address
            </label>
            <input
              type="email"
              className="form-control rounded-3"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              <Lock size={18} className="me-2 text-success" />
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-3"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Terms checkbox */}
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="terms" required />
            <label className="form-check-label small" htmlFor="terms">
              I agree to the <a href="#" className="text-success text-decoration-none">Terms & Conditions</a>
            </label>
          </div>

          {/* Submit button */}
          <button type="submit" className="btn btn-success w-100 rounded-3 fw-semibold">
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="text-center my-3 text-muted">or</div>

        {/* Already Registered link */}
        <div className="text-center">
          <span className="small">Already have an account? </span>
          <Link to="/" className="fw-semibold text-success text-decoration-none">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
