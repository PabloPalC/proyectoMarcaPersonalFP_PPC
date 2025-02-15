import React from 'react';
import './Cabecera.css';
import banderaUK from '../../assets/logos/banderaUK.svg'
import banderaESP from '../../assets/logos/banderaESP.svg'
import logoMP from '../../assets/logos/mp-logoNaranja100.png'
import { Link } from 'react-router-dom';

const Cabecera = () => {

    function cambiarIdioma(){
        
    }
    
    return (
            <header>
                <nav>
                    <Link to="/"> <img className='logo' src={logoMP} alt="Logo MarcaPersonal" /> </Link>
                    <h1 className='titulo'>Marca Personal FP</h1>
                    <img onClick={cambiarIdioma} className='d-flex align-items-center idiomas' src={banderaESP} alt="Bandera Español" />
                    <img onClick={cambiarIdioma} className='d-flex align-items-center idiomas' src={banderaUK} alt="Bandera Britanica" />
                </nav>
            </header>
    );
};

export default Cabecera;