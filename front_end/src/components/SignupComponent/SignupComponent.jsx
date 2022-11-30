import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import styles from './SignupComponent.module.scss';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SchoolIcon from '@mui/icons-material/School';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import logo from '../../img/logo.png';
import Footer from '../FooterComponent/FooterComponent';
import PhoneInput from 'react-phone-input-2';
import { register } from '../../services/register';
import { useNavigate } from 'react-router-dom';




export default function SignUp() {
  const theme = useTheme();
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const registerPayload = {
                name: data.get('firstName').toString(),
                surname: data.get('lastName').toString(),
                email: data.get('email').toString(),
                password: data.get('password').toString(),
                type: typeValue === 0 ? 'student' : 'professor',
                phone: phoneValue
            };
            await register(registerPayload);
            navigate('/login');
        }
        catch (error) {
            console.log(error);
        }
    };
    const [typeValue, setValue] = React.useState(0);
    const [phoneValue, phoneSetValue] = React.useState();
    const setPhoneValue = (event) => {
        phoneSetValue(event);
    };
    return (<>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Grid xs={12} className={styles.logo}>
              <a href="../"><img src={logo} alt="Logo"/></a>
            </Grid>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            </Avatar>
            <Typography component="h1" variant="h5">
              Registrate
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Box sx={{ width: 500 }}>
                <BottomNavigation showLabels value={typeValue} onChange={(event, newValue) => {
            console.log(newValue);
            setValue(newValue);
        }}>
                  <BottomNavigationAction label="Soy Alumno" icon={<SchoolIcon />}/>
                  <BottomNavigationAction label="Soy Profesor" icon={<HistoryEduIcon />}/>
                </BottomNavigation>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField className={styles.box} autoComplete="given-name" name="firstName" required fullWidth id="firstName" label="Nombre" autoFocus/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField className={styles.box} required fullWidth id="lastName" label="Apellido" name="lastName" autoComplete="family-name"/>
                </Grid>
                <Grid item xs={12}>
                  <PhoneInput placeholder="" specialLabel="Numero de telefono" country={'ar'} onChange={setPhoneValue}/>
                </Grid>
                <Grid item xs={12}>
                  <TextField className={styles.box} required fullWidth id="email" label="Mail" name="email" autoComplete="email"/>
                </Grid>
                <Grid item xs={12}>
                  <TextField className={styles.box} required fullWidth name="password" label="Contraseña" type="password" id="password" autoComplete="new-password"/>
                </Grid>
              </Grid>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Registrate
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Ya tenés una cuenta? Conectate
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Footer></Footer>
        </Container>
      </ThemeProvider>
    </>);
}
