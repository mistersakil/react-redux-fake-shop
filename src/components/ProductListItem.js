import React from "react";
import { Link } from "react-router-dom";
import { sub_string_func, slug_func, uc_first_func } from "../settings";
const ProductListItem = ({ products }) => {
  const productsMapping = products.map((product) => {
    const { id, title, price, description, category, image } = product;
    const productDetailsUrl = `/product/${id}`;
    const productsByCategoryUrl = `/products/category/${slug_func(category)}`;
    return (
      <div className="col" key={id}>
        <div className="card h-100 p-3">
          <Link to={productDetailsUrl}>
            <img
              src={image}
              className="card-img-top"
              alt="..."
              height="250vh"
            />
          </Link>
          <div className="card-body">
            <Link
              title={title}
              to={productDetailsUrl}
              style={{ textDecoration: "none", color: "#00a" }}
            >
              <h4 className="card-title" title={title}>
                {title}
              </h4>
            </Link>

            <Link
              title={uc_first_func(category)}
              to={productsByCategoryUrl}
              style={{ textDecoration: "none", color: "#888" }}
            >
              <h6>
                On <em>{uc_first_func(category)}</em>
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
