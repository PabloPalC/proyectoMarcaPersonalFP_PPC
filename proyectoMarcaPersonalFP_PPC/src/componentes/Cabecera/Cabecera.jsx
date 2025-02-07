import React from 'react';
import './Cabecera.css';
import banderaUK from '../../assets/logos/banderaUK.svg'
import banderaESP from '../../assets/logos/banderaESP.svg'
import logoMP from '../../assets/logos/mp-logoNaranja100.png'

const Cabecera = () => {
    return (
            <header>
                <nav>
                    <img className='logo' href='' src={logoMP} alt="Logo MarcaPersonal" />
                    <h1>Marca Personal FP</h1>
                    <img className='idiomas' src={banderaESP} alt="Bandera Español" />
                    <img className='idiomas' src={banderaUK} alt="Bandera Britanica" />
                </nav>
            </header>
    );
};

export default Cabecera;