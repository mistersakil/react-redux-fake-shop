import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import ProductDetailsItem from "./ProductDetailsItem";
import NotFound from "./NotFound";
import Empty from "./Empty";
import {
  get_product_details_request,
  get_product_details_success,
  get_product_details_failed,
} from "../redux/actions/productActions";

const ProductDetails = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, error, product } = useSelector(
    (state) => state.productDetailsReducers
  );
  const get_product_details_from_api = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${parseInt(id)}`
    );
    return response.status === 200
      ? dispatch(get_product_details_success(await response.json()))
      : dispatch(get_product_details_failed());
  };

  useEffect(() => {
    dispatch(get_product_details_request());
    get_product_details_from_api();
    return () => {
      dispatch(get_product_details_request());
    };
  }, [id]);
  console.log(product);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : error ? (
        <NotFound />
      ) : product ? (
        <ProductDetailsItem product={product} />
      ) : (
        <Empty />
      )}
    </>
  );
};

export default ProductDetails;
