import { FormControl, FormLabel } from '@chakra-ui/react';
import { AutoComplete, AutoCompleteInput, AutoCompleteItem, AutoCompleteList } from '@choc-ui/chakra-autocomplete';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Searcher = () => {
    const materias = [
        { label: 'test', id: 1 },
        { label: 'test2', id: 2 }
    ];
    const frecuencias = [
        { label: 'Unica', id: 1 },
        { label: 'Semanal', id: 2 },
        { label: 'Mensual', id: 3 }
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
        { label: '5', id: 5 }
    ];
    const [materia, setMateria] = useState({ label: '', id: '' });
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
            <FormControl w="60">
        <FormLabel>frecuencias</FormLabel>
        <AutoComplete openOnFocus>
          <AutoCompleteInput variant="filled" />
          <AutoCompleteList>
            {frecuencias.map((frecuencia, cid) => (
              <AutoCompleteItem
                key={`option-${frecuencia.id}`}
                value={frecuencia.label}
                textTransform="capitalize"
              >
                {frecuencia.label}
              </AutoCompleteItem>
            ))}
          </AutoCompleteList>
        </AutoComplete>
      </FormControl>
        );
    }
    const buscarClases = () => {
        navigate(`/clases?clase=${materia?.label}&frecuencia=${frecuencia?.label}&tipoDeClase=${tipoDeClase?.label}&calificacion=${calificacion?.label}`, { state: {
                materia,
                tipoDeClase,
                frecuencia,
                calificacion
            } });
    };
    return (<div>
        <div>
        <DropdownFrecuencia></DropdownFrecuencia>
        </div>
        <div >
        <DropdownFrecuencia></DropdownFrecuencia>
        </div>
        <div >
        <DropdownFrecuencia></DropdownFrecuencia>
        </div>
        <div>
          <DropdownFrecuencia></DropdownFrecuencia>
        </div>
        <div>
          <button disabled={!materia?.id} onClick={buscarClases}>
            Buscar Clases 
          </button>
        </div>
        
      </div>);
};

export default Searcher;
