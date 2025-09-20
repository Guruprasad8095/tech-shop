import React from "react";
import productsData from "./data/ProductsData";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);
  // console.log("dgfggdf");
  const production = productsData.filter((i) => i.id == id);

  console.log(productsData);

  // console.log(prod);

  return (
    <div className="container ">
      <div className="row ">
        {production.map((items) => (
          <div className="d-flex ">
            <div className="col-6">
              <div>
                <img src={items.images[0]} alt="" className="w-50" />
              </div>
            </div>

            <div className="col-6 text-start">
              <h3>{items.title}</h3>
              <h5>{items.info}</h5>
              <p>{items.ratings} Ratings</p>
              <hr />
              <span className="d-flex ">
                {" "}
                <h2 className="me-3">{items.finalPrice}</h2>{" "}
                <del>{items.originalPrice}</del>
              </span>
              <button className="btn btn-outline-success ">In Stock</button>
              <p>(Incusive of all taxes)</p>
              <hr />
              <h5>Offers and Discounts</h5>
              <button type="button" className="btn btn-dark">
                No Cost EMI on Credit Card
              </button>
              <button type="button" className="btn btn-dark ms-5">
                Pay Later & Avail Cashback
              </button>
              <hr />
              <button className="btn btn-danger w-50">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
