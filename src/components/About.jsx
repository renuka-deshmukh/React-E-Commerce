import React, { useContext } from "react";
import { ShoppingBag, Truck, ShieldCheck, Star } from "lucide-react";
import { CreateTheme } from "../Context/ThemeProvider";

const About = () => {
      const { theme, toggleTheme } = useContext(CreateTheme)
  return (
    <div
  className={`container-fluid py-5 ${
    theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"
  }`}
>

      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5 text-success">About Us</h1>
        <p className="lead text-muted">
          Delivering happiness at your doorstep — fast, fresh & affordable! 🚀
        </p>
      </div>

      {/* About Section */}
      <div className="row align-items-center g-5">
        {/* Left Side Image */}
        <div className="col-md-6 text-center">
          <img
            src="https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg"
            alt="About Us"
            className="img-fluid rounded-4 shadow"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>

        {/* Right Side Content */}
        <div className="col-md-6">
          <h2 className="fw-semibold mb-3">Who We Are 💚</h2>
          <p className="fs-5 text-muted">
            We’re your one-stop online store for everything you need — from
            groceries to gadgets. With <b>super-fast delivery</b> and
            <b> pocket-friendly prices</b>, shopping has never been this easy!
          </p>

          {/* Features Grid */}
          <div className="row row-cols-2 g-4 mt-4">
            <div className="col">
              <div className="p-3 bg-light rounded-4 shadow-sm text-center">
                <ShoppingBag size={32} className="text-success mb-2" />
                <h5>Wide Range</h5>
                <p className="small text-muted">Thousands of products to choose from</p>
              </div>
            </div>
            <div className="col">
              <div className="p-3 bg-light rounded-4 shadow-sm text-center">
                <Truck size={32} className="text-success mb-2" />
                <h5>Fast Delivery</h5>
                <p className="small text-muted">Get orders delivered in minutes</p>
              </div>
            </div>
            <div className="col">
              <div className="p-3 bg-light rounded-4 shadow-sm text-center">
                <ShieldCheck size={32} className="text-success mb-2" />
                <h5>Secure Payment</h5>
                <p className="small text-muted">Your transactions are always safe</p>
              </div>
            </div>
            <div className="col">
              <div className="p-3 bg-light rounded-4 shadow-sm text-center">
                <Star size={32} className="text-success mb-2" />
                <h5>Top Rated</h5>
                <p className="small text-muted">Trusted by thousands of customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Section */}
      <div className="text-center mt-5">
        <h4 className="fw-bold">Thank you for shopping with us! 🎉</h4>
        <p className="text-muted">
          We promise to keep making your shopping experience <b>faster, better, and more fun</b>.
        </p>
      </div>
    </div>
  );
};

export default About;
