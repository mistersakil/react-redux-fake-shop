import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center">
      <h1 className="text-danger">404: Not Found</h1>
      <Link to="/">
        <button type="button" class="btn btn-secondary">
          Please go back
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
