import { Box, Grid } from '@chakra-ui/react';
import React from 'react';
import Card from "./Card";
import { materias } from 'data/materias';
import './styles.css';


export default function Cards() {


    return (
			<Grid templateColumns='repeat(4, 1fr)' gap={3}>
				{materias.map(materia => (
                    <Box className='col-md-6'key={materia.id}>
                    <Card materia = {materia} key={materia.id}></Card>
                    </Box>
                ))}
			</Grid>

    );
}
;
