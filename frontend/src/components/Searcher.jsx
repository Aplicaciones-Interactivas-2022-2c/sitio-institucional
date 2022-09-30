import { FormControl, FormLabel, Select, Button} from '@chakra-ui/react';
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from '@choc-ui/chakra-autocomplete';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { materias } from 'data/materias';

const Searcher = () => {
  
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
  const [materiaSelect, setMateria] = useState({ title: '', id: '' });
  const getSelectedMateria = (event, value) => {
    setMateria(value);
  };
  const [tipoDeClase, setTipoDeClase] = useState({ label: '', id: '' });
  const getTipoDeClase = (event, value) => {
    setTipoDeClase(value);
  };
  const [frecuencia, setFrecuencia] = useState({ label: '', id: '' });
  const getFrecuencia = (event, value) => {
    setFrecuencia(value);
  };
  const [calificacion, setCalificacion] = useState({ label: '', id: '' });
  const getCalificacion = (event, value) => {
    setCalificacion(value);
  };
  const navigate = useNavigate();

  const DropdownFrecuencia = () => {
    return (
      <FormControl>
        <FormLabel>Frecuencia</FormLabel>
        <Select placeholder="Frecuencia">
          {frecuencias.map((frecuencias, cid) => (
            <option
              key={`option-${frecuencias.id}`}
              value={frecuencias.label}
              onChange={getFrecuencia}
            >
              {frecuencias.label}
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
          <AutoCompleteList>
            {materias.map((materia, cid) => (
              <AutoCompleteItem
                key={`option-${materia.id}`}
                value={materia.title}
                textTransform="capitalize"
                onChange={getSelectedMateria}
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
        <Select placeholder="Calificacion">
          {calificaciones.map((calificaciones, cid) => (
            <option
              key={`option-${calificaciones.id}`}
              value={calificaciones.label}
              onInput={getCalificacion}
            >
              {calificaciones.label}
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
        <Select placeholder="Tipo De Clase">
          {tiposDeClases.map((tiposDeClases, cid) => (
            <option
              key={`option-${tiposDeClases.id}`}
              value={tiposDeClases.label}
              onChange={getTipoDeClase}
            >
              {tiposDeClases.label}
            </option>
          ))}
        </Select>
      </FormControl>
    );
  };

  const buscarClases = () => {
    //filter materias json and return to Cards the json filtered by materias, tipo de clase, frecuencia, calificacion
    var jsonNuevo = {}
    materias.filter((materia) => {
      if (materia.title === materiaSelect.title) {
        jsonNuevo.append(materia)

      }
      if (materia.tipoDeClase === tipoDeClase.label) {
        jsonNuevo.append(materia)
      }
        if (materia.frecuencia === frecuencia.label) {
          jsonNuevo.append(materia)
        }
        if (materia.calificacion === calificacion.label) {
          jsonNuevo.append(materia)
        }
    })
    navigate('/home', { state: jsonNuevo });
    
    
  };
  return (
    <div className='container'>
      <div className='row'>
        <DropdownMateria></DropdownMateria>
      </div>
      <div className='row'>
        <DropdownFrecuencia></DropdownFrecuencia>
      </div>
      <div className='row'>
        <DropdownTipoDeClase></DropdownTipoDeClase>
      </div>
      <div className='row'>
        <DropdownCalificacion></DropdownCalificacion>
      </div>
      <div className='row'>
        <Button flex={1}
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
              }} onClick={buscarClases}>
          Buscar Clases
        </Button>
      </div>
    </div>
  );
};

export default Searcher;
