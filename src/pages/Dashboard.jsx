import React, { useState } from "react";
// import products from '../data.js'
import Navbar from "../components/Navbar.jsx";
import Card from "../components/Card.jsx";

const Dashboard = ({ products }) => {
  const [productsState, setProductsState] = useState(products);
  return (
    <>
    {/* <Navbar/> */}
      <div className="d-flex flex-wrap justify-content-center gap-2 m-3 ">
  {products.map((product, index) => (
    <div key={index}>
      <span
        className="badge text-white px-3 py-2"
        style={{
          backgroundColor: "#40596eff", // Bootstrap secondary
          fontSize: "14px",
          borderRadius: "20px",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
          textTransform: "capitalize",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#495057")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#6c757d")}
      >
        {product.category}
      </span>
    </div>
  ))}
</div>

        
      
      <div className="container">
        <div className="row">
          {productsState.map((product, index) => (
            <div className="col-12 col-md-6 col-lg-3" 
            keys={index}>
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;