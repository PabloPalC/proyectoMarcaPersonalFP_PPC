import ListaFamiliasProfesionales from "../../componentes/ListaFamiliasProfesionales/ListaFamiliasProfesionales";
import MenuEmpresa from "../../componentes/MenuEmpresa/MenuEmpresa";
import './BusquedaProyectos.css';
const Busquedaproyectos = () => {
    return(
        <div>
            <MenuEmpresa></MenuEmpresa>
                <h4 className="tituloBusquedaProyectos">Búsqueda de Proyectos</h4>
            <ListaFamiliasProfesionales></ListaFamiliasProfesionales>
        </div>
    );
};
export default Busquedaproyectos;