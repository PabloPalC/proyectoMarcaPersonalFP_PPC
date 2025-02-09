import './Pie.css';

import logoFB from '../../assets/logos/logofb.svg'
import logoIG from '../../assets/logos/logoig.svg'
import logoTK from '../../assets/logos/logotiktok.svg'
import logoYT from '../../assets/logos/logoyoutube.svg'
import logoTW from '../../assets/logos/logotw.svg'
import logoMP from '../../assets/logos/mp-logoReves.png'

const Pie = () => {

    return (
        
        <footer className='align-items-center fondoFooter'>
            <section className='datosAPI d-flex'>
                <div className='datosIndividuales'>
                    <h2>Empresas</h2>
                    <h2>2</h2>
                </div>

                <div className='datosIndividuales'>
                    <h2>Proyectos</h2>
                    <h2>2</h2>
                </div>

                <div className='datosIndividuales'>
                    <h2>Alumnos</h2>
                    <h2>2</h2>
                </div>
            </section>
            <section>
                <div className='text-center'>
                    <h2>CIFP Carlos III</h2>
                    <p>C/ Carlos III, 30201 - Cartagena | 30019702@murciaeduca.es | 968321301</p>
                    <img className='logos' src={logoFB} alt="Logo FaceBook" />
                    <img className='logos' src={logoTW} alt="Logo Twitter" />
                    <img className='logos' src={logoIG} alt="Logo Instagram" />
                    <img className='logos' src={logoTK} alt="Logo Tiktok" />
                    <img className='logos' src={logoYT} alt="Logo Youtube" />
                </div>
            </section>
            <section>
                <div className='text-center'>
                    <img className='logoMP' src={logoMP} alt="Logo MarcaPersonal" />
                    Marca Personal. FP | Diseño Web CFGS Desarrollo de Aplicaciones Web &copy; 2025
                </div>
            </section>
        </footer>
    )
};

export default Pie;