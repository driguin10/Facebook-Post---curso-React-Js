import React, { Component } from "react";
import TechItem from "./TechIten";
class TechList extends Component {
  state = {
    newTech: "",
    techs: []
  };
  handlerInputChande = e => {
    this.setState({ newTech: e.target.value });
  };

  handlerSubmit = e => {
    e.preventDefault();
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });
  };

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t != tech) });
  };

  //executa assim que componente aparece na tela
  componentDidMount() {
    const techs = localStorage.getItem("thecs");
    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }
  //quando componente deixa de existir
  componentWillUnmount() {}
  //executa quando houver alterações nas props ou estado
  componentDidUpdate(_, prevState) {
    if (prevState.techs != this.state.techs) {
      localStorage.setItem("thecs", JSON.stringify(this.state.techs));
    }
  }

  render() {
    return (
      <form onSubmit={this.handlerSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          ))}
        </ul>
        <input
          type="text"
          value={this.state.newTech}
          onChange={this.handlerInputChande}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default TechList;
