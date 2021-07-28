import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const header = (props) => (
  <React.Fragment>
    <header className="header">
      <section className="banner">
        <Link className="nav-items" to="/">
          <img
            className="banner-image"
            src="/images/default-meta-image.png"
            alt="banner"
          />
        </Link>
        <span>Categories</span>
        <input
          type="text"
          className="search-bar"
          name="searh"
          placeholder="search for anything"
        />
      </section>
      <nav className="nav">
        <ul className="nav-list">
          {/* <Link className="nav-items" to="/">
            Home
          </Link>
          <Link className="nav-items" to="/add">
            AddProduct
          </Link> */}
          <Link className="nav-items" to="/cart">
            <span className="material-icons-outlined">shopping_cart</span>
          </Link>
          <Link className="nav-items loginbtn" to="/login">
            Login
          </Link>
          <li className="nav-items signupbtn">Signup</li>
        </ul>
      </nav>
    </header>
  </React.Fragment>
);

export default header;
