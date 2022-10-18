import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/" className="site-identity">
        <img src={logo} alt="Logo" />
      </Link>
      <div className="menu">
        <Link to="/">Shop</Link>
        <Link to="/orders">Order Review</Link>
        <Link to="/inventory">Manage Inventory</Link>
        <Link to="/about">About</Link>
        {user?.uid ? (
          <Link onClick={() => logout()}>Logout</Link>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
        {/* {user && user?.uid} */}
      </div>
    </nav>
  );
};

export default Header;
