import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BaseColaboradores } from './BaseColaboradores'
import './App.css'
import Listado from './Listado'
import Formulario from './Formulario'
import Buscador from './Buscador'

function App() {
  const [error, setError] = useState(false);
  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)

  return (
    <>
    <Buscador listaColaboradores={listaColaboradores} setListaColaboradores={setListaColaboradores}/>
    <Listado listaColaboradores={listaColaboradores} setListaColaboradores={setListaColaboradores}/>
    <div className="card bg-light mb-3" >
    <div className="card-header"><h2>Agregar Colaborador</h2></div>
    <div className="card-body">
    <Formulario error={error} setError={setError} listaColaboradores={listaColaboradores} setListaColaboradores={setListaColaboradores}/>
    </div>
    </div>
     
    </>
  )
}

export default App
