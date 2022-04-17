import React, { useContext } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/authContext";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

const Header = (props) => {

 const [auth, setAuth] = useAuth();

 const logout =(e)=> {

  if(e.target.textContent === 'Wyloguj się') {
    setAuth(false);
    JSON.parse(window.localStorage.setItem('token-data', false))
     }
}

  return (
    <nav className="navbar container-fluid sticky-top">
      <img src="/logo.png" className="navbar-brand me-auto" alt="" />
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
};

export default Header;