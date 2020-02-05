import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/Header.css";
import imgUser from "../assets/iconUser.png";

class Header extends Component {
  render() {
    return (
      <div className="container-header">
        <div className="logo">
          <a href="#">Facebook</a>
        </div>
        <div className="user">
          <a href="#">Meu perfil</a>
          <img src={imgUser} alt="" />
        </div>
      </div>
    );
  }
}

export default Header;
