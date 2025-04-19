import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header" onClick={() => navigate(-1)}>
      <button className="back-button">←</button>
      <h1 className="header-title">Home</h1>
    </div>
  );
};

export default Header;
