import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CreateTheme } from "../Context/ThemeProvider";
import { AuthContext } from "../Context/AuthProvider";
import { CartContext } from "../Context/CartContext";
// import { ThemeContext } from "../Context/ThemeProvider";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(CreateTheme);
  const { loggedUser, logout } = useContext(AuthContext);
  const { state } = useContext(CartContext);
  // const { theme, toggleTheme } = useContext(ThemeContext);

  const cartCount = state?.cart?.reduce((total, item) => total + item.quantity, 0) || 0;

  return (
    <nav
      className={`navbar navbar-expand-lg shadow-sm sticky-top ${
        theme === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
      style={{ padding: "0.8rem 1.5rem" }}
    >
      <div className="container-fluid">
        {/* ✅ Brand / Logo */}
        <Link
          className="navbar-brand fw-bold d-flex align-items-center gap-2"
          to="/dashboard"
          style={{ fontSize: "1.5rem" }}
        >
          <i className="fa-solid fa-basket-shopping text-success"></i> Grocery
        </Link>

        {/* ✅ Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ✅ Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center gap-2">
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/dashboard">
                <i className="fa-solid fa-house me-1"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/about">
                <i className="fa-solid fa-circle-info me-1"></i> About
              </Link>
            </li>
            <li className="nav-item">
              {/* ✅ Cart with Badge */}
              <Link className="nav-link fw-semibold position-relative" to="/cart">
                <i className="fa-solid fa-cart-shopping me-1"></i> Cart
                {cartCount > 0 && (
                  <span
                    className="badge bg-danger position-absolute top-0 start-100 translate-middle"
                    style={{ fontSize: "0.75rem", borderRadius: "50%" }}
                  >
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>

          {/* ✅ Right Side */}
          <div className="d-flex align-items-center gap-3">
            {/* Search bar */}
            <div className="input-group" style={{ width: "220px" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Search products..."
                style={{ fontSize: "0.9rem" }}
              />
              <span className="input-group-text bg-success text-white">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
            </div>

            {/* User info */}
            {loggedUser ? (
              <>
                <span
                  className="fw-semibold d-none d-md-inline"
                  style={{ fontSize: "0.95rem" }}
                >
                  <i className="fa-solid fa-user me-1"></i>
                  {loggedUser.name}
                </span>
                <button
                  onClick={() => logout()}
                  className="btn btn-sm btn-outline-danger"
                  style={{ borderRadius: "20px" }}
                >
                  <i className="fa-solid fa-right-from-bracket"></i> Logout
                </button>
              </>
            ) : (
              <Link
                to="/"
                className="btn btn-sm btn-outline-primary"
                style={{ borderRadius: "20px" }}
              >
                <i className="fa-solid fa-right-to-bracket"></i> Login
              </Link>
            )}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="btn btn-sm ms-2"
              style={{
                borderRadius: "50%",
                backgroundColor: theme === "light" ? "#f1f3f5" : "#343a40",
                color: theme === "light" ? "#212529" : "#f8f9fa",
              }}
            >
              {theme === "light" ? (
                <i className="fa-solid fa-sun text-warning"></i>
              ) : (
                <i className="fa-solid fa-moon"></i>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
