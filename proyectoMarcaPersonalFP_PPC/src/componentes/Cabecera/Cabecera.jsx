import React from 'react';
import './Cabecera.css';
import banderaUK from '../../assets/logos/banderaUK.svg'
import banderaESP from '../../assets/logos/banderaESP.svg'
import logoMP from '../../assets/logos/mp-logoNaranja100.png'
import { Link, useNavigate } from 'react-router-dom';

function volverHome(){
    const navigate = useNavigate();
    navigate('/')
}

const Cabecera = () => {

    
    return (
            <header>
                <nav>
                    <Link to="/"> <img className='logo' src={logoMP} alt="Logo MarcaPersonal" /> </Link>
                    <h1 className='titulo'>Marca Personal FP</h1>
                    <img className='d-flex align-items-center idiomas' src={banderaESP} alt="Bandera Español" />
                    <img className='d-flex align-items-center idiomas' src={banderaUK} alt="Bandera Britanica" />
                </nav>
            </header>
    );
};

export default Cabecera;