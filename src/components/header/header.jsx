import React from "react";
import "./header.css";
import Logo from './logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="GemerSoft Logo" height="40" />
        GemerSoft
      </div>
      <a href="#contact">
        <button className="btn">Bog'lanish</button>
      </a>

      <nav>
        <ul>
          <li>
            <a href="#services">Xizmatlar</a>
          </li>
          <li>
            <a href="#about">Biz haqimizda</a>
          </li>
          <li>
            <a href="#contact">Aloqa</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
