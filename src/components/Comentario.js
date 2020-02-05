import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/Card.css";
import imgUser from "../assets/iconUser.png";
import "../styles/Comentario.css";

function Comentario({ coment }) {
  return (
    <div className="comentario-users">
      <img src={coment.img} alt="" />
      <div className="comentario-content">
        <div className="texto">
          <strong>{coment.nome} </strong>
          {coment.comentario}
        </div>
      </div>
    </div>
  );
}
export default Comentario;
