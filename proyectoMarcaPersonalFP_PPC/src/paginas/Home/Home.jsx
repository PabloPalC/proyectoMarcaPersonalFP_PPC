import React from 'react';
import './Home.css';
import imgEmpresas from '../../assets/img/imgEmpresa.jpg'
import imgColegio from '../../assets/img/imgColegio.jpg'
import imgAlumno from '../../assets/img/imgAlumno.jpg'

const Home = () => {
    return (
        <div>
            <img src={imgEmpresas} alt="Empresas" />
            <img src={imgColegio} alt="Centro educativo" />
            <img src={imgAlumno} alt="Alumnos" />
        </div>
    );
};
export default Home;