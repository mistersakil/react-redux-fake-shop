import React from "react";
import { Link } from "react-router-dom";
import { sub_string_func } from "../settings";
const ProductListItem = ({ products }) => {
  const productsMapping = products.map((product) => {
    const { id, title, price, description, category, image } = product;
    return (
      <div className="col" key={id}>
        <div className="card h-100 p-3">
          <img src={image} className="card-img-top" alt="..." height="250vh" />
          <div className="card-body">
            <Link
              to={`/product/${id}`}
              style={{ textDecoration: "none", color: "#00a" }}
            >
              <h4 className="card-title" title={title}>
                {title}
              </h4>
            </Link>

            <Link
              to={`/product/${id}`}
              style={{ textDecoration: "none", color: "#888" }}
            >
              <h6>
                On <em>{category}</em>
              </h6>
            </Link>
            <p className="card-text">
              {sub_string_func({ str: description, length: title.length })}
            </p>
          </div>
          <div className="card-footer">
            <button type="button" className="btn btn-primary">
              Add to Cart
            </button>
            <small className="text-muted" style={{ float: "right" }}>
              <button type="button" className="btn btn-secondary">
                Price ${price}
              </button>
            </small>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="row row-cols-1 row-cols-md-4 g-4 p-3">
        {productsMapping}
      </div>
    </>
  );
};

export default ProductListItem;
