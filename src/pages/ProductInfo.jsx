import React, { useEffect, useState, useContext } from "react";
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import products from "../Data.js";
import { CreateTheme } from "../Context/ThemeProvider.jsx";
import { CartContext } from "../Context/cartContext.jsx";
import { FaShoppingCart, FaHeart, FaStar, FaRegCommentDots } from "react-icons/fa";
import { AuthContext } from "../Context/AuthProvider.jsx";

const ProductInfo = () => {
  const [product, setProduct] = useState(null);
  const { ID } = useParams();
   const navigate = useNavigate()

  const { theme } = useContext(CreateTheme);
  const { dispatch } = useContext(CartContext);

  async function fetchData() {
    const index = products.findIndex((p) => p.id == ID);
    if (index === -1) {
      console.log("product not found");
    } else {
      setProduct(products[index]);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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
      className={`container my-5 p-4 rounded-4 shadow-lg ${
        theme === "light" ? "bg-white text-dark" : "bg-dark text-light"
      }`}
      style={{ minHeight: "80vh" }}
    >
      {product ? (
        <div className="row align-items-center g-4">
          {/* Left - Product Image */}
          <div className="col-md-5 text-center">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded-4 shadow"
              style={{ maxHeight: "420px", objectFit: "cover" }}
            />
          </div>

          {/* Right - Product Info */}
          <div className="col-md-7">
            <h1 className="fw-bold mb-2">{product.name}</h1>
            <p className="text-muted">{product.category}</p>
            <p className="fs-5">{product.description}</p>

            {/* Price Section */}
            <div className="mb-3">
              <span className="fs-3 fw-bold text-success">
                ₹{product.discountedPrice}
              </span>
              {product.discount > 0 && (
                <>
                  <span className="text-decoration-line-through text-muted ms-2 fs-5">
                    ₹{product.price}
                  </span>
                  <span className="badge bg-danger ms-2 p-2">
                    -{product.discount}%
                  </span>
                </>
              )}
            </div>

            {/* Rating */}
            <div className="mb-3">
              <span className="badge bg-warning text-dark fs-6 p-2">
                <FaStar className="me-1" />
                {product.rating}/5
              </span>
            </div>

            {/* Buttons */}
            <div className="d-flex gap-3 mt-4">
              <button
                onClick={handleAddToCart}
                className="btn btn-success btn-lg d-flex align-items-center gap-2"
              >
                <FaShoppingCart /> Add to Cart
              </button>
              <button className="btn btn-outline-danger btn-lg d-flex align-items-center gap-2">
                <FaHeart /> Wishlist
              </button>
            </div>

            {/* Links */}
            <div className="mt-4 d-flex gap-3">
              <Link
                to="likes"
                className="btn btn-outline-primary d-flex align-items-center gap-2"
              >
                <FaHeart /> Likes
              </Link>
              <Link
                to="reviews"
                className="btn btn-outline-secondary d-flex align-items-center gap-2"
              >
                <FaRegCommentDots /> Reviews
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center mt-5">
          <div className="spinner-border text-primary" role="status"></div>
          <p className="mt-3">Loading product details...</p>
        </div>
      )}

      {/* Nested Routes */}
      <Routes>
        <Route path="likes" element={<Likes />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </div>
  );

  function Likes() {
    return (
      <div className="mt-4">
        <h4>❤️ Liked by 120+ users</h4>
        <p className="text-muted">People love this product for its quality!</p>
      </div>
    );
  }

  function Reviews() {
    return (
      <div className="mt-4">
        <h4 className="mb-3">Customer Reviews</h4>
        <div className="p-3 border rounded mb-2 shadow-sm">
          <strong>User123</strong>
          <p className="mb-1">⭐️⭐️⭐️⭐️</p>
          <p>Great product, totally worth the price!</p>
        </div>
        <div className="p-3 border rounded shadow-sm">
          <strong>Neha P.</strong>
          <p className="mb-1">⭐️⭐️⭐️⭐️⭐️</p>
          <p>Super fast delivery, Blinkit style! 😍</p>
        </div>
      </div>
    );
  }
};

export default ProductInfo;
