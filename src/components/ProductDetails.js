import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import ProductDetailsItem from "./ProductDetailsItem";
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

  useEffect(() => {
    dispatch(get_product_details_request());
    const getData = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${parseInt(id)}`
      );
      return response.status === 200
        ? dispatch(get_product_details_success(await response.json()))
        : dispatch(get_product_details_failed());
    };
    getData();
  }, []);
  console.log(product);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Empty />
      ) : product ? (
        <ProductDetailsItem product={product} />
      ) : (
        "nothing found"
      )}
    </>
  );
};

export default ProductDetails;
