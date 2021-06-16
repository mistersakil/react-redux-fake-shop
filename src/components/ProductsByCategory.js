import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { slug_func, uc_first_func } from "../settings";
import banner from "../images/grey-banner.jpg";
import Spinner from "./Spinner";
import InvalidRequest from "./InvalidRequest";
import ProductListItem from "./ProductListItem";
import Empty from "./Empty";
import {
  productsByCategoryGetRequest,
  productsByCategoryGetSuccess,
  productsByCategoryGetFailed,
} from "../redux/actions/productsByCategoryActions";
import { useDispatch, useSelector } from "react-redux";
const ProductsByCategory = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const { loading, error, products } = useSelector(
    (state) => state.productsByCategoryReducers
  );
  const getProductByCategoryFromApi = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${slug_func(
        categoryName,
        false
      )}`
    );

    return response.status === 200
      ? dispatch(productsByCategoryGetSuccess(await response.json()))
      : dispatch(productsByCategoryGetFailed());
  };
  useEffect(() => {
    getProductByCategoryFromApi();
    return () => {
      dispatch(productsByCategoryGetRequest());
    };
  }, [categoryName]);
  return (
    <div className="row">
      <div className="card">
        <img
          src={banner}
          className="card-img"
          alt="category_banner"
          height="100"
        />
        <div className="card-img-overlay">
          <h3 className="card-title text-light text-center mt-4">
            {uc_first_func(slug_func(categoryName, false))}
          </h3>
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : error ? (
        <InvalidRequest />
      ) : products.length ? (
        <ProductListItem products={products} />
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default ProductsByCategory;
