import React, { useContext } from "react";
import { CartContext } from "../Context/cartContext";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);

  const total = state.cart.reduce(
    (acc, item) => acc + item.discountedPrice * item.quantity,
    0
  );

  return (
    <div className="container my-5">
      <h2 className="mb-4 fw-bold">
        🛒 Your Cart <span className="text-muted fs-5">({state.cart.length} items)</span>
      </h2>

      {state.cart.length === 0 ? (
        <div className="text-center mt-5">
          <img
            src="https://cdn-icons-png.flaticon.com/512/102/102661.png"
            alt="Empty cart"
            style={{ width: "150px", marginBottom: "20px" }}
          />
          <h4 className="text-muted">Your cart is empty</h4>
          <p className="text-secondary">Looks like you haven’t added anything yet.</p>
        </div>
      ) : (
        <div className="row">
          {/* Cart Items */}
          <div className="col-lg-8">
            <ul className="list-group mb-4 shadow-sm rounded">
              {state.cart.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex align-items-center gap-3 p-3"
                >
                  {/* ✅ Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />

                  {/* ✅ Product Info */}
                  <div className="flex-grow-1">
                    <h5 className="mb-1">{item.name}</h5>
                    <p className="mb-1 text-success fw-semibold">
                      ₹{item.discountedPrice}{" "}
                      <span className="text-muted small">
                        {item.discount > 0 && (
                          <>
                            <del>₹{item.price}</del> ({item.discount}% off)
                          </>
                        )}
                      </span>
                    </p>

                    {/* ✅ Quantity Controls */}
                    <div className="d-flex align-items-center gap-2">
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() =>
                          dispatch({
                            type: "ADD_TO_CART",
                            payload: item,
                          })
                        }
                      >
                        +
                      </button>
                      <span className="fw-bold">{item.quantity}</span>
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: item.id,
                          })
                        }
                      >
                        -
                      </button>
                    </div>
                  </div>

                  {/* ✅ Remove Button */}
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                    }
                    className="btn btn-outline-danger btn-sm ms-3"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Cart Summary */}
          <div className="col-lg-4">
            <div className="card shadow-sm p-3">
              <h4 className="fw-bold">Order Summary</h4>
              <hr />
              <p className="d-flex justify-content-between">
                <span>Total Items:</span> <span>{state.cart.length}</span>
              </p>
              <p className="d-flex justify-content-between fw-semibold">
                <span>Total Price:</span> <span>₹{total}</span>
              </p>
              <button className="btn btn-success w-100 mt-3">
                <i className="fa-solid fa-bag-shopping me-2"></i> Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
