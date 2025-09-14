import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/cartContext.jsx";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider.jsx";


const Card = ({ product }) => {
  const { dispatch } = useContext(CartContext);
  const navigate = useNavigate()

  const { loggedUser } = useContext(AuthContext);

  function handleAddToCart() {
    if (loggedUser) {
      dispatch({ type: "ADD_TO_CART", payload: product });
    } else {
      alert("Please Login..!");
      navigate("/");
    }
  }
  return (

    <div
      className="rounded-4 shadow-sm h-100 d-flex flex-column"
      style={{
        background: "#fff",
        border: "1px solid rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.02)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.08)";
      }}
    >
      {/* Product Image */}
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          height: "180px",
          padding: "10px",
          background: "#f9f9f9",
          borderRadius: "16px 16px 0 0",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            maxHeight: "160px",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Product Info */}
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h6 className="fw-semibold text-dark">{product.name}</h6>
          <p className="text-muted small">{product.description}</p>

          {product.discount > 0 ? (
            <p className="mb-1">
              <span className="text-muted small">
                MRP: <del>₹{product.price}</del>
              </span>
              <br />
              <span className="fw-bold text-success fs-6">
                ₹{product.discountedPrice}
              </span>
              <span className="badge bg-success-subtle text-success ms-2">
                {Math.round(
                  ((product.price - product.discountedPrice) / product.price) * 100
                )}
                % OFF
              </span>
            </p>
          ) : (
            <p className="fw-bold fs-6">₹{product.price}</p>
          )}
        </div>

        {/* Actions */}
        <div className="mt-2">
          <Link
            to={`/dashboard/${product.id}`}
            className="btn btn-outline-primary w-100 mb-2"
            style={{
              borderRadius: "10px",
              fontWeight: "500",
            }}
          >
            View Details
          </Link>
          <button
            onClick={handleAddToCart}
            className="btn w-100"
            style={{
              background: "#17b6a1ff",
              color: "white",
              fontWeight: "500",
              borderRadius: "10px",
            }}
          >
            + Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
