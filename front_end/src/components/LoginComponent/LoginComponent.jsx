import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import logo from "../../img/logo.png";
import styles from "./LoginComponent.module.scss";
import Footer from "../FooterComponent/FooterComponent";
import { useState } from "react";
import loginService from "../../services/login";
import { isLoggedIn } from "../../hooks/authhook";
import { Navigate } from "react-router-dom";




export default function SignIn() {
  const theme = useTheme(); 
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login({ email, password });
      window.localStorage.setItem("loggedUser", JSON.stringify(user));
      setUser(user);
      setEmail("");
      setPassword("");
    } catch (e) {
      setErrorMessage("Error - credenciales invalidas.");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };
  const redirect = () => {
    if (user || isLoggedIn()) {
      return <Navigate to="/" />;
    }
  };
  return (
    <>
      {redirect()}
      <div className={styles.logo}>
        <a href="../">
          <img src={logo} alt="Logo" />
        </a>
      </div>

      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            {errorMessage && <p className="error"> {errorMessage} </p>}

            <Box
              component="form"
              onSubmit={handleLogin}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                className={styles.box}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Mail"
                name="email"
                autoComplete="email"
                onChange={(event) => setEmail(event.target.value)}
                autoFocus
              />
              <TextField
                className={styles.box}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contrase??a"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recordar mi contrase??a"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="primary"
              >
                Logueate
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/reset-password" variant="body2">
                    Te olvidaste tu contrase??a?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"No ten??s una cuenta? Registrate"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
            <Footer></Footer>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
