import { Link } from 'react-router-dom';
import './MenuEmpresa.css';
import { useContext } from 'react';
import IdiomaContext from '../../contextos/IdiomaContext';

const MenuEmpresa = () => {
    const idioma = useContext(IdiomaContext);
    return (
        <nav>
            <ul>
                <li className='activo'>[ Empresa ]</li> 
                <Link to="empresa/proyectos">
                    <li className='enlaces'>{idioma.proyectos}</li>
                </Link>
                <li className='enlaces'>{idioma.alumnos}</li>
            </ul>
        </nav>
    );
};

export default MenuEmpresa;
