import { Switch, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import ProductsByCategory from "./components/ProductsByCategory";
import NotFound from "./components/NotFound";
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <ProductList />
      </Route>
      <Route path="/product/:id" exact>
        <ProductDetails />
      </Route>
      <Route path="/products/category/:categoryName" exact>
        <ProductsByCategory />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};
export default Routes;
