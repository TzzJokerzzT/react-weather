import React, { Component } from "react";
import "../App.css";

//! Nieve
import Snowfall from "react-snowfall";

export default class Clima extends Component {
  render() {
    return (
      <div>
        {this.props.data?.current?.condition?.text === "snow" ||
        this.props.data?.current?.condition?.text === "Fog" ||
        this.props.data?.current?.condition?.text === "Mist" ? (
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              zIndex: "-1",
            }}
          >
            <Snowfall snowflakeCount={500} />
          </div>
        ) : null}

        {this.props.data?.current?.condition?.text === "Light rain" ||
        this.props.data?.current?.condition?.text === "Patchy rain possible" ? (
          <div>
            <section className="rain"></section>
          </div>
        ) : null}

        {this.props.data?.current?.condition?.text === "Overcast" ||
        this.props.data?.current?.condition?.text === "Partly cloudy" ||
        this.props.data?.current?.condition?.text === "Patchy rain possible" ? (
          <div>
            <div className="cloud one">
              <span className="cloud-body"></span>
              <span className="cloud-top"></span>
              <span className="cloud-puff"></span>
            </div>
            <div className="cloud two">
              <span className="cloud-body"></span>
              <span className="cloud-top"></span>
              <span className="cloud-puff"></span>
            </div>
          </div>
        ) : null}

        {this.props.data?.current?.condition?.text === "Sunny" ? (
          <div>
            <span className="sun-rays"></span>
            <span className="sun"></span>
          </div>
        ) : null}
      </div>
    );
  }
}
