import React, { useState, useEffect } from "react";
import "./Header.css";
import { NavLink} from "react-router-dom";
import useAuth from "../hooks/useAuth";


const Header = (props) => {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  const [auth, setAuth] = useAuth();
  const [menuActive, setMenuActive] = useState(false);
  const goTo = props.goTo;

  useEffect(() => {
    const startGoingToTopOfArticle = setTimeout(() => {
      goTo();
    }, 10);
    return () => clearTimeout(startGoingToTopOfArticle);
  });

  const logout = (e) => {
    if (e.target.textContent === "Wyloguj się") {
      setAuth(false);
      JSON.parse(window.localStorage.setItem("token-data", false));
    }
  };

  const menuHandler = () => {
    setMenuActive(!menuActive);
  };

  if (screenSize.dynamicWidth > 768) {
    return (
      <nav className="navbar container-fluid sticky-top">
        <img
          style={{ transform: "scale(1.9)" }}
          src="/logo2.png"
          className="navbar-brand me-auto"
          alt=""
        />
        <NavLink
          style={({ isActive }) => ({ color: !isActive ? "green" : "blue" })}
          to="/"
          className="link-success px-5 text-decoration-none"
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => ({ color: !isActive ? "green" : "blue" })}
          to="training"
          className="link-success px-5 text-decoration-none"
        >
          Trening
        </NavLink>
        <NavLink
          to="/register"
          className="link-success px-5 text-decoration-none"
        >
          Zarejestruj się
        </NavLink>

        {auth ? (
          <NavLink
            onClick={logout}
            to="/"
            className="link-success px-5 text-decoration-none loginBtn"
          >
            Wyloguj się
          </NavLink>
        ) : (
          <NavLink
            to="/login"
            className="link-success px-5 text-decoration-none loginBtn"
          >
            Zaloguj się
          </NavLink>
        )}
      </nav>
    );
  } else {
    return (
    <p>Do zrobienia menu hamburger</p>
    );
  }
};

export default Header;
