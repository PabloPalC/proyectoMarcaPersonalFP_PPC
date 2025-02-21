import { Link } from 'react-router-dom';
import './MenuEmpresa.css';
import { useContext } from 'react';
import IdiomaContext from '../../contextos/IdiomaContext';

const MenuEmpresa = () => {
    const idioma = useContext(IdiomaContext);
    return (
        <nav>
            <ul>
                <li className='activo'> [ {idioma.empresas} ]</li> 
                <Link to="proyectos">
                    <li className='enlaces'>{idioma.proyectos}</li>
                </Link>
                <Link to="alumnos">
                <li className='enlaces'>{idioma.alumnos}</li>
                </Link>
            </ul>
        </nav>
    );
};

export default MenuEmpresa;
