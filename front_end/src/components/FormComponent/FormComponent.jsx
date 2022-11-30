import React, { useState } from 'react';
import DropdownComponent from '../DropdownComponent/DropdownComponent';
import { useNavigate } from "react-router-dom";
import styles from "./FormComponent.module.scss";
import { Button } from '@mui/material';
import { filterClass } from '../../services/class.service';

const FormComponent = () => {
    
  React.useEffect(() => {
    searchMaterias();
  }, []);

  const searchMaterias = async () => {
      let response = await filterClass({status: 'Publicada'});
      response.data = response.data.map((element) => {
        return {
          label: element.name,
          id: element.id
        }
      });
      response.data = response.data.filter((value, index, self) => {
        return self.findIndex(v => v.label === value.label) === index;
      });
      setMaterias(response.data);
  }


  const [materias, setMaterias] = React.useState([])
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
    const buscarClases = () => {
        navigate(`/classes?clase=${materia?.label}&frecuencia=${frecuencia?.label}&tipoDeClase=${tipoDeClase?.label}&calificacion=${calificacion?.label}`, { state: {
                materia,
                tipoDeClase,
                frecuencia,
                calificacion
            } });
    };
    return (<div className={styles.container}>
        <div className={styles.fila}>
          <DropdownComponent onInputChange={getSelectedMateria} options={materias} label='Materias'></DropdownComponent>
        </div>
        <div className={styles.fila}>
          <DropdownComponent onInputChange={getTipoDeClase} options={tiposDeClases} label='Tipo de Clase'></DropdownComponent>
        </div>
        <div className={styles.fila}>
          <DropdownComponent onInputChange={getFrecuencia} options={frecuencias} label='Frecuencia'></DropdownComponent>
        </div>
        <div className={styles.fila}>
          <DropdownComponent onInputChange={getCalificacion} options={calificaciones} label='Calificacion'></DropdownComponent>
        </div>
        <br></br>
        <div>
          <Button   style={{
        borderRadius: 5,
        padding: "10px 36px",
        fontSize: "16px"
    }}
    variant="contained"
     onClick={buscarClases}>Buscar</Button>
          
        </div>
      </div>);
};
export default FormComponent;
