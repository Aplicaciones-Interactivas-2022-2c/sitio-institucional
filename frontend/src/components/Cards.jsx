import { Box, Grid } from '@chakra-ui/react';
import React from 'react';
import Card from "./Card";

import './styles.css';


export default function Cards() {


        const materias =  [
            {
                id: 1,
                title: 'Introducion a Algoritmos',
                image: 'a',
                text: 'Aprende los Algoritmos!',
                frecuencia: 'Semanal',
                tipoDeClase: 'Individual',
                calificacion: '5',
                idProfesor: 1,
                nombreProfesor: 'Juan Perez',
            },
            {
                id: 2,
                title: 'Curso de NodeJS',
                image: 'a',
                text: 'Aprende NodeJS!',
                frecuencia: 'Diaria',
                tipoDeClase: 'Grupal',
                calificacion: '4',
                idProfesor: 2,
                nombreProfesor: 'Pedro Lopez',
            },
            {
                id: 3,
                title: 'Curso de ReactJS',
                image: '',
                text: 'Apasionate por ReactJS!',
                frecuencia: 'Semanal',
                tipoDeClase: 'Individual',
                calificacion: '5',
                idProfesor: 3,
                nombreProfesor: 'Maria Gomez',

            },
            {
                id: 4,
                title: 'Curso de Cocina',
                image: 'imgCocina',
                text: 'Aprende a cocinar',
                frecuencia: 'Semanal',
                tipoDeClase: 'Individual',
                calificacion: '5',
                idProfesor: 4,
                nombreProfesor: 'Jose Perez',
            },
            {
                id: 5,
                title: 'Curso de Matematicas',
                image: 'imgMat',
                text: 'Derivadas e Integrales',
                frecuencia: 'Semanal',
                tipoDeClase: 'Individual',
                calificacion: '5',
                idProfesor: 5,
                nombreProfesor: 'Maria Lopez',

            },
            {
                id: 6,
                title: 'Curso de Quimica',
                image: 'imgDib',
                text: 'Qumica Organica',
                frecuencia: 'Semanal',
                tipoDeClase: 'Individual',
                calificacion: '5',
                idProfesor: 6,
                nombreProfesor: 'Jose Gomez',
            }
            ,
            {
                id: 7,
                title: 'Curso de Ingles',
                image: 'imgIngles',
                text: 'Ingles Basico',
                frecuencia: 'Semanal',
                tipoDeClase: 'Individual',
                calificacion: '5',
                idProfesor: 7,

            },
            {
                id: 8,
                title: 'Curso de Espanol',
                image: 'imgEsp',
                text: 'Espanol Basico',
                frecuencia: 'Semanal',
                tipoDeClase: 'Individual',
                calificacion: '5',
                idProfesor: 8,
                nombreProfesor: 'Maria Gomez',
            },
            

        ];
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
