import React, { Component } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Card from "./components/Card";
class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        nome: "rodrigo",
        data: "04 fev 2020",
        texto: "teste comentario do post",
        img: "https://i.picsum.photos/id/935/200/200.jpg",
        comentarios: [
          {
            id: 1,
            nome: "user 1",
            comentario:
              "comentario teste do usuario adasdasdd asdadasdsad adasdasdsad asdadasdsd  adasdasdasdasdasdasdasdadadasd asdsdadasd",
            img: "https://i.picsum.photos/id/235/200/200.jpg"
          },
          {
            id: 2,
            nome: "user 3",
            comentario: "asdadasdsd  adasdasdasdasdasdasdasdadadasd asdsdadasd",
            img: "https://i.picsum.photos/id/238/200/200.jpg"
          }
        ]
      },
      {
        id: 2,
        nome: "denise",
        data: "05 fev 2020",
        texto: "comentario de teste",
        img: "https://i.picsum.photos/id/1075/200/200.jpg"
      },
      {
        id: 3,
        nome: "teste",
        data: "06 fev 2020",
        texto: "asfdaf afafsdf sdfsdfsdf afdsf",
        img: "https://i.picsum.photos/id/15/200/200.jpg"
      }
    ]
  };
  render() {
    return (
      <div>
        <Header />
        <div className="container-conteudo">
          {this.state.posts.map(item => (
            <Card key={item.id} post={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
