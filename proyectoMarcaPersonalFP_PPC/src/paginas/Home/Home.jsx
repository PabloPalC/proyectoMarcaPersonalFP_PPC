import React from 'react';
import './Home.css';
import imgEmpresas from '../../assets/img/imgEmpresa.jpg'
import imgColegio from '../../assets/img/imgColegio.jpg'
import imgAlumno from '../../assets/img/imgAlumno.jpg'

const Home = () => {
    return (
        <div className='fondoHome'>
            <a href="/empresa"><img className="col-4 imgServicios" src={imgEmpresas} alt="Empresas" /></a>
            <a href="/centroeducativo"><img className="col-4 imgServicios" src={imgColegio} alt="Centro educativo" /></a>
            <a href="/alumno"><img className="col-4 imgServicios" src={imgAlumno} alt="Alumnos" /></a>
        </div>
    );
};
export default Home;