import React from "react";

const Footer = () => {
  return (
    <div className="text-center bg-secondary text-light mt-5">
      <div className="card-body">
        <h5 className="card-title fs-3 mt-3">React Redux Fake Shop</h5>
        <p className="card-text">
          This is a practice project build on ReactJS, Redux, Bootstrap
        </p>
        <a
          href="https://www.facebook.com/profile.php?id=100009235375117"
          target="_blank"
          className="btn btn-primary"
          rel="noreferrer"
        >
          Contact us
        </a>
      </div>
      <div className="card-footer text-light">
        Copyright &copy; {new Date().getFullYear()}, Octapia
      </div>
    </div>
  );
};

export default Footer;
