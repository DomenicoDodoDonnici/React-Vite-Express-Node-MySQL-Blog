import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?category=art">
            <h6>ARTE</h6>
          </Link>
          <Link className="link" to="/?category=science">
            <h6>SCIENZA</h6>
          </Link>
          <Link className="link" to="/?category=technology">
            <h6>TECNOLOGIA</h6>
          </Link>
          <Link className="link" to="/?category=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to="/?category=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to="/?category=food">
            <h6>CIBO</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              <span>Login</span>
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Crea
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
