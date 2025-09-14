import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { Mail, Lock, LogIn } from "lucide-react"; // ✅ Icons

const LoginPage = ({isLoggedIn}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputRef = useRef();
  const navigate = useNavigate();
  const { loggedUser, login } = useContext(AuthContext);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleLogin(e) {
    e.preventDefault();
    try {
      const msg = login(email, password);
      if (msg) {
        alert(msg);
        navigate("/dashboard");
      } else {
        alert("Invalid credentials ❌");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4 rounded-4" style={{ width: "400px" }}>
        {/* Heading */}
        <h2 className="text-center mb-4 fw-bold text-primary">
          <LogIn size={28} className="me-2" />
          Welcome Back
        </h2>
        <p className="text-center text-muted mb-4">
          Login to continue shopping 🛒
        </p>

        {/* Form */}
        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              <Mail size={18} className="me-2 text-primary" />
              Email Address
            </label>
            <input
              ref={inputRef}
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
              <Lock size={18} className="me-2 text-primary" />
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-3"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Remember me + Forgot password */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="remember" />
              <label className="form-check-label small" htmlFor="remember">
                Remember me
              </label>
            </div>
            <a href="#" className="small text-decoration-none text-primary">
              Forgot Password?
            </a>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="btn btn-primary w-100 rounded-3 fw-semibold"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="text-center my-3 text-muted">or</div>

        {/* Register link */}
        <div className="text-center">
          <span className="small">Don't have an account? </span>
          <Link to="/register" className="fw-semibold text-primary text-decoration-none">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
