import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import NavbarComponent from "../NavbarComponent/NavbarComponent.lazy";
import FooterComponent from "../FooterComponent/FooterComponent.lazy";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { addClass } from '../../services/class.service';
import { getUserId } from '../../hooks/authhook';



export default function PublishClassComponent() {
    const theme = useTheme();
    const [tipoClase, setClassType] = React.useState('grupal');
    const handleChangeClassType = (event) => {
        setClassType(event.target.value);
    };
    const [frequency, setFrequency] = React.useState('unica');
    const handleChangeFrecuencia = (event) => {
        setFrequency(event.target.value);
    };
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            console.log({
                materia: data.get('materia'),
            });
            const createClassPayload = {
                professor: getUserId(),
                name: data.get('materia').toString(),
                duration: data.get('duration').toString(),
                frequency: frequency,
                type: tipoClase,
                cost: parseInt(data.get('cost').toString()),
            };
            await addClass(createClassPayload);
        }
        catch (error) {
            console.log(error);
        }
    };
    const preventMinus = (e) => {
        if (e.code === 'Minus') {
            e.preventDefault();
        }
    };
    return (<div>
      <NavbarComponent></NavbarComponent>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}></Box>

          <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Box sx={{ height: "auto", width: "fit-content", border: 1, borderRadius: 3, boxShadow: 20,
            my: 0, mx: "auto", padding: 2 }}>

              <Typography component="h1" variant="h5">
                Publicar una clase
              </Typography>

              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12}>
                  <TextField required id="outlined-required" label="Materia" name='materia'/>
                </Grid>

                <Grid item xs={12}>
                  <TextField required id="outlined-required" label="Duracion de la clase" name='duration'/>
                </Grid>

                <Grid item xs={12}>
                  <FormControl required fullWidth>
                    <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                    <Select value={tipoClase} label="Tipo de Clase" onChange={handleChangeClassType}>
                      <MenuItem value={'Individual'}>Individual</MenuItem>
                      <MenuItem value={'Grupal'}>Grupal</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl required fullWidth>
                    <InputLabel>Frecuencia</InputLabel>
                    <Select value={frequency} label="Frecuencia de la Clase" onChange={handleChangeFrecuencia}>
                      <MenuItem value={'Unica'}>Unica</MenuItem>
                      <MenuItem value={'Semanal'}>Semanal</MenuItem>
                      <MenuItem value={'Mensual'}>Mensual</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>


                <Grid item xs={12}>
                  <TextField required id="outlined-number" label="Costo" type="number" 

    InputLabelProps={{
            shrink: true
        }} InputProps={{
            inputProps: { min: 0 }
        }} name='cost'/>
                </Grid>
              </Grid>

              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Publicar
              </Button>
            </Box>

          </Box>
          <FooterComponent></FooterComponent>
        </Container>
      </ThemeProvider>
    </div>);
}
