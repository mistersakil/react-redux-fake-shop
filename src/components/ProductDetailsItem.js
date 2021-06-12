import React from "react";
import { Link } from "react-router-dom";
const ProductDetailsItem = ({
  product: { category, description, id, image, price, title },
}) => {
  return (
    <div className="card mb-3 mt-4">
      <div className="row g-0">
        <div className="col-md-5">
          <img src={image} alt="..." style={{ width: "50%" }} />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <h6 className="mb-3">
              <small className="text-muted">
                on <Link to="/">{category}</Link>
              </small>
            </h6>
            <p className="card-text">{description}</p>
            <h4 className="card-text">
              <small className="text-muted">Price ${price}</small>
            </h4>
            <button type="button" className="btn btn-primary" data-id={id}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsItem;
