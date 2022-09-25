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
                onChange={getFrecuencia}
              >
                {frecuencia.label}
              </AutoCompleteItem>
            ))}
          </AutoCompleteList>
        </AutoComplete>
      </FormControl>
        );
    }

    const DropdownMateria = () => {
        return (
            <FormControl w="60">
        <FormLabel>materias</FormLabel>
        <AutoComplete openOnFocus>
            <AutoCompleteInput variant="filled" />
            <AutoCompleteList>
                {materias.map((materia, cid) => (
                    <AutoCompleteItem

                        key={`option-${materia.id}`}
                        value={materia.label}
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

    }


    const DropdownTipoDeClase = () => {
        return (
            <FormControl w="60">
        <FormLabel>tipos de clases</FormLabel>
        <AutoComplete openOnFocus>
            <AutoCompleteInput variant="filled" />
            <AutoCompleteList>
                {tiposDeClases.map((tipoDeClase, cid) => (
                    <AutoCompleteItem
                    key={`option-${tipoDeClase.id}`}
                    value={tipoDeClase.label}
                    textTransform="capitalize"
                    onChange={getTipoDeClase}
                >
                    {tipoDeClase.label}
                </AutoCompleteItem>
            ))}
        </AutoCompleteList>
    </AutoComplete>
</FormControl>
    );

}

const DropdownCalificacion = () => {
    return (
        <FormControl w="60">
    <FormLabel>calificaciones</FormLabel>
    <AutoComplete openOnFocus>
        <AutoCompleteInput variant="filled" />
        <AutoCompleteList>
            {calificaciones.map((calificacion, cid) => (
                <AutoCompleteItem
                key={`option-${calificacion.id}`}
                value={calificacion.label}
                textTransform="capitalize"
                onChange={getCalificacion}
            >
                {calificacion.label}
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
        <DropdownMateria></DropdownMateria>
        </div>
        <div >
        <DropdownFrecuencia></DropdownFrecuencia>
        </div>
        <div >
        <DropdownTipoDeClase></DropdownTipoDeClase>
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
