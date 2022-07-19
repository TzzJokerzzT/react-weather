import React, { Component } from "react";
import styled from "styled-components";

const GridTest = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "header header header "
    "Buscador Buscador Buscador"
    "Resultado Resultado Resultado";
`;

export default class Layout extends Component {
  render() {
    return <GridTest>{this.props.children}</GridTest>;
  }
}
