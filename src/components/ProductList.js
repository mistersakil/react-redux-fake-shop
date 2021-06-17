import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InvalidRequest from "./InvalidRequest";
import Empty from "./Empty";
import Spinner from "./Spinner";
import ProductListItems from "./ProductListItems";
import {
  get_product_success,
  get_product_failed,
  get_product_request,
} from "../redux/actions/productActions";
const ProductList = () => {
  const dispatch = useDispatch();
  const { error, loading, products } = useSelector(
    (state) => state.productReducers
  );
  useEffect(() => {
    dispatch(get_product_request());

    const productList = async () => {
      let products = await fetch(`https://fakestoreapi.com/products`);
      return products.status === 200
        ? dispatch(get_product_success(await products.json()))
        : dispatch(get_product_failed(true));
    };
    productList();
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : error ? (
        <InvalidRequest />
      ) : products.length ? (
        <ProductListItems products={products} />
      ) : (
        <Empty />
      )}
    </>
  );
};

export default ProductList;
