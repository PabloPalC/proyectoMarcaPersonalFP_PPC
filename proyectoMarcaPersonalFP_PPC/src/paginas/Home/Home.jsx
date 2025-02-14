import React from 'react';
import './Home.css';
import imgEmpresas from '../../assets/img/imgEmpresa.jpg';
import imgColegio from '../../assets/img/imgColegio.jpg';
import imgAlumno from '../../assets/img/imgAlumno.jpg';

const Home = () => {
    return (
        <div className='fondoHome'>
            <div className="contenedorServicios">
                <div className="servicioItem">
                    <a href="/empresa">
                        <img className="imgServicios" src={imgEmpresas} alt="Empresas" />
                        <span className="textoHover">Empresas</span>
                    </a>
                </div>
                <div className="servicioItem">
                    <a href="/centroeducativo">
                        <img className="imgServicios" src={imgColegio} alt="Centro educativo" />
                        <span className="textoHover">Centro Educativo</span>
                    </a>
                </div>
                <div className="servicioItem">
                    <a href="/alumno">
                        <img className="imgServicios" src={imgAlumno} alt="Alumnos" />
                        <span className="textoHover">Alumnos</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
