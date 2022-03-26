import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  let location = useLocation();

  return (
    <div style={{ height: "40%" }}>
      <nav
        class="navbar navbar-light bg-light"
        style={{ width: "100%", height: "30%", margin: "auto" }}
      >
        <a class="navbar-brand" href="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj5_f2Q7C1zVUYZyPwu36s-iT00AjEMFkcIed8a74fDoZzEaN4McsQxhscPDit2j9HHJo&usqp=CAU"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
          />
          <div
            class="d-inline-block"
            style={{
              paddingRight: "10px",
              fontStyle: "bold",
              marginLeft: "5px",
            }}
          >
            College Find
          </div>
        </a>

        <Link
          className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          aria-current="page"
          to="/"
        >
          Home
        </Link>

        <Link
          className={`nav-link ${
            location.pathname === "/about" ? "active" : ""
          }`}
          to="/search"
        >
          Search
        </Link>

        <img
          src="https://aishe.gov.in/aishe/images/logo-3.png"
          width="230px"
          height="90"
          class="d-inline-block align-top ml-5"
          style={{ marginLeft: "610px" }}
          alt=""
        />
        <img
          src="https://aishe.gov.in/aishe/images/swach-india.png"
          class="mob-767-hide"
          width="125px"
        alt='swachbharat abhiyan'/>

        <img src="https://aishe.gov.in/aishe/images/logo-d.png" width="223px" alt='aishelogo' />
      </nav>
    </div>
  );
};

export default Nav;
