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
    <h1 className={styles.title}>Todo tipo de clases</h1>
    <GridComponent filters={state}></GridComponent>
    <FooterComponent></FooterComponent>
  </div>);
};
export default ClasesComponent;
