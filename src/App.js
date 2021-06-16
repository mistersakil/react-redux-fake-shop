import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";

import Routes from "./Routes";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
