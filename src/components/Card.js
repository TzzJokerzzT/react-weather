import React, { Component } from "react";
import Pronostico from "./Pronostico";
import styled from "styled-components";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export default class Card1 extends Component {
  render() {
    const { data } = this.props;
    const forecastday = Object.values(data)[2]?.forecastday[0];
    return (
      <div style={{ gridArea: "Resultado" }}>
        {Object.keys(data).length && !data.error?.code ? (
          <Layout>
            <div style={{ paddingTop: "50px" }}>
              <Card sx={{ minWidth: 250, height: 450 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Resultado:
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {data.location?.country}
                  </Typography>
                  <Typography variant="body2">
                    Ciudad: {data.location?.name}
                  </Typography>
                  <Typography variant="body2">Informacion del clima</Typography>
                  <Typography variant="body2">
                    Hora: {data.location?.localtime.split(" ")[1]}
                  </Typography>
                  <Typography variant="body2">
                    Centigrados: {data.current?.temp_c}°C
                  </Typography>
                  <Typography variant="body2">
                    Farenheit: {data.current?.temp_f}°F
                  </Typography>
                  <Typography variant="body2">
                    <img src={data.current?.condition.icon} alt="Icono"></img>
                  </Typography>
                  <Typography variant="body2">
                    Estado del clima: {data.current?.condition.text}
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div style={{ paddingTop: "50px" }}>
              <Pronostico data={forecastday?.hour}></Pronostico>
            </div>
          </Layout>
        ) : null}
        {data.error?.code ? (
          <Layout>
            <Stack sx={{ width: "50%", paddingTop: "50px" }}>
              <Alert severity="error">No hubo resultado</Alert>
            </Stack>
          </Layout>
        ) : null}
      </div>
    );
  }
}
