import React from "react";
import productsData from "./data/ProductsData";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  // const [product,setproduct] = useState()
  // setproduct(productsData)
  const heroProducts = productsData.filter((p) => p.tag === "hero-product");
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const feature = productsData.filter((p) => p.tag === "featured-product");
  const settings1 = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    cssEase: "ease-in-out",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  console.log(productsData);

  return (
    <div className="container-fluid">
      <section className="banner-section bg-dark mb-3">
        <div className="container-fluid">
          <Slider {...settings}>
            {heroProducts.map((prods) => (
              <div key={prods.id}>
                <div className="row align-items-center">
                  {/* Left Side: Text */}
                  <div className="col-lg-6 text-light">
                    {/* <h1>{prods.brand}</h1> */}
                    <h1>{prods.title}</h1>
                    <h2 className="fw-bold">{prods.tagline}</h2>
                    <p className="fs-5 mb-2">
                      ₹{prods.finalPrice}{" "}
                      <span className="text-decoration-line-through text-muted">
                        ₹{prods.originalPrice}
                      </span>
                    </p>
                    <button className="btn btn-danger">Shop Now</button>
                  </div>

                  {/* Right Side: Image */}
                  <div className="col-lg-6 text-center">
                    <img
                      src={prods.heroImage}
                      alt={prods.title}
                      className="img-fluid"
                      style={{ maxHeight: "400px" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <div
        className="container-fluid py-3 bg-dark mb-3"
        style={{ overflow: "hidden" }}
      >
        <h5 className="mb-3 text-white">Featured Products</h5>
        {feature.length > 0 ? (
          <Slider {...settings1}>
            {feature.map((p) => (
              <div key={p.id}>
                <div className="products-card bg-dark">
                  <p className="text-white  ">{p.title}</p>
                  <img src={p.images[0]} alt={p.name} className="img-fluid" />
                  <div className="cards-body">
                    <div>
                      <span
                        className="text-white"
                        style={{ fontWeight: "bold", fontSize: "16px" }}
                      >
                        ${p.finalPrice}
                      </span>
                      <span
                        className="text-white"
                        style={{
                          textDecoration: "line-through",
                          marginLeft: "8px",
                          color: "gray",
                          fontSize: "14px",
                        }}
                      >
                        ${p.originalPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p>No featured products found</p>
        )}
      </div>

      <div className="row row-cols-1 row-cols-md-4 g-4 mb-1">
        {productsData &&
          productsData.map((items) => (
            // <div className="row" style={{ display: "flex" }}>
            <div className="col-3">
              <Link to={`/Productdetail/${items.id}`} key={items.id}>
                <div
                  className="card"
                  style={{ width: "18rem", backgroundColor: "black" }}
                >
                  <img src={items.images[0]} className="w-75" alt="..." />

                  <div className="card-body">
                    <p className="text-danger">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </p>
                    <h5 className="card-title text-light">{items.title}</h5>
                    <p className="card-text text-light">{items.info}</p>
                    <h5 className="text-light">
                      {items.finalPrice}
                      <del className="ms-3 ">{items.originalPrice}</del>
                    </h5>
                    <button className="btn btn-danger">Add to cart</button>
                  </div>
                </div>
              </Link>
            </div>
            // </div>
          ))}
      </div>
      <div className="row d-flex justify-content-around bg-dark text-light text-start ">
        <div className="col-4">
          <h2>Tech-Shop</h2>
          <p>
            Subscribe to our Email alerts to receive early discount offers,and
            new products info
          </p>
          <input type="text" name="Email" placeholder="Email Address*" />
          <div>
            <button className="btn btn-danger">Subscribe</button>
          </div>
        </div>
        <div className="col-2">
          <h4>Help</h4>
          <p>FAQs</p>
          <p>Track Order</p>
          <p>Cancel Order</p>
          <p>Return Order</p>
          <p>Warranty Info</p>
        </div>
        <div className="col-3">
          <h4>Policies</h4>
          <p>Return policy</p>
          <p>Security</p>
          <p>Sitemap</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="col-3">
          <h4>Company</h4>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Service Centers</p>
          <p>Careers</p>
          <p>Affiliates</p>
        </div>
        <hr />
        <div className=" d-flex justify-content-between">
          <p>2025|All Rights Reserved</p>
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  );
};

export default Home;
