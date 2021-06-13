import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { uc_first_func, slug_func } from "../settings";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import logo from "../images/logo.svg";
import {
  category_get_success,
  category_get_failed,
} from "../redux/actions/categoryActions";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categoryReducers);
  const categoryGetRequestFromApi = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/categories`
    );
    response.status === 200
      ? dispatch(category_get_success(await response.json()))
      : dispatch(category_get_failed());
  };
  useEffect(() => {
    categoryGetRequestFromApi();
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Products
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu">
                {categories.map((category, index) => {
                  return (
                    <li key={index}>
                      <NavLink
                        className="dropdown-item"
                        to={`/category/${slug_func(category)}`}
                      >
                        {uc_first_func(category)}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
