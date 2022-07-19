import React, { Component } from "react";
import "./App.css";

//! Components
import Buscador from "./components/Buscador";
import Layout from "./components/Layout";
import Card from "./components/Card";
import Clima from "./components/Clima";

//! Variables
import api from "./enviroment";

export default class App extends Component {
  state = {
    data: {},
  };

  getData = async (country) => {
    let data = await fetch(`${api.path}${api.key}&q=${country}`);
    data = await data.json();
    return data;
  };

  handlerSearch = async (e) => {
    let datos = await this.getData(e);
    this.setState({ data: datos });
  };

  render() {
    return (
      <Layout>
        <Clima data={this.state.data}></Clima>
        <h1 style={{ gridArea: "header", textAlign: "center" }}>Weather App</h1>
        <Buscador handlerSearch={this.handlerSearch}></Buscador>
        <Card data={this.state.data}></Card>
      </Layout>
    );
  }
}
