import React from "react";
const AuthComp = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-9 col-lg-7">{children}</div>
      </div>
    </div>
  );
};

export default AuthComp;
