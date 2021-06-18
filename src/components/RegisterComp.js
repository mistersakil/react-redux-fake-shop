import React from "react";
import { Link } from "react-router-dom";
import AuthComp from "./AuthComp";
const RegisterComp = () => {
  return (
    <AuthComp>
      <div className="card text-light bg-secondary mb-3">
        <div className="card-body">
          <h5 className="card-title text-center text-light fs-2 mb-4">
            User Registration Form
          </h5>
          <form>
            <div className="row mb-3">
              <label htmlFor="name" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  autoFocus
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="email" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="email" />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-10 offset-sm-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck1"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="gridCheck1">
                    I agree all terms and conditions
                  </label>
                </div>
              </div>
            </div>
            <div className="row justify-content-center text-center">
              <div className="col-10">
                <button type="submit" className="btn btn-primary btn-lg">
                  Register
                </button>
                <p className="mt-5">
                  Already registered? Please &nbsp;
                  <Link to="/login" className="btn btn-outline-light ">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </AuthComp>
  );
};

export default RegisterComp;
