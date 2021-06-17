import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { slug_func, uc_first_func } from "../settings";
import ProductListItems from "./ProductListItems";
const ProductDetailsItem = ({
  product: { category, description, id, image, price, title },
}) => {
  const { error, loading, products } = useSelector(
    (state) => state.productsByCategoryReducers
  );

  const productsByCategoryUrl = `/products/category/${slug_func(category)}`;
  return (
    <div className="row">
      <div className="col">
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
                    <Link
                      title={uc_first_func(category)}
                      to={productsByCategoryUrl}
                    >
                      {uc_first_func(category)}
                    </Link>
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
      </div>
      {products.length && (
        <div className="col-12">
          <h3 className="text-muted text-center mt-4">
            Similar item's you may like
          </h3>
          <ProductListItems products={products} limit="4" />
        </div>
      )}
    </div>
  );
};

export default ProductDetailsItem;
