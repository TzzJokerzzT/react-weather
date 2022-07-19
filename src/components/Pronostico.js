import React, { Component } from "react";
import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";

export default class Pronostico extends Component {
  state = {
    inicio: 0,
    fin: 4,
  };
  render() {
    let { data } = this.props;
    const info = data.slice(this.state.inicio, this.state.fin);
    return (
      <div>
        <Card sx={{ minWidth: 250, height: 450 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Siguientes horas:
            </Typography>
            <Typography variant="body2" component={"span"}>
              {info.map((item) => (
                <ul key={item.time}>
                  {<li>Hora: {item.time.split(" ")[1]}</li>}
                  {<li>Temp C: {item.temp_c}</li>}
                  <li>Temp F: {item.temp_f}</li>
                </ul>
              ))}
            </Typography>
            <div style={{ display: "flex" }}>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => {
                    this.setState({
                      inicio: this.state.inicio - 4,
                      fin: this.state.fin - 4,
                    });
                  }}
                  disabled={this.state.inicio === 0}
                >
                  Disminuir
                </Button>
              </CardActions>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => {
                    this.setState({
                      inicio: this.state.inicio + 4,
                      fin: this.state.fin + 4,
                    });
                  }}
                  disabled={this.state.fin >= data.length}
                >
                  Aumentar
                </Button>
              </CardActions>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}
