// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <NavLink to="/" className="nav-link">
            FarmQuest
          </NavLink>
        </div>
        <div className="nav-links">
          <NavLink
            to="/search"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Search Farmer
          </NavLink>
          <NavLink
            to="/signin"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Sign In
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
