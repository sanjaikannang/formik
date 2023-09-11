import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav">
      <Link to="/">Admin</Link>
      <Link to="/bookstore">BookStore</Link>
    </div>
  );
};

export default Navigation;
