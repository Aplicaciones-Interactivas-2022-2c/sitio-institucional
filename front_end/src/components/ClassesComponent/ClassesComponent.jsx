import React from 'react';
import { useLocation } from 'react-router-dom';
import GridComponent from '../GridComponent/GridComponent';
import NavbarComponent from '../NavbarComponent/NavbarComponent';
import FooterComponent from "../FooterComponent/FooterComponent.lazy";
import styles from './ClassesComponent.module.scss';
const ClasesComponent = (props) => {
    const location = useLocation();
    const state = location.state; 
    return (<div>
    <NavbarComponent></NavbarComponent>
    <h1 className={styles.title}>¡Bienvenido a nuestras clases!</h1>
    <h4 className={styles.subtitle}>Disfruta de esta experiencia única</h4>
  
    <GridComponent filters={state}></GridComponent>
    <FooterComponent></FooterComponent>
  </div>);
};
export default ClasesComponent;
