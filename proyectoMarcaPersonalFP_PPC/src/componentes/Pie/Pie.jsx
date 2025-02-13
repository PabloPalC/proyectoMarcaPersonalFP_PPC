import './Pie.css';

import logoFB from '../../assets/logos/logofb.svg'
import logoIG from '../../assets/logos/logoig.svg'
import logoTK from '../../assets/logos/logotiktok.svg'
import logoYT from '../../assets/logos/logoyoutube.svg'
import logoTW from '../../assets/logos/logotw.svg'
import logoMP from '../../assets/logos/mp-logoReves.png'
import useCounts from '../../hooks/useCounts';

const Pie = () => {

    const counts = useCounts();
    return (
        
        <footer className='align-items-center fondoFooter'>
            <section className='datosAPI'>
                <div className='datosIndividuales'>
                    <h2>Empresas</h2>
                    <h2>{counts.empresas}</h2>
                </div>

                <div className='datosIndividuales'>
                    <h2>Proyectos</h2>
                    <h2>{counts.proyectos}</h2>
                </div>

                <div className='datosIndividuales'>
                    <h2>Alumnos</h2>
                    <h2>{counts.usuarios}</h2>
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
                    Marca Personal. FP | Diseño Web CFGS Desarrollo de Aplicaciones Web &copy; 2025
                </div>
            </section>
        </footer>
    )
};

export default Pie;