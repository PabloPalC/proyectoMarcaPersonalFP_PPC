import './Pie.css';

import logoFB from '../../assets/logos/logofb.svg'
import logoIG from '../../assets/logos/logoig.svg'
import logoTK from '../../assets/logos/logotiktok.svg'
import logoYT from '../../assets/logos/logoyoutube.svg'
import logoTW from '../../assets/logos/logotw.svg'
import logoMP from '../../assets/logos/mp-logoReves.png'
import useCounts from '../../hooks/useCounts';
import { useContext } from 'react';
import IdiomaContext from '../../contextos/IdiomaContext';

const Pie = () => {
    const idioma = useContext(IdiomaContext);
    const counts = useCounts();

    return (
        
        <footer className='align-items-center fondoFooter'>
            <section className='datosAPI'>
                <div className='datosIndividuales'>
                    <h6>{idioma.empresas}</h6>
                    <h1>{counts.empresas}</h1>
                </div>

                <div className='datosIndividuales'>
                    <h6>{idioma.proyectos}</h6>
                    <h1>{counts.proyectos}</h1>
                </div>

                <div className='datosIndividuales'>
                    <h6>{idioma.alumnos}</h6>
                    <h1>{counts.usuarios}</h1>
                </div>
            </section>
            <section>
                <div className='text-center'>
                    <a href="https://cifpcarlos3.es/es"><h2>CIFP Carlos III</h2></a>
                    <p>C/ Carlos III, 30201 - Cartagena | 30019702@murciaeduca.es | 968321301</p>
                    <a href="https://www.facebook.com/cifpcarlos3"><img className='logos' src={logoFB} alt="Logo FaceBook" /></a>
                    <a href="https://x.com/cifpcarlos3"><img className='logos' src={logoTW} alt="Logo Twitter" /></a>
                    <a href="https://www.instagram.com/cifpcarlos3/"><img className='logos' src={logoIG} alt="Logo Instagram" /></a>
                    <a href="https://www.tiktok.com/@cifpcarlos3"><img className='logos' src={logoTK} alt="Logo Tiktok" /></a>
                    <a href="https://www.youtube.com/c/cifpcarlosiiicartagena"><img className='logos' src={logoYT} alt="Logo Youtube" /></a>
                </div>
            </section>
            <section>
                <div className='text-center'>
                    <img className='logoMP' src={logoMP} alt="Logo MarcaPersonal" />
                    Marca Personal. FP | {idioma.grado} CFGS Desarrollo de Aplicaciones Web &copy; 2025
                </div>
            </section>
        </footer>
    )
};

export default Pie;