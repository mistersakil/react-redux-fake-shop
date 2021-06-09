import { NavLink, Link } from "react-router-dom";
import logo from "../images/logo.svg";
const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark sticky-top navbar-expand-lg mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          React Redux Fake Shop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link active" aria-current="page" to="/">
              Products
            </NavLink>
            <NavLink className="nav-link" to="/product/1">
              Product Single
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
