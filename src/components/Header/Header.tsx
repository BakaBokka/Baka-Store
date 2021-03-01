import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header(props: { numItems: number; total: number }) {
  return (
    <header className="Header row">
      <Link to="/" className="text-decoration-none">
        <span className="Header__logo text-dark ">
          Baka.Store
        </span>
      </Link>
      <Link to="/cart" className="text-decoration-none">
        <span className="Header__cart-link">
          <i className="Header__icon fa fa-shopping-cart"></i>
          {props.numItems} items (${props.total})
        </span>
      </Link>
    </header>
  );
}

export default Header;
