import { useEffect } from 'react';
import { Alert, AlertIcon, Box } from '@chakra-ui/react';
import Searcher from 'components/Searcher';
import Cards from 'components/Cards';
import Footer from 'components/Footer';
import { useAuthContext } from 'hooks/useAuthContext';
import { useCoursesContext } from 'hooks/useCoursesContext';
import React from 'react';
import { useState } from 'react';

export const HomePage = () => {
  const { courses: materias, dispatch } = useCoursesContext();
  const { user } = useAuthContext();
  const [filtros, setFiltros] = useState({
    materia: '',
    frecuencia: '',
    tipoDeClase: '',
    calificacion: '',
  });
  const buscar = filtros => {
    setFiltros({ ...filtros });
  };

  useEffect(() => {
    const fetchCourses = async () => {
      const url =
        'http://localhost:3030/materias?' +
        (filtros.materia ? 'title=' + filtros.materia : '') +
        (filtros.frecuencia ? '&frecuencia=' + filtros.frecuencia : '') +
        (filtros.tipoDeClase ? '&tipoDeClase=' + filtros.tipoDeClase : '') +
        (filtros.calificacion ? '&calificacion=' + filtros.calificacion : '');
      console.log(url);
      const response = await fetch(url);
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_COURSES', payload: json });
      }
    };
    fetchCourses();
  }, [filtros, dispatch, user]);

  return (
    <Box p={10} h="100%">
      {materias && (
        <Searcher
          filtros={filtros}
          buscar={buscar}
          materias={materias}
        ></Searcher>
      )}
      {materias && materias.length > 0 && (
        <Cards materiasFiltadas={materias}></Cards>
      )}
      {materias && materias.length == 0 && (
        <Alert status="warning">
          <AlertIcon />
          No se han encontrado clases que cumplan con la busqueda
        </Alert>
      )}
      <Footer></Footer>
    </Box>
  );
};
