import useProyectos from "../../hooks/useProyectos";

const ProyectoMinCard = () => {
    const proyectos = useProyectos();
    return(
        <div className="mt-2">
        {proyectos.map((proyecto) => (
            <button key={proyecto.id} className="m-1">
                <p>Nombre: {proyecto.nombre}</p>
                <p>ID: {proyecto.id}</p>                           
            </button>
        ))}
    </div>
    );
};
export default ProyectoMinCard;