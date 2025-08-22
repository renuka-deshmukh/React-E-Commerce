import React, { useState, useContext } from "react";
import Card from "../components/Card.jsx";
import { CreateTheme } from "../Context/ThemeProvider";

const Dashboard = ({ products }) => {
  const [productsState, setProductsState] = useState(products);
  const { theme } = useContext(CreateTheme);

  // Unique categories
  const categories = [...new Set(products.map((p) => p.category))];

  // Pastel color palette for Blinkit-style UI
  const colors = ["#FFE5B4", "#C7E9B0", "#B5EAEA", "#FFB5E8", "#D5AAFF", "#FFD6D6"];

  return (
    <div
      className={`min-vh-100 ${
        theme === "light" ? "bg-light text-dark" : "bg-dark text-light"
      }`}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Hero Section */}
      <div
        className={`text-center py-5 shadow-sm ${
          theme === "light" ? "bg-white" : "bg-secondary"
        }`}
        style={{
          borderBottom: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <h1 className="fw-bold display-6">Welcome to Grocery Store 🛒</h1>
        <p className="lead text-muted">
          Fresh groceries delivered to your doorstep.
        </p>
      </div>

      {/* Categories */}
      <div className="container my-4">
        <h4 className="fw-semibold mb-3">Shop by Category</h4>
        <div className="d-flex flex-wrap justify-content-start gap-3">
          {categories.map((cat, index) => {
            const bgColor = colors[index % colors.length];
            const icons = ["🥦", "🍎", "🥛", "🍞", "🥩", "🍫"]; // sample icons
            return (
              <span
                key={index}
                className="px-4 py-2 fs-6 fw-semibold d-flex align-items-center gap-2"
                style={{
                  backgroundColor: bgColor,
                  color: "#333",
                  borderRadius: "30px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.05)";
                  e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
                }}
                onClick={() =>
                  setProductsState(
                    cat === "All"
                      ? products
                      : products.filter((p) => p.category === cat)
                  )
                }
              >
                <span style={{ fontSize: "18px" }}>
                  {icons[index % icons.length]}
                </span>
                {cat}
              </span>
            );
          })}

          {/* Reset Filter */}
          <span
            className="px-4 py-2 fs-6 fw-semibold"
            style={{
              backgroundColor: "#FFD6D6",
              color: "#333",
              borderRadius: "30px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
            }}
            onClick={() => setProductsState(products)}
          >
            All
          </span>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mb-5">
        <h4 className="fw-semibold mb-3">Popular Products</h4>
        <div className="row g-4">
          {productsState.map((product, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3">
              <div
                className="p-3 rounded shadow-sm h-100"
                style={{
                  backgroundColor: theme === "light" ? "#fff" : "#343a40",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 16px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 6px rgba(0,0,0,0.1)";
                }}
              >
                <Card product={product} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
