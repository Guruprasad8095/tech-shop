import React from "react";
import Slider from "react-slick";
import productsData from "./data/ProductsData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const FeatureProducts = () => {
    const feature = productsData.filter((p) => p.tag === "featured-product");
    const settings = {
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
    return (
        <div className="container-fluid py-3 bg-dark " style={{ overflow: 'hidden' }}>
            <h5 className="mb-3 text-white">Featured Products</h5>
            {feature.length > 0 ? (
                <Slider {...settings}>
                    {feature.map((p) => (
                        <div key={p.id} >
                            <div className="products-card bg-dark">
                                <p className="text-white  ">{p.title}</p>
                                <img src={p.images[0]} alt={p.name} className="img-fluid" />
                                <div className="cards-body">
                                    <div>
                                        <span className="text-white" style={{ fontWeight: 'bold', fontSize: '16px' }}>
                                            ${p.finalPrice}
                                        </span>
                                        <span
                                            className="text-white"
                                            style={{ textDecoration: 'line-through', marginLeft: '8px', color: 'gray', fontSize: '14px' }}
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
    );
};

export default FeatureProducts;