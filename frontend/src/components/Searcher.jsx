import { FormControl, FormLabel, Select, Button } from '@chakra-ui/react';
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from '@choc-ui/chakra-autocomplete';
import React, { useState } from 'react';
import './styles.css';

const Searcher = ({ filtros, buscar, materias }) => {
  const frecuencias = [
    { label: 'Unica', id: 1 },
    { label: 'Semanal', id: 2 },
    { label: 'Mensual', id: 3 },
  ];
  const tiposDeClases = [
    { label: 'Individual', id: 1 },
    { label: 'Grupal', id: 2 },
  ];
  const calificaciones = [
    { label: '1', id: 1 },
    { label: '2', id: 2 },
    { label: '3', id: 3 },
    { label: '4', id: 4 },
    { label: '5', id: 5 },
  ];
  const [materiaSelect, setMateria] = useState('');
  const getSelectedMateria = e => {
    setMateria(e.target.value);
  };
  const [tipoDeClase, setTipoDeClase] = useState('');
  const getTipoDeClase = e => {
    setTipoDeClase(e.target.value);
  };
  const [frecuencia, setFrecuencia] = useState('');
  const getFrecuencia = e => {
    setFrecuencia(e.target.value);
  };
  const [calificacion, setCalificacion] = useState('');
  const getCalificacion = e => {
    setCalificacion(e.target.value);
  };

  const DropdownFrecuencia = () => {
    return (
      <FormControl>
        <FormLabel>Frecuencia</FormLabel>
        <Select
          placeholder="Frecuencia"
          value={frecuencia}
          onChange={getFrecuencia}
        >
          {frecuencias.map(frecuencia => (
            <option key={`option-${frecuencia.id}`} value={frecuencia.label}>
              {frecuencia.label}
            </option>
          ))}
        </Select>
      </FormControl>
    );
  };

  const DropdownMateria = () => {
    return (
      <FormControl w="60">
        <FormLabel>Materias</FormLabel>
        <AutoComplete openOnFocus>
          <AutoCompleteInput variant="filled" />
          <AutoCompleteList onChange={getSelectedMateria}>
            {materias.map(materia => (
              <AutoCompleteItem
                key={`option-${materia.id}`}
                value={materia.title}
                textTransform="capitalize"
              >
                {materia.label}
              </AutoCompleteItem>
            ))}
          </AutoCompleteList>
        </AutoComplete>
      </FormControl>
    );
  };

  const DropdownCalificacion = () => {
    return (
      <FormControl>
        <FormLabel>Calificacion</FormLabel>
        <Select
          placeholder="Calificacion"
          value={calificacion}
          onChange={getCalificacion}
        >
          {calificaciones.map(calificacion => (
            <option
              key={`option-${calificacion.id}`}
              value={calificacion.label}
              onInput={getCalificacion}
            >
              {calificacion.label}
            </option>
          ))}
        </Select>
      </FormControl>
    );
  };
  const DropdownTipoDeClase = () => {
    return (
      <FormControl>
        <FormLabel>Tipo de Clase</FormLabel>
        <Select
          placeholder="Tipo De Clase"
          value={tipoDeClase}
          onChange={getTipoDeClase}
        >
          {tiposDeClases.map(tipoDeClase => (
            <option key={`option-${tipoDeClase.id}`} value={tipoDeClase.label}>
              {tipoDeClase.label}
            </option>
          ))}
        </Select>
      </FormControl>
    );
  };

  const buscarClases = () => {
    const filtros = {
      materia: materiaSelect,
      frecuencia: frecuencia,
      tipoDeClase: tipoDeClase,
      calificacion: calificacion,
    };
    setCalificacion('');
    setFrecuencia('');
    setTipoDeClase('');
    buscar(filtros);
  };
  return (
    <div className="container">
      <div className="row">
        <DropdownMateria></DropdownMateria>
      </div>
      <div className="row">
        <DropdownFrecuencia></DropdownFrecuencia>
      </div>
      <div className="row">
        <DropdownTipoDeClase></DropdownTipoDeClase>
      </div>
      <div className="row">
        <DropdownCalificacion></DropdownCalificacion>
      </div>
      <div className="row">
        <Button
          flex={1}
          fontSize={'sm'}
          rounded={'full'}
          bg={'blue.400'}
          color={'white'}
          boxShadow={
            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
          }
          _hover={{
            bg: 'blue.500',
          }}
          _focus={{
            bg: 'blue.500',
          }}
          onClick={buscarClases}
        >
          Buscar Clases
        </Button>
      </div>
    </div>
  );
};

export default Searcher;
