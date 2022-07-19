import React, { Component } from "react";
import Button from "@mui/material/Button";

export default class Buscador extends Component {
  state = {
    search: "",
  };
  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };
  render() {
    const { handlerSearch } = this.props;
    const { search } = this.state;
    return (
      <div style={{ gridArea: "Buscador", textAlign: "center" }}>
        <input
          onChange={this.handleChange}
          style={{ height: "80%" }}
          type="text"
        ></input>
        <Button
          variant="contained"
          size="small"
          onClick={() => handlerSearch(search)}
        >
          Buscar
        </Button>
      </div>
    );
  }
}
