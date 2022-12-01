import React from "react";
import NavbarComponent from "../NavbarComponent/NavbarComponent.lazy";
import FooterComponent from "../FooterComponent/FooterComponent.lazy";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { changePassword } from "../../services/register";
import * as qs from "query-string";
export default function ChangePasswordComponent(props) {
  

  //Find the token from the sesion storage 
  const user = JSON.parse(sessionStorage.getItem("usuario"));
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const token = qs.parse(window.location.search).token;
      console.log(token);
      const data = new FormData(event.currentTarget);
      const payload = {
        token: token,
        newPassword: data.get("newPassword").toString(),
      };
      const response = await changePassword(payload);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        ></Box>

        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
          sx={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: 1,
            padding: 1,
            boxShadow: 15,
          }}
        >
          <Typography component="h1" variant="h5">
            Cambiar Contrasena
          </Typography>

          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField required label="Nueva contraseña" name="newPassword" />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Cambiar
          </Button>
        </Box>
      </Container>
      <FooterComponent></FooterComponent>
    </div>
  );
}
