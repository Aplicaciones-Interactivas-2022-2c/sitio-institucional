import FormComponent from "../FormComponent/FormComponent";
import NavbarComponent from "../NavbarComponent/NavbarComponent.lazy";
import FooterComponent from "../FooterComponent/FooterComponent.lazy";
import styles from "./HomeComponent.module.scss";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { getType, isLoggedIn } from "../../hooks/authhook";


function Home() {
    const GuestorAlumnoView = () => {
        return (<><h2 className={styles.title}>
      Busca la clase que quieras
    </h2>
    <FormComponent></FormComponent>
    </>);
    };
    const ProfessorView = () => {
        return (<>
      <h1 className={styles.title}>Dicta clases</h1>
      <h3 className={styles.subtitle}>- Puedes dictar tus clases con la modalidad que mas te interese.</h3>
    </>);
    };
    if (getType() == 'student') {
        var tiers = [
            {
                title: '1. Usa el Buscador',
                description: [
                    'Utiliza el buscador, con el vas a poder encontrar las clases que se adhieran a lo que quieres.'
                ],
            },
            {
                title: '2. Manda la solicitud de inscripción',
                description: [
                    'Una vez tengas la clase que quieres, solo tienes que mandar la solicitud de inscripción.'
                ]
            },
        ];
    }
    else if (getType() == 'professor') {
        var tiers = [
            {
                title: '1. Publica tu clase',
                description: [
                    'Clickea en Publicar Clase y completa el formulario con los datos de tu clase.'
                ],
            },
            {
                title: '2. Completa los datos',
                description: [
                    'Rellena el formulario con los datos requeridos y listo, asi de facil'
                ]
            }
        ];
    }
    else {
        var tiers = [
            {
                title: '1. Registrate o Logueate',
                description: [
                    'Para poder publicar o contratar una clase, primero tenes que registrarte o loguearte.'
                ],
            }];}

    return (<div>
      <NavbarComponent></NavbarComponent> 
      
      
      {(!isLoggedIn() || getType() == 'student') && GuestorAlumnoView()}
      {(getType() == 'professor') && ProfessorView()}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 6, pb: 4 }}>
        <Typography component="h3" variant="h4" align="center" color="text.primary" gutterBottom sx={{ mt: 3 }}>
            ¿Cómo funciona?
        </Typography>

      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
        <Grid item key={tier.title} xs={12}>
              <Card>
                <CardHeader title={tier.title} titleTypographyProps={{ align: 'center' }} action={tier.title === 'Pro' ? <StarIcon /> : null} subheaderTypographyProps={{
                align: 'center',
            }} sx={{
                backgroundColor: (theme) => theme.palette.mode === 'light'
                    ? theme.palette.grey[200]
                    : theme.palette.grey[700],
            }}/>
                <CardContent>
                    {tier.description.map((line) => (<Typography variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>))}
                </CardContent>
              </Card>
            </Grid>))}
        </Grid>
      </Container>
      <br></br>
      <FooterComponent></FooterComponent>
      </div>);
}
export default Home;
