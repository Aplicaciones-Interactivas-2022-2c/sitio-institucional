import { Box, Grid } from '@chakra-ui/react';
import React from 'react';
import Card from './Card';
import './styles.css';

export default function Cards({ materiasFiltadas }) {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={3}>
      {materiasFiltadas.map(materia => (
        <Box className="col-md-6" key={materia.id}>
          <Card materia={materia} key={materia.id}></Card>
        </Box>
      ))}
    </Grid>
  );
}
