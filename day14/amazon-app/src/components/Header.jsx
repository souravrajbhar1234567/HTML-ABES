import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header({ searchQuery, setSearchQuery }) {
  return (
    <header className="app-header">
      <div className="brand">
        <Link to="/">Amazon Mock</Link>
      </div>

      <nav className="nav-links">
        <Link to="/about">About Us</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>

      <div className="search-wrap">
        <SearchBar value={searchQuery} onChange={(v) => setSearchQuery(v)} />
      </div>
    </header>
  );
}