import ListaFamiliasProfesionales from "../../componentes/ListaFamiliasProfesionales/ListaFamiliasProfesionales";
import MenuEmpresa from "../../componentes/MenuEmpresa/MenuEmpresa";
import ResultadosBusquedaProyectos from "../../componentes/ResultadosBusquedaProyectos/ResultadosBusquedaProyectos";
import './BusquedaProyectos.css';
const Busquedaproyectos = () => {
    return(
        <div className="busqueda-proyectos">
            <MenuEmpresa></MenuEmpresa>
            <ListaFamiliasProfesionales></ListaFamiliasProfesionales>
            <ResultadosBusquedaProyectos></ResultadosBusquedaProyectos>
        </div>
    );
};
export default Busquedaproyectos;