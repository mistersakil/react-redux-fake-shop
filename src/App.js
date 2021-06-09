import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import NotFound from "./components/NotFound";
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <ProductList />
        </Route>
        <Route path="/product/:id" exact>
          <ProductDetails />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
