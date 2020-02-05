import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/Card.css";
import imgUser from "../assets/iconUser.png";
import Comentario from "./Comentario";

function Card({ post }) {
  console.log(post.comentarios);
  return (
    <div className="card">
      <div className="info-user">
        <img src={post.img} alt="" />
        <div className="nome-data">
          <span id="card_nome_user">{post.nome}</span>
          <span id="card_data_user">{post.data}</span>
        </div>
      </div>
      <div className="conteudo-card-user">
        <div className="texto-card-user">{post.texto}</div>
        <div className="comentarios-card-user">
          {post.comentarios
            ? post.comentarios.map(item => (
                <Comentario key={item.id} coment={item} />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}
export default Card;
