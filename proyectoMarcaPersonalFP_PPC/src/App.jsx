import './App.css';
import Cabecera from './componentes/Cabecera/Cabecera';
import Pie from './componentes/Pie/Pie';
import Alumno from './paginas/Alumno/Alumno';
import CentroEducativo from './paginas/CentroEducativo/CentroEducativo';
import Empresa from './paginas/Empresa/Empresa';
import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home/Home';
import { useState } from 'react';
import idioma from './mocks/mock-idiomas';
import IdiomaContext from './componentes/contextos/IdiomaContext';

function App() {

  const [idiomaPagina, setIdiomaPagina] = useState(idioma.es);

  function cambiarIdioma(idiomaElegido) {
    setIdiomaPagina(idioma[idiomaElegido]);
  }

  return (
      <div>

        <Cabecera cambiarIdioma={cambiarIdioma}></Cabecera>
        
        <IdiomaContext.Provider value={idiomaPagina}>
           
        <Routes>

          <Route path="/"
              element={
                <div>
                  <Home></Home>
                  <Pie></Pie>
                </div>
              }>
          </Route>

          <Route path="/empresa"
              element={<Empresa></Empresa>}> 
          </Route>

          <Route path="/centroeducativo"
              element={<CentroEducativo></CentroEducativo>}> 
          </Route>

          <Route path="/alumno"
              element={<Alumno></Alumno>}> 
          </Route>

        </Routes>
         
        </IdiomaContext.Provider>
        
      </div>
  )
}

export default App
