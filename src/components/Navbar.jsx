import React,{useContext} from 'react'
import {CreateTheme} from '../Context/ThemeProvider'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider'



const Navbar = () => {
  const {theme, toggleTheme} = useContext(CreateTheme)
  const {loggedUser, logout} = useContext(AuthContext)
  
  return (
    <>
    <div>
  <nav
    className={`navbar navbar-expand-lg ${
      theme === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"
    } shadow-sm`}
    style={{
      padding: "0.6rem 1.2rem",
      borderBottom: theme === "dark" ? "1px solid #444" : "1px solid #ddd",
    }}
  >
    {/* Brand */}
    <div>
      <Link className="navbar-brand fw-bold" to="/dashboard" style={{ fontSize: "1.3rem" }}>
        Navbar
      </Link>
    </div>

    {/* Right side items */}
    <div className="d-flex align-items-center gap-3 ms-auto">
      {/* Logged user info */}
      {loggedUser && (
        <>
          <i
            className="fw-semibold"
            style={{
              color: theme === "dark" ? "#f8f9fa" : "#212529",
              fontSize: "1rem",
            }}
          >
            {loggedUser.name}
          </i>
          <button
            onClick={() => logout()}
            className="btn btn-sm btn-outline-danger"
            style={{ borderRadius: "20px" }}
          >
            Logout
          </button>
        </>
      )}

      {/* Theme toggle button */}
      <button
        onClick={() => toggleTheme()}
        className="btn btn-sm"
        style={{
          borderRadius: "50%",
          backgroundColor: theme === "light" ? "#f1f3f5" : "#343a40",
          color: theme === "light" ? "#212529" : "#f8f9fa",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        {theme === "light" ? (
          <i className="fa-solid fa-sun"></i>
        ) : (
          <i className="fa-solid fa-moon"></i>
        )}
      </button>
    </div>
  </nav>
</div>

    </>
  )
}

export default Navbar