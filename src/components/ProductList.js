import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InvalidRequest from "./InvalidRequest";
import Empty from "./Empty";
import Spinner from "./Spinner";
import ProductSingle from "./ProductSingle";
import {
  get_product_success,
  get_product_failed,
} from "../redux/actions/productActions";
const ProductList = () => {
  const dispatch = useDispatch();
  const { error, loading, products } = useSelector(
    (state) => state.productReducers
  );

  useEffect(() => {
    const productList = async () => {
      let products = await fetch(`https://fakestoreapi.com/products`);
      return products.status === 200
        ? dispatch(get_product_success(await products.json()))
        : dispatch(get_product_failed(true));
    };
    productList();
  }, []);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : error ? (
        <InvalidRequest />
      ) : products.length ? (
        <ProductSingle products={products} />
      ) : (
        <Empty />
      )}
    </>
  );
};

export default ProductList;
